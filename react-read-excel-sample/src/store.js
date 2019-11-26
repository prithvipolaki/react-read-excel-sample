import { createStore } from "redux";
import { excelReducer } from "./reducer";

export const store = createStore(excelReducer);