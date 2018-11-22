export const arrayToObject = (array, initialValue) => {
  return array.reduce((acc, item) => {
    acc[item] = initialValue;
    return acc;
  }, {});
};
