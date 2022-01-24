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
  default: () => _layout
});
var import_index_2dc61825 = __toModule(require("../../chunks/index-2dc61825.js"));
var global = "";
var nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.svelte-my7grq{font-size:small;text-decoration:none;color:white;margin-left:0.5rem;padding:0.5rem 1rem;background-color:var(--color-dkPurple2);border-radius:1rem}a.svelte-my7grq:hover{color:var(--color-ltPurple);font-weight:600}",
  map: null
};
const Nav = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav><a href="${"/"}" class="${"svelte-my7grq"}">Home</a>
	<a href="${"/services"}" class="${"svelte-my7grq"}">Services</a>
	<a href="${"/about"}" class="${"svelte-my7grq"}">About</a>
	<a href="${"/contact"}" class="${"svelte-my7grq"}">Contact</a>
</nav>`;
});
var header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-av0mmr{display:flex;align-items:center;justify-content:space-between;padding:1rem;background-color:var(--color-ltPurple)}h1.svelte-av0mmr{color:var(--color-dkPurple2)}.logo.svelte-av0mmr{color:white;border:3px solid white;border-radius:3rem;padding:0.5rem 1rem;background-color:var(--color-dkPurple2)}",
  map: null
};
const Header = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-av0mmr"}"><h1 class="${"logo svelte-av0mmr"}">\u269C</h1>
	<h1 class="${"svelte-av0mmr"}">Gaylord Custom Computing</h1>
	${(0, import_index_2dc61825.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
</header>`;
});
var footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-ygd173{padding:2rem 0;color:white;font-weight:600;background:linear-gradient(transparent, rgba(0, 0, 0, 0.5));text-align:center}",
  map: null
};
const Footer = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-ygd173"}"><p>\xA9 2022 Gaylord Custom Computing \u2022 All Rights Reserved \u269C</p>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-lhx93t{max-width:900px;margin:0 auto;background-color:var(--color-dkPurple3);color:var(--color-white)}",
  map: null
};
const _layout = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_2dc61825.v)(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"wrapper svelte-lhx93t"}">${slots.default ? slots.default({}) : ``}</div>

${(0, import_index_2dc61825.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
