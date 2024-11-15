import { StateCreator } from "zustand";

export interface ICounterSlice {
  value: number;
  status: "idle" | "loading" | "failed";
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (value: number) => void;
}

const createCounterSlice: StateCreator<ICounterSlice> = (set) => ({
  value: 0,
  status: "idle",
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
  incrementByAmount: (value) =>
    set((state) => ({ value: state.value + value })),
});

export default createCounterSlice;
