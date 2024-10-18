"use client";
import { globalAtom, globalHydrateAtom } from "../_store";
import Link from "next/link";
import { useGlobalAtom } from "../_hooks/useGlobalAtom";
import { Provider, useAtom } from "jotai";
import { component1Atom, page1Atom } from "./_store";

function Component1() {
  const [component1, setComponent1] = useAtom(component1Atom);

  return (
    <div>
      Component1:{" "}
      <input
        onChange={(e) => setComponent1(e.target.value)}
        value={component1}
      />
    </div>
  );
}

export default function Page1() {
  const [globalHydrate] = useGlobalAtom(globalHydrateAtom);
  const [global, setGlobal] = useGlobalAtom(globalAtom);

  const [page1, setPage1] = useAtom(page1Atom);

  return (
    <div>
      <div>GlobalHydrated: {globalHydrate}</div>
      <div>
        Global:{" "}
        <input onChange={(e) => setGlobal(e.target.value)} value={global} />
      </div>
      <div>
        Page1:{" "}
        <input onChange={(e) => setPage1(e.target.value)} value={page1} />
      </div>
      <Provider>
        <Component1 />
      </Provider>
      <Link href="/page2">Go to page 2</Link>
      <Link href="/page3">Go to page 3</Link>
    </div>
  );
}
