export function changeCategory(cats) {
  return {
    type: '@cats/CHANGE',
    cats,
  };
}

export function loadCats(cats) {
  return {
    type: '@cats/LOAD',
    cats,
  };
}
export function moreCats(cats) {
  return {
    type: '@cats/MORE',
    cats,
  };
}
