import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      Cost: {amount} - Time: {createdAt}{" "}
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        X
      </button>
    </p>
  </div>
);

export default connect()(ExpenseListItem);
