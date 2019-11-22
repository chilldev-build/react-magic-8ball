//named export shorthand

const loadData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default loadData;
