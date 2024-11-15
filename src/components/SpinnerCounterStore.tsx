import React from "react";
import Spinner from "@components/Spinner";
import useStore from "../store/store";

function SpinnerCounterStore() {
  const status = useStore((state) => state.status);
  if (status !== "loading") return null;

  return <Spinner text="load" size="10rem" />;
}

export default SpinnerCounterStore;
