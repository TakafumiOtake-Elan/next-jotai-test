"use client";

import React, { useEffect } from "react";
import { globalHydrateAtom, globalAtomIsolation, globalAtom } from "../_store";
import { Provider } from "jotai";
import { useAtomsDebugValue } from "jotai-devtools/utils";
import { useSetGlobalAtom } from "../_hooks/useGlobalAtom";

function DebugGlobalAtom() {
  const globalStore = globalAtomIsolation.useStore();
  useAtomsDebugValue({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store: globalStore as any,
  });
  return null;
}

function DebugAtom() {
  useAtomsDebugValue();
  return null;
}

function GlobalAtomLayout() {
  const setGlobalAtom = useSetGlobalAtom(globalAtom);
  useEffect(() => {
    setGlobalAtom(new Date().toISOString());
  }, [setGlobalAtom]);

  return null;
}

export default function Layout({
  date,
  children,
}: {
  date: string;
  children: React.ReactNode;
}) {
  console.log("Layout called with " + date);

  return (
    <globalAtomIsolation.Provider
      initialValues={new Map([[globalHydrateAtom, date]])}
    >
      <DebugGlobalAtom />
      <GlobalAtomLayout />
      <div>From Server Props: {date}</div>
      <Provider>
        <DebugAtom />
        {children}
      </Provider>
    </globalAtomIsolation.Provider>
  );
}
