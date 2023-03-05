const home = require("../../routes/home");
const elements = home.elements;

const data = (key, index) => {
  let array2 = null;
  let array3 = [];
  for (x in elements) {
    if (elements[x][0] == key + 1) {
      array2 = elements[x];

      for (x in array2) {
        array3.push(array2[x]);
      }

      return array3[index];
    } else [];
  }
};

exports.data = data;
