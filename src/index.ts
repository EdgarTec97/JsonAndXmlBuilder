import * as builder from "xmlbuilder";

import combined from "./jsonBuilder";

var xml = builder.create(combined).end({ pretty: true });

console.log(xml);
