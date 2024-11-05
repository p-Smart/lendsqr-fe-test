import { create } from "zustand";
import { createSetState, SetState } from "./util";

interface IGlobalStates {
  readonly setGlobalState: SetState<Omit<IGlobalStates, "setGlobalState">>;
}

const useGlobalStore = create<IGlobalStates>((set) => ({
  setGlobalState: createSetState<Omit<IGlobalStates, "setGlobalState">>(set),
}));

export default useGlobalStore;
