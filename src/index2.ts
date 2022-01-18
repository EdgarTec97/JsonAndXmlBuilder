import object from "./object2";

const objectC: any = object;
const keys = Object.keys(object);

let template = "[";

keys.forEach((key, index) => {
  const fixedKey = key.split(".");
  let templateString = "{";

  let objectStructred: any = "";

  fixedKey.forEach((element, index) => {
    if (fixedKey.length == index + 1) {
      objectStructred += `"${element}" : "${objectC[key]}"`;
      for (let i = 0; i < index; i++) {
        objectStructred += "}";
      }
    } else {
      objectStructred += `"${element}" : {`;
    }
  });

  templateString +=
    keys.length == index + 1 ? `${objectStructred}}` : `${objectStructred}},`;
  template += templateString;
});
template += "]";
const array: any[] = JSON.parse(template);
let combined = {};
// array.forEach((element) => {
//   objCombine(element, combined);
// });
objCombine(array[0], combined);
objCombine(array[1], combined);
objCombine(array[2], combined);
objCombine(array[3], combined);
objCombine(array[4], combined);
console.log(JSON.stringify(combined, null, 1));

function objCombine(obj: any, variable: any) {
  for (let key of Object.keys(obj)) {
    if (!variable[key]) variable[key] = {};

    for (let innerKey of Object.keys(obj[key])) {
      variable[key][innerKey] = obj[key][innerKey];
    }
  }
}
