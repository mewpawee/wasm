import { add } from "./pkg/wasm.js";

const runWasm = async () => {
  const addResult = add(24, 24);
  console.log("addResult", addResult);
};

runWasm();
