import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createCounterSlice, { ICounterSlice } from "./counterSlice";
import createFishSlice, { IFishSlice } from "./createFish";

const useStore = create<ICounterSlice & IFishSlice>()(
  devtools((...a) => ({
    ...createCounterSlice(...a),
    ...createFishSlice(...a),
  })),
);
console.log(useStore.getState());

export default useStore;
