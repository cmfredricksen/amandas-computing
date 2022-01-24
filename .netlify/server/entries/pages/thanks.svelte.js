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
  default: () => Thanks
});
var import_index_2dc61825 = __toModule(require("../../chunks/index-2dc61825.js"));
var thanks_svelte_svelte_type_style_lang = "";
const css = {
  code: ".thank-you.svelte-88df4q{display:flex;flex-direction:column;justify-content:space-around;width:70%;height:200px;padding:1rem;text-align:center;margin:3rem auto;border:2px solid var(--color-ltPurple);background-color:var(--color-dkPurple)}a.svelte-88df4q{color:var(--color-white)}",
  map: null
};
const Thanks = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"thank-you svelte-88df4q"}"><h1>Your form has been submitted</h1>

	<p>Thank you for contacting me. I will get back to you soon.</p>

	<i class="${"material-icons-outlined"}">thumb_up</i>

	<a href="${"/"}" class="${"svelte-88df4q"}">Return to Home Page</a>
</div>`;
});
