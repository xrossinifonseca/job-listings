import React, { useState, createContext, useContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [db, setDb] = useState([]);
  const [tags, setTagds] = useState([]);

  const onAdd = (item) => {
    const cheackSearch = tags.find((e) => e === item);

    if (cheackSearch) {
      return setTagds([...new Set(tags)]);
    }

    tags.push(item);
    return setTagds([...tags]);
  };

  const onRemove = (item) => {
    const remove = tags.filter((fils) => fils !== item);
    setTagds(remove);
  };

  const onClear = () => {
    const removeAll = [];
    setTagds(removeAll);
  };

  const searchJob = (items) => {
    return items.filter((user) => {
      const tagFilter = [user.level, user.role].concat(
        user.tools,
        user.languages
      );
      return tags.every((filt) => tagFilter.includes(filt));
    });
  };

  return (
    <Context.Provider
      value={{ onAdd, tags, onRemove, db, setDb, onClear, searchJob }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
