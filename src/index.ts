import * as builder from "xmlbuilder";

var obj = {
  "soap:Envelope": {
    "@xmlns:soap": "http://www.w3.org/2003/05/soap-envelope",
    "@xmlns:tem": "http://tempuri.org/",
    "soap:Header": {
      "tem:AuthHeader": {
        "tem:login": {
          "#text": "{{carrier.id}}",
        },
      },
    },
  },
};

var xml = builder.create(obj).end({ pretty: true });
console.log(xml);
