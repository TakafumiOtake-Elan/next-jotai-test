"use client";
import { useGlobalAtom, useGlobalAtomValue } from "../_hooks/useGlobalAtom";
import { globalAtom, globalHydrateAtom } from "../_store";
import Link from "next/link";

export default function Page1() {
  const [globalHydrate] = useGlobalAtom(globalHydrateAtom);
  const global = useGlobalAtomValue(globalAtom);

  return (
    <div>
      <div>GlobalHydrated: {globalHydrate}</div>
      <div>Global: {global}</div>
      <Link href="/page1">Go to page 1</Link>
      <Link href="/page3">Go to page 3</Link>
    </div>
  );
}
