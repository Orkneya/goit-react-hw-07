import React from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchItem = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        className={css.search}
        type="text"
        placeholder="Enter search name"
        value={searchItem}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
