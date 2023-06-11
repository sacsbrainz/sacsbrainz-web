import { atom } from "recoil";

export const payModalState = atom<boolean>({
  key: "payModalState",
  default: false,
});
