import object from "./object2";
import * as _ from "lodash";
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
array.forEach((element) => {
  combined = _.merge(element, combined);
});

export default combined;
