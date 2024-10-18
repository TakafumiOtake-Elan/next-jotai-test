import { atom } from "jotai";
import { createIsolation } from "jotai-scope";

export const globalHydrateAtom = atom("");

export const globalAtom = atom("");

export const normalAtom = atom("");

export const globalAtomIsolation = createIsolation();
