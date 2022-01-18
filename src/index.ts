import * as builder from "xmlbuilder";

import object from "./object";

var xml = builder.create(object.LABEL_NUMBER.template2).end({ pretty: true });

console.log(xml);
