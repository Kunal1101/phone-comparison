const getFeatureDifferences = (items, index) => {
  const values = items.map((item) => item.features[index]);
  return values.map((value, i) =>
    values.every((v) => v === value) ? false : true
  );
};

export default getFeatureDifferences;
