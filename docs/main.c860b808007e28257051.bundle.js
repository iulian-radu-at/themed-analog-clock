(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(69),objectSpread=__webpack_require__(350),moment_timezone=__webpack_require__(349),react=__webpack_require__(1),styles={darkTheme:{backgroundColor:"#222222",handColor:"#00ff7f",tickColor:"#7fffd4"},lightTheme:{backgroundColor:"#ffffff",handColor:"#000000",tickColor:"#444444"}},src_AnalogClock=function AnalogClock(_ref){var hours=_ref.hours,displayAm=_ref.displayAm,_ref$height=_ref.height,height=void 0===_ref$height?"100%":_ref$height,minutes=_ref.minutes,seconds=_ref.seconds,useDarkTheme=_ref.useDarkTheme,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,imgEl=react.useRef(null),_React$useState=react.useState(!1),_React$useState2=Object(slicedToArray.a)(_React$useState,2),isTimeSet=_React$useState2[0],setTimeSet=_React$useState2[1],setInitialHandPosition=react.useCallback(function(){var svgEl=imgEl.current;if(null!==svgEl){var secondsDeg=function roundTo6deg(deg){return 6*Math.floor(deg/6)}(seconds/60*360),minutesDeg=(60*minutes+seconds)/3600*360,hoursDeg=(3600*hours+60*minutes+seconds)/43200*360;svgEl.querySelector(".iconic-clock-second-hand").setAttribute("transform","rotate(".concat(secondsDeg,",192,192)")),svgEl.querySelector(".iconic-clock-minute-hand").setAttribute("transform","rotate(".concat(minutesDeg,",192,192)")),svgEl.querySelector(".iconic-clock-hour-hand").setAttribute("transform","rotate(".concat(hoursDeg,",192,192)")),setTimeSet(!0)}else react.useEffect(function(){setInitialHandPosition()})},[hours,minutes,seconds]);react.useEffect(function(){setInitialHandPosition()},[]);var theme=useDarkTheme?styles.darkTheme:styles.lightTheme;return react.createElement("svg",{ref:imgEl,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:0,y:0,viewBox:"0 0 384 384",preserveAspectRatio:"xMidYMid meet",strokeWidth:1,strokeLinecap:"round",style:{display:isTimeSet?"inline-block":"none",overflow:"hidden",width:width,height:height}},react.createElement("g",{id:"iconic-clock-frame"},react.createElement("circle",{r:"190",cx:"192",cy:"192",stroke:"#444444",strokeWidth:"2",fill:theme.backgroundColor}),react.createElement("text",{x:"192",y:"220",fill:theme.handColor,"dominant-baseline":"middle","text-anchor":"middle","font-family":"monospace","font-size":"120%"},displayAm?"AM":"PM")),react.createElement("g",{id:"iconic-clock-ticks",transform:"translate(192, 192)"},function renderTicks(){for(var color=theme.tickColor,ticks=[],i=0;i<60;i++)i%15==0?ticks.push(react.createElement("line",{x1:"125",y1:"0",x2:"175",y2:"0",strokeWidth:"9",stroke:color,style:{transform:"rotate(".concat(6*i,"deg)")}})):i%5==0?ticks.push(react.createElement("line",{x1:"145",y1:"0",x2:"175",y2:"0",strokeWidth:"6",stroke:color,style:{transform:"rotate(".concat(6*i,"deg)")}})):ticks.push(react.createElement("line",{x1:"174",y1:"0",x2:"175",y2:"0",strokeWidth:"3",stroke:color,style:{transform:"rotate(".concat(6*i,"deg)")}}));return ticks}()),react.createElement("line",{className:"iconic-clock-hour-hand",id:"iconic-anim-clock-hour-hand",fill:"none",stroke:theme.handColor,strokeWidth:"10",strokeMiterlimit:"5",x1:"192",y1:"192",x2:"192",y2:"87.5"}),react.createElement("line",{className:"iconic-clock-minute-hand",id:"iconic-anim-clock-minute-hand",fill:"none",stroke:theme.handColor,strokeWidth:"6",strokeMiterlimit:"5",x1:"192",y1:"192",x2:"192",y2:"54"}),react.createElement("circle",{className:"iconic-clock-axis",cx:"192",cy:"192",r:"9",stroke:theme.handColor}),react.createElement("g",{className:"iconic-clock-second-hand",id:"iconic-anim-clock-second-hand"},react.createElement("line",{className:"iconic-clock-second-hand-arm",x1:"192",y1:"192",x2:"192",y2:"28.5",fill:"none",stroke:"#D53A1F",strokeWidth:"4",strokeMiterlimit:"10"}),react.createElement("circle",{className:"iconic-clock-second-hand-axis",cx:"192",cy:"192",r:"4.5",fill:"#D53A1F",stroke:theme.handColor})),react.createElement("defs",null,react.createElement("animateTransform",{attributeName:"transform",attributeType:"xml",xlinkHref:"#iconic-anim-clock-hour-hand",type:"rotate",dur:"43200s",from:"0 192 192",to:"360 192 192",fill:"remove",restart:"always",calcMode:"linear",accumulate:"none",additive:"sum",repeatCount:"indefinite"}),react.createElement("animateTransform",{attributeName:"transform",attributeType:"xml",xlinkHref:"#iconic-anim-clock-minute-hand",type:"rotate",dur:"3600s",from:"0 192 192",to:"360 192 192",fill:"remove",restart:"always",accumulate:"none",additive:"sum",repeatCount:"indefinite"}),react.createElement("animateTransform",{attributeName:"transform",attributeType:"xml",xlinkHref:"#iconic-anim-clock-second-hand",type:"rotate",dur:"60s",from:"0 192 192",to:"360 192 192",calcMode:"discrete",values:function stepsHand(){for(var steps=[],i=0;i<60;i++)steps.push("".concat(6*i," 192 192"));return steps.join(";")}(),fill:"remove",restart:"always",accumulate:"none",additive:"sum",repeatCount:"indefinite"})))},ThemedAnalogClock_styles={container:{height:"100%",width:"100%",textAlign:"center"},darkTheme:{backgroundColor:"#222222",color:"#7fffd4"},lightTheme:{backgroundColor:"#ffffff",color:"#000000"}},ThemedAnalogClock_getTheme=function getTheme(useDarkTheme){var style=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(objectSpread.a)({},ThemedAnalogClock_styles.container,useDarkTheme?ThemedAnalogClock_styles.darkTheme:ThemedAnalogClock_styles.lightTheme,style)},timeoutCall=void 0,getHeight=function getHeight(size,hasDescription){if(void 0===size){if(!1===hasDescription)return;return"calc(100% - 1.3em)"}return!1===hasDescription?size:"calc(".concat(size,"number"==typeof size?"px - 1.3em)":" - 1.3em)")};__webpack_exports__.a=function ThemedAnalogClock(_ref){var date=_ref.date,description=_ref.description,size=_ref.size,style=_ref.style,timezoneName=_ref.timezoneName,useDarkTheme=_ref.useDarkTheme,_React$useMemo=react.useMemo(function(){var resolvedTimezoneName=timezoneName||Intl.DateTimeFormat().resolvedOptions().timeZone,dateInTimezone=moment_timezone().tz(resolvedTimezoneName);return[resolvedTimezoneName,date?date.getHours():dateInTimezone.get("hours")%12,date?date.getMinutes():dateInTimezone.get("minutes"),date?date.getSeconds():dateInTimezone.get("seconds"),(date?date.getHours():dateInTimezone.get("hours"))<12]},[date,timezoneName]),_React$useMemo2=Object(slicedToArray.a)(_React$useMemo,5),resolvedTimezoneName=_React$useMemo2[0],hours=_React$useMemo2[1],minutes=_React$useMemo2[2],seconds=_React$useMemo2[3],isAm=_React$useMemo2[4],_React$useState=react.useState(isAm),_React$useState2=Object(slicedToArray.a)(_React$useState,2),displayAm=_React$useState2[0],setDisplayAm=_React$useState2[1],atEach12=react.useCallback(function(){var now=date||new Date,wait=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()<12?12:24,0,0,0).getTime()-now.getTime();wait<=0?atEach12():(timeoutCall&&clearTimeout(timeoutCall),timeoutCall=setTimeout(function(){var h=date?(date.getHours()+Math.ceil(wait/36e5))%24:(new Date).getHours();setDisplayAm(h<12),atEach12()},wait))},[date]);return react.useEffect(function(){return setDisplayAm(isAm),atEach12(),function(){timeoutCall&&clearTimeout(timeoutCall)}},[atEach12,isAm]),useDarkTheme=!0===useDarkTheme,description=description?description.replace("{}",resolvedTimezoneName):void 0,react.createElement("div",{style:ThemedAnalogClock_getTheme(useDarkTheme,style)},react.createElement(src_AnalogClock,{hours:hours,minutes:minutes,seconds:seconds,displayAm:displayAm,useDarkTheme:useDarkTheme,width:size,height:getHeight(size,void 0!==description)}),react.createElement("div",null,description))}},351:function(module,exports,__webpack_require__){__webpack_require__(352),__webpack_require__(455),module.exports=__webpack_require__(456)},456:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(95);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(620)},module)}.call(this,__webpack_require__(164)(module))},620:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(95),style={height:"95vh",width:"95vw"};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("ThemedAnalogClock",module).add("using the light theme",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"light theme",useDarkTheme:!1}))}).add("using the dark theme",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"dark theme",useDarkTheme:!0}))}).add("without a description",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,null))}).add("with a specified size",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,{size:100,description:"The width and height is 100px"}))}).add("with a description using a placeholder for used timezone",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:'The time in timezone "{}"'}))}).add("using the browser's timezone",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"Your browser's time ({})"}))}).add("using a specified timezone",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,{timezoneName:"America/New_York",description:"The time now in New York"}))}).add("change AM to PM at noon",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"Change AM to PM at noon",date:new Date(2019,6,1,11,59,58)}))}).add("change PM to AM at midnight",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ThemedAnalogClock__WEBPACK_IMPORTED_MODULE_1__.a,{description:"Change PM to AM at midnight",date:new Date(2019,6,1,23,59,58)}))})}.call(this,__webpack_require__(164)(module))},622:function(module,exports,__webpack_require__){var map={"./af":221,"./af.js":221,"./ar":222,"./ar-dz":223,"./ar-dz.js":223,"./ar-kw":224,"./ar-kw.js":224,"./ar-ly":225,"./ar-ly.js":225,"./ar-ma":226,"./ar-ma.js":226,"./ar-sa":227,"./ar-sa.js":227,"./ar-tn":228,"./ar-tn.js":228,"./ar.js":222,"./az":229,"./az.js":229,"./be":230,"./be.js":230,"./bg":231,"./bg.js":231,"./bm":232,"./bm.js":232,"./bn":233,"./bn.js":233,"./bo":234,"./bo.js":234,"./br":235,"./br.js":235,"./bs":236,"./bs.js":236,"./ca":237,"./ca.js":237,"./cs":238,"./cs.js":238,"./cv":239,"./cv.js":239,"./cy":240,"./cy.js":240,"./da":241,"./da.js":241,"./de":242,"./de-at":243,"./de-at.js":243,"./de-ch":244,"./de-ch.js":244,"./de.js":242,"./dv":245,"./dv.js":245,"./el":246,"./el.js":246,"./en-SG":247,"./en-SG.js":247,"./en-au":248,"./en-au.js":248,"./en-ca":249,"./en-ca.js":249,"./en-gb":250,"./en-gb.js":250,"./en-ie":251,"./en-ie.js":251,"./en-il":252,"./en-il.js":252,"./en-nz":253,"./en-nz.js":253,"./eo":254,"./eo.js":254,"./es":255,"./es-do":256,"./es-do.js":256,"./es-us":257,"./es-us.js":257,"./es.js":255,"./et":258,"./et.js":258,"./eu":259,"./eu.js":259,"./fa":260,"./fa.js":260,"./fi":261,"./fi.js":261,"./fo":262,"./fo.js":262,"./fr":263,"./fr-ca":264,"./fr-ca.js":264,"./fr-ch":265,"./fr-ch.js":265,"./fr.js":263,"./fy":266,"./fy.js":266,"./ga":267,"./ga.js":267,"./gd":268,"./gd.js":268,"./gl":269,"./gl.js":269,"./gom-latn":270,"./gom-latn.js":270,"./gu":271,"./gu.js":271,"./he":272,"./he.js":272,"./hi":273,"./hi.js":273,"./hr":274,"./hr.js":274,"./hu":275,"./hu.js":275,"./hy-am":276,"./hy-am.js":276,"./id":277,"./id.js":277,"./is":278,"./is.js":278,"./it":279,"./it-ch":280,"./it-ch.js":280,"./it.js":279,"./ja":281,"./ja.js":281,"./jv":282,"./jv.js":282,"./ka":283,"./ka.js":283,"./kk":284,"./kk.js":284,"./km":285,"./km.js":285,"./kn":286,"./kn.js":286,"./ko":287,"./ko.js":287,"./ku":288,"./ku.js":288,"./ky":289,"./ky.js":289,"./lb":290,"./lb.js":290,"./lo":291,"./lo.js":291,"./lt":292,"./lt.js":292,"./lv":293,"./lv.js":293,"./me":294,"./me.js":294,"./mi":295,"./mi.js":295,"./mk":296,"./mk.js":296,"./ml":297,"./ml.js":297,"./mn":298,"./mn.js":298,"./mr":299,"./mr.js":299,"./ms":300,"./ms-my":301,"./ms-my.js":301,"./ms.js":300,"./mt":302,"./mt.js":302,"./my":303,"./my.js":303,"./nb":304,"./nb.js":304,"./ne":305,"./ne.js":305,"./nl":306,"./nl-be":307,"./nl-be.js":307,"./nl.js":306,"./nn":308,"./nn.js":308,"./pa-in":309,"./pa-in.js":309,"./pl":310,"./pl.js":310,"./pt":311,"./pt-br":312,"./pt-br.js":312,"./pt.js":311,"./ro":313,"./ro.js":313,"./ru":314,"./ru.js":314,"./sd":315,"./sd.js":315,"./se":316,"./se.js":316,"./si":317,"./si.js":317,"./sk":318,"./sk.js":318,"./sl":319,"./sl.js":319,"./sq":320,"./sq.js":320,"./sr":321,"./sr-cyrl":322,"./sr-cyrl.js":322,"./sr.js":321,"./ss":323,"./ss.js":323,"./sv":324,"./sv.js":324,"./sw":325,"./sw.js":325,"./ta":326,"./ta.js":326,"./te":327,"./te.js":327,"./tet":328,"./tet.js":328,"./tg":329,"./tg.js":329,"./th":330,"./th.js":330,"./tl-ph":331,"./tl-ph.js":331,"./tlh":332,"./tlh.js":332,"./tr":333,"./tr.js":333,"./tzl":334,"./tzl.js":334,"./tzm":335,"./tzm-latn":336,"./tzm-latn.js":336,"./tzm.js":335,"./ug-cn":337,"./ug-cn.js":337,"./uk":338,"./uk.js":338,"./ur":339,"./ur.js":339,"./uz":340,"./uz-latn":341,"./uz-latn.js":341,"./uz.js":340,"./vi":342,"./vi.js":342,"./x-pseudo":343,"./x-pseudo.js":343,"./yo":344,"./yo.js":344,"./zh-cn":345,"./zh-cn.js":345,"./zh-hk":346,"./zh-hk.js":346,"./zh-tw":347,"./zh-tw.js":347};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=622}},[[351,1,2]]]);
//# sourceMappingURL=main.c860b808007e28257051.bundle.js.map