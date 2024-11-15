import { StateCreator } from "zustand";

export interface IFishSlice {
  fishes: number;
  addFish: () => void;
}

const createFishSlice: StateCreator<IFishSlice> = (set) => ({
  fishes: 0,
  value: 100500,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

export default createFishSlice;
