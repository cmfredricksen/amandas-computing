const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","images/mem-slots.jpg"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg"},
		entry: {"file":"start-b00251a0.js","js":["start-b00251a0.js","chunks/vendor-86ba30b8.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/services\/?$/,
				params: null,
				path: "/services",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/contact\/?$/,
				params: null,
				path: "/contact",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/thanks\/?$/,
				params: null,
				path: "/thanks",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,6],
				b: [1]
			}
		]
	}
});
