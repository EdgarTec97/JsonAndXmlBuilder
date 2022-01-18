import object from "./object2";

const objectC: any = object;
const keys = Object.keys(object);

let combined = {};

keys.forEach((key) => {
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

  templateString += `${objectStructred}}`;

  objCombine(JSON.parse(templateString), combined);
});

console.log(JSON.stringify(combined));

function objCombine(obj: any, variable: any) {
  for (let key of Object.keys(obj)) {
    if (!variable[key]) variable[key] = {};

    for (let innerKey of Object.keys(obj[key]))
      variable[key][innerKey] = obj[key][innerKey];
  }
}
