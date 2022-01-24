var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Contact
});
var import_index_2dc61825 = __toModule(require("../../chunks/index-2dc61825.js"));
const Contact = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"contact-form"}"><h1>Contact Me</h1>
	<p>Just send me a quick message and I will get back to you as soon as possible.</p>
	<form action="${"https://formsubmit.co/chris@cmfred.com"}" method="${"POST"}"><input type="${"text"}" name="${"name"}" placeholder="${"Name"}" required>
		<input type="${"email"}" name="${"email"}" placeholder="${"Email"}" required>
		
		
		<textarea name="${"message"}" id="${"message"}" cols="${"30"}" rows="${"10"}" placeholder="${"message"}"></textarea>
		<input type="${"hidden"}" name="${"_subject"}" value="${"Amanda"}">
		<input type="${"hidden"}" name="${"_captcha"}" value="${"false"}">
		<button type="${"submit"}">Send</button></form></div>`;
});
