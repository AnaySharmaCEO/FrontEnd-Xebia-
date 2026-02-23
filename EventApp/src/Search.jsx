import React from 'react';
import EventToDo from './EventToDo';

function Search({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={value}
      onChange={onChange}
    />
  );
}

export default Search;