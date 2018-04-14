import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 15000, createdAt: 1000000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 20000, createdAt: 1000001 })
);

store.dispatch(setTextFilter("Water"));

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
