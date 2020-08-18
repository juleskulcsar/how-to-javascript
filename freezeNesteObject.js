const freezeNestedObj = obj => {
  Object.entries(obj).forEach(([key, val]) => {
    if ((val && typeof val === "object") || typeof val === "function")
      freezeNestedObj(val);
    else Object.freeze(obj);
  });
};
