/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "c3e88a9f15f5e55d0f3f" + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~analytics~main","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [["street","city","zip","state","beds","baths","sq__ft","type","sale_date","price","latitude","longitude"],["3526 HIGH ST","SACRAMENTO","95838","CA","2","1","836","Residential","Wed May 21 00:00:00 EDT 2008","59222","38.631913","-121.434879"],["51 OMAHA CT","SACRAMENTO","95823","CA","3","1","1167","Residential","Wed May 21 00:00:00 EDT 2008","68212","38.478902","-121.431028"],["2796 BRANCH ST","SACRAMENTO","95815","CA","2","1","796","Residential","Wed May 21 00:00:00 EDT 2008","68880","38.618305","-121.443839"],["2805 JANETTE WAY","SACRAMENTO","95815","CA","2","1","852","Residential","Wed May 21 00:00:00 EDT 2008","69307","38.616835","-121.439146"],["6001 MCMAHON DR","SACRAMENTO","95824","CA","2","1","797","Residential","Wed May 21 00:00:00 EDT 2008","81900","38.51947","-121.435768"],["5828 PEPPERMILL CT","SACRAMENTO","95841","CA","3","1","1122","Condo","Wed May 21 00:00:00 EDT 2008","89921","38.662595","-121.327813"],["6048 OGDEN NASH WAY","SACRAMENTO","95842","CA","3","2","1104","Residential","Wed May 21 00:00:00 EDT 2008","90895","38.681659","-121.351705"],["2561 19TH AVE","SACRAMENTO","95820","CA","3","1","1177","Residential","Wed May 21 00:00:00 EDT 2008","91002","38.535092","-121.481367"],["11150 TRINITY RIVER DR Unit 114","RANCHO CORDOVA","95670","CA","2","2","941","Condo","Wed May 21 00:00:00 EDT 2008","94905","38.621188","-121.270555"],["7325 10TH ST","RIO LINDA","95673","CA","3","2","1146","Residential","Wed May 21 00:00:00 EDT 2008","98937","38.700909","-121.442979"],["645 MORRISON AVE","SACRAMENTO","95838","CA","3","2","909","Residential","Wed May 21 00:00:00 EDT 2008","100309","38.637663","-121.45152"],["4085 FAWN CIR","SACRAMENTO","95823","CA","3","2","1289","Residential","Wed May 21 00:00:00 EDT 2008","106250","38.470746","-121.458918"],["2930 LA ROSA RD","SACRAMENTO","95815","CA","1","1","871","Residential","Wed May 21 00:00:00 EDT 2008","106852","38.618698","-121.435833"],["2113 KIRK WAY","SACRAMENTO","95822","CA","3","1","1020","Residential","Wed May 21 00:00:00 EDT 2008","107502","38.482215","-121.492603"],["4533 LOCH HAVEN WAY","SACRAMENTO","95842","CA","2","2","1022","Residential","Wed May 21 00:00:00 EDT 2008","108750","38.672914","-121.35934"],["7340 HAMDEN PL","SACRAMENTO","95842","CA","2","2","1134","Condo","Wed May 21 00:00:00 EDT 2008","110700","38.700051","-121.351278"],["6715 6TH ST","RIO LINDA","95673","CA","2","1","844","Residential","Wed May 21 00:00:00 EDT 2008","113263","38.689591","-121.452239"],["6236 LONGFORD DR Unit 1","CITRUS HEIGHTS","95621","CA","2","1","795","Condo","Wed May 21 00:00:00 EDT 2008","116250","38.679776","-121.314089"],["250 PERALTA AVE","SACRAMENTO","95833","CA","2","1","588","Residential","Wed May 21 00:00:00 EDT 2008","120000","38.612099","-121.469095"],["113 LEEWILL AVE","RIO LINDA","95673","CA","3","2","1356","Residential","Wed May 21 00:00:00 EDT 2008","121630","38.689999","-121.46322"],["6118 STONEHAND AVE","CITRUS HEIGHTS","95621","CA","3","2","1118","Residential","Wed May 21 00:00:00 EDT 2008","122000","38.707851","-121.320707"],["4882 BANDALIN WAY","SACRAMENTO","95823","CA","4","2","1329","Residential","Wed May 21 00:00:00 EDT 2008","122682","38.468173","-121.444071"],["7511 OAKVALE CT","NORTH HIGHLANDS","95660","CA","4","2","1240","Residential","Wed May 21 00:00:00 EDT 2008","123000","38.702792","-121.38221"],["9 PASTURE CT","SACRAMENTO","95834","CA","3","2","1601","Residential","Wed May 21 00:00:00 EDT 2008","124100","38.628631","-121.488097"],["3729 BAINBRIDGE DR","NORTH HIGHLANDS","95660","CA","3","2","901","Residential","Wed May 21 00:00:00 EDT 2008","125000","38.701499","-121.37622"],["3828 BLACKFOOT WAY","ANTELOPE","95843","CA","3","2","1088","Residential","Wed May 21 00:00:00 EDT 2008","126640","38.70974","-121.37377"],["4108 NORTON WAY","SACRAMENTO","95820","CA","3","1","963","Residential","Wed May 21 00:00:00 EDT 2008","127281","38.537526","-121.478315"],["1469 JANRICK AVE","SACRAMENTO","95832","CA","3","2","1119","Residential","Wed May 21 00:00:00 EDT 2008","129000","38.476472","-121.501711"],["9861 CULP WAY","SACRAMENTO","95827","CA","4","2","1380","Residential","Wed May 21 00:00:00 EDT 2008","131200","38.558423","-121.327948"],["7825 CREEK VALLEY CIR","SACRAMENTO","95828","CA","3","2","1248","Residential","Wed May 21 00:00:00 EDT 2008","132000","38.472122","-121.404199"],["5201 LAGUNA OAKS DR Unit 140","ELK GROVE","95758","CA","2","2","1039","Condo","Wed May 21 00:00:00 EDT 2008","133000","38.423251","-121.444489"],["6768 MEDORA DR","NORTH HIGHLANDS","95660","CA","3","2","1152","Residential","Wed May 21 00:00:00 EDT 2008","134555","38.691161","-121.37192"],["3100 EXPLORER DR","SACRAMENTO","95827","CA","3","2","1380","Residential","Wed May 21 00:00:00 EDT 2008","136500","38.566663","-121.332644"],["7944 DOMINION WAY","ELVERTA","95626","CA","3","2","1116","Residential","Wed May 21 00:00:00 EDT 2008","138750","38.713182","-121.411227"],["5201 LAGUNA OAKS DR Unit 162","ELK GROVE","95758","CA","2","2","1039","Condo","Wed May 21 00:00:00 EDT 2008","141000","38.423251","-121.444489"],["3920 SHINING STAR DR","SACRAMENTO","95823","CA","3","2","1418","Residential","Wed May 21 00:00:00 EDT 2008","146250","38.48742","-121.462459"],["5031 CORVAIR ST","NORTH HIGHLANDS","95660","CA","3","2","1082","Residential","Wed May 21 00:00:00 EDT 2008","147308","38.658246","-121.375469"],["7661 NIXOS WAY","SACRAMENTO","95823","CA","4","2","1472","Residential","Wed May 21 00:00:00 EDT 2008","148750","38.479553","-121.463317"],["7044 CARTHY WAY","SACRAMENTO","95828","CA","4","2","1146","Residential","Wed May 21 00:00:00 EDT 2008","149593","38.49857","-121.420925"],["2442 LARKSPUR LN","SACRAMENTO","95825","CA","1","1","760","Condo","Wed May 21 00:00:00 EDT 2008","150000","38.58514","-121.403736"],["4800 WESTLAKE PKWY Unit 2109","SACRAMENTO","95835","CA","2","2","1304","Condo","Wed May 21 00:00:00 EDT 2008","152000","38.658812","-121.542345"],["2178 63RD AVE","SACRAMENTO","95822","CA","3","2","1207","Residential","Wed May 21 00:00:00 EDT 2008","154000","38.493955","-121.48966"],["8718 ELK WAY","ELK GROVE","95624","CA","3","2","1056","Residential","Wed May 21 00:00:00 EDT 2008","156896","38.41653","-121.379653"],["5708 RIDGEPOINT DR","ANTELOPE","95843","CA","2","2","1043","Residential","Wed May 21 00:00:00 EDT 2008","161250","38.72027","-121.331555"],["7315 KOALA CT","NORTH HIGHLANDS","95660","CA","4","2","1587","Residential","Wed May 21 00:00:00 EDT 2008","161500","38.699251","-121.371414"],["2622 ERIN DR","SACRAMENTO","95833","CA","4","1","1120","Residential","Wed May 21 00:00:00 EDT 2008","164000","38.613765","-121.488694"],["8421 SUNBLAZE WAY","SACRAMENTO","95823","CA","4","2","1580","Residential","Wed May 21 00:00:00 EDT 2008","165000","38.450543","-121.432538"],["7420 ALIX PKWY","SACRAMENTO","95823","CA","4","1","1955","Residential","Wed May 21 00:00:00 EDT 2008","166357","38.489405","-121.452811"],["3820 NATOMA WAY","SACRAMENTO","95838","CA","4","2","1656","Residential","Wed May 21 00:00:00 EDT 2008","166357","38.636748","-121.422159"],["4431 GREEN TREE DR","SACRAMENTO","95823","CA","3","2","1477","Residential","Wed May 21 00:00:00 EDT 2008","168000","38.499954","-121.454469"],["9417 SARA ST","ELK GROVE","95624","CA","3","2","1188","Residential","Wed May 21 00:00:00 EDT 2008","170000","38.415518","-121.370527"],["8299 HALBRITE WAY","SACRAMENTO","95828","CA","4","2","1590","Residential","Wed May 21 00:00:00 EDT 2008","173000","38.473814","-121.4"],["7223 KALLIE KAY LN","SACRAMENTO","95823","CA","3","2","1463","Residential","Wed May 21 00:00:00 EDT 2008","174250","38.477553","-121.419463"],["8156 STEINBECK WAY","SACRAMENTO","95828","CA","4","2","1714","Residential","Wed May 21 00:00:00 EDT 2008","174313","38.474853","-121.406326"],["7957 VALLEY GREEN DR","SACRAMENTO","95823","CA","3","2","1185","Residential","Wed May 21 00:00:00 EDT 2008","178480","38.465184","-121.434925"],["1122 WILD POPPY CT","GALT","95632","CA","3","2","1406","Residential","Wed May 21 00:00:00 EDT 2008","178760","38.287789","-121.294715"],["4520 BOMARK WAY","SACRAMENTO","95842","CA","4","2","1943","Multi-Family","Wed May 21 00:00:00 EDT 2008","179580","38.665724","-121.358576"],["9012 KIEFER BLVD","SACRAMENTO","95826","CA","3","2","1172","Residential","Wed May 21 00:00:00 EDT 2008","181000","38.547011","-121.366217"],["5332 SANDSTONE ST","CARMICHAEL","95608","CA","3","1","1152","Residential","Wed May 21 00:00:00 EDT 2008","181872","38.662105","-121.313945"],["5993 SAWYER CIR","SACRAMENTO","95823","CA","4","3","1851","Residential","Wed May 21 00:00:00 EDT 2008","182587","38.4473","-121.435218"],["4844 CLYDEBANK WAY","ANTELOPE","95843","CA","3","2","1215","Residential","Wed May 21 00:00:00 EDT 2008","182716","38.714609","-121.347887"],["306 CAMELLIA WAY","GALT","95632","CA","3","2","1130","Residential","Wed May 21 00:00:00 EDT 2008","182750","38.260443","-121.297864"],["9021 MADISON AVE","ORANGEVALE","95662","CA","4","2","1603","Residential","Wed May 21 00:00:00 EDT 2008","183200","38.664186","-121.217511"],["404 6TH ST","GALT","95632","CA","3","1","1479","Residential","Wed May 21 00:00:00 EDT 2008","188741","38.251808","-121.302493"],["8317 SUNNY CREEK WAY","SACRAMENTO","95823","CA","3","2","1420","Residential","Wed May 21 00:00:00 EDT 2008","189000","38.459041","-121.424644"],["2617 BASS CT","SACRAMENTO","95826","CA","3","2","1280","Residential","Wed May 21 00:00:00 EDT 2008","192067","38.560767","-121.377471"],["7005 TIANT WAY","ELK GROVE","95758","CA","3","2","1586","Residential","Wed May 21 00:00:00 EDT 2008","194000","38.422811","-121.423285"],["7895 CABER WAY","ANTELOPE","95843","CA","3","2","1362","Residential","Wed May 21 00:00:00 EDT 2008","194818","38.711279","-121.393449"],["7624 BOGEY CT","SACRAMENTO","95828","CA","4","4","2162","Multi-Family","Wed May 21 00:00:00 EDT 2008","195000","38.48009","-121.415102"],["6930 HAMPTON COVE WAY","SACRAMENTO","95823","CA","3","2","1266","Residential","Wed May 21 00:00:00 EDT 2008","198000","38.44004","-121.421012"],["8708 MESA BROOK WAY","ELK GROVE","95624","CA","4","2","1715","Residential","Wed May 21 00:00:00 EDT 2008","199500","38.44076","-121.385792"],["120 GRANT LN","FOLSOM","95630","CA","3","2","1820","Residential","Wed May 21 00:00:00 EDT 2008","200000","38.687742","-121.17104"],["5907 ELLERSLEE DR","CARMICHAEL","95608","CA","3","1","936","Residential","Wed May 21 00:00:00 EDT 2008","200000","38.664468","-121.32683"],["17 SERASPI CT","SACRAMENTO","95834","CA","0","0","0","Residential","Wed May 21 00:00:00 EDT 2008","206000","38.631481","-121.50188"],["170 PENHOW CIR","SACRAMENTO","95834","CA","3","2","1511","Residential","Wed May 21 00:00:00 EDT 2008","208000","38.653439","-121.535169"],["8345 STAR THISTLE WAY","SACRAMENTO","95823","CA","4","2","1590","Residential","Wed May 21 00:00:00 EDT 2008","212864","38.454349","-121.439239"],["9080 FRESCA WAY","ELK GROVE","95758","CA","4","2","1596","Residential","Wed May 21 00:00:00 EDT 2008","221000","38.427818","-121.424026"],["391 NATALINO CIR","SACRAMENTO","95835","CA","2","2","1341","Residential","Wed May 21 00:00:00 EDT 2008","221000","38.67307","-121.506373"],["8373 BLACKMAN WAY","ELK GROVE","95624","CA","5","3","2136","Residential","Wed May 21 00:00:00 EDT 2008","223058","38.435436","-121.394536"],["9837 CORTE DORADO CT","ELK GROVE","95624","CA","4","2","1616","Residential","Wed May 21 00:00:00 EDT 2008","227887","38.400676","-121.38101"],["5037 J PKWY","SACRAMENTO","95823","CA","3","2","1478","Residential","Wed May 21 00:00:00 EDT 2008","231477","38.491399","-121.443547"],[""]]

/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"email":{"to":["Mykhailo"],"from":["Webpack"],"heading":["Tutorial"],"body":["Finish the record"]}}

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/*! exports provided: title, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"I am JSON title\"}");

/***/ }),

/***/ "./assets/webpack-logo.jpg":
/*!*********************************!*\
  !*** ./assets/webpack-logo.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0a1cb7270493c04bed15d4b3075ffaf.jpg");

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Post */ "./models/Post.js");
/* harmony import */ var _assets_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/json */ "./assets/json.json");
var _assets_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./assets/json */ "./assets/json.json", 1);
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/data.xml */ "./assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/data.csv */ "./assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_webpack_logo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/webpack-logo.jpg */ "./assets/webpack-logo.jpg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/less.less */ "./styles/less.less");
/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_less_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/scss.scss */ "./styles/scss.scss");
/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_scss__WEBPACK_IMPORTED_MODULE_10__);











__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! lodash */ "../node_modules/lodash/lodash.js", 7)).then(function (_) {
  console.log("Lazy loading for Lodash: ", _random(0, 42, true));
});
var post = new _models_Post__WEBPACK_IMPORTED_MODULE_1__["default"]("Webpack Post Title", _assets_webpack_logo_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]);
jquery__WEBPACK_IMPORTED_MODULE_0__("pre").html(post.toString());

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    class: "container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Webpack Course"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    class: "logo"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("pre", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    class: "box"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Less")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    class: "card"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Scss")));
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_7__["render"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App, null), document.getElementById("app")); // console.log("JSON:", json);
// console.log("XML:", xml);
// console.log("CSV:", csv);

/***/ }),

/***/ "./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Post = /*#__PURE__*/function () {
  function Post(title, img) {
    _classCallCheck(this, Post);

    this.title = title;
    this.img = img;
    this.date = new Date();
  }

  _createClass(Post, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify({
        title: this.title,
        date: this.date.toJSON(),
        img: this.img
      }, null, 2);
    }
  }]);

  return Post;
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./styles/less.less":
/*!**************************!*\
  !*** ./styles/less.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/scss.scss":
/*!**************************!*\
  !*** ./styles/scss.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.jsx */"./index.jsx");


/***/ })

/******/ });