import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { globalAtomIsolation } from "../_store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGlobalAtom = ((atom: any, options?: any) => {
  return globalAtomIsolation.useAtom(atom, options);
}) as typeof useAtom;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGlobalAtomValue = ((atom: any, options?: any) => {
  return globalAtomIsolation.useAtomValue(atom, options);
}) as typeof useAtomValue;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSetGlobalAtom = ((atom: any, options?: any) => {
  return globalAtomIsolation.useSetAtom(atom, options);
}) as typeof useSetAtom;
