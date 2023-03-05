const complementar = (elements) => {
  let Array = [];
  for (x in elements) {
    Array.push([elements[x][0], elements[x][1]]);
  }
  if (Array.length == 162) {
  } else {
    let add = 163 - Array.length;
    for (let i = 1; i < add; i++) {
      Array.push("X");
    }
  }
  return Array;
};

exports.complementar = complementar;
