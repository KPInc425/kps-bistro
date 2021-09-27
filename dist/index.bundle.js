(()=>{"use strict";var e={917:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/*\nhtml5doctor.com Reset Stylesheet\nv1.6.1\nLast Updated: 2010-09-17\nAuthor: Richard Clark - http://richclarkdesign.com\nTwitter: @rich_clark\n*/\n\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n    margin:0;\n    padding:0;\n    border:0;\n    outline:0;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\nbody {\n    line-height:1;\n}\n\narticle,aside,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section {\n    display:block;\n}\n\nnav ul {\n    list-style:none;\n}\n\nblockquote, q {\n    quotes:none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content:'';\n    content:none;\n}\n\na {\n    margin:0;\n    padding:0;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\n/* change colours to suit your needs */\nins {\n    background-color:#ff9;\n    color:#000;\n    text-decoration:none;\n}\n\n/* change colours to suit your needs */\nmark {\n    background-color:#ff9;\n    color:#000;\n    font-style:italic;\n    font-weight:bold;\n}\n\ndel {\n    text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n    border-bottom:1px dotted;\n    cursor:help;\n}\n\ntable {\n    border-collapse:collapse;\n    border-spacing:0;\n}\n\n/* change border colour to suit your needs */\nhr {\n    display:block;\n    height:1px;\n    border:0;  \n    border-top:1px solid #cccccc;\n    margin:1em 0;\n    padding:0;\n}\n\ninput, select {\n    vertical-align:middle;\n}",""]);const c=i},426:(e,n,t)=>{t.d(n,{Z:()=>h});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(749),t.b),l=new URL(t(497),t.b),p=i()(r());p.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Stick+No+Bills&display=swap);"]);var u=d()(s),m=d()(l);p.push([e.id,"#content {\n    text-align: center;\n    font-family: 'Stick No Bills', sans-serif;\n}\n\nbody {\n    background-color:#061b0a;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n}\n\n#navLinks {\n    list-style-type: none;\n    display: flex;\n}\n\n#navLinks button {\n    padding: 0 50px 0 50px;\n    margin: 25px 10px;\n    height: 50px;\n} \n\n.mainContainer {\n    display: flex;\n    flex-direction: column;\n    background-color: teal;\n    background: url("+u+") center, url("+m+") center;\n    background-size: cover;\n    border-radius: 12px;\n    padding-bottom: 50px;\n}\n\n.menuPadding {\n    padding: 50px 0 70px 0;\n}\n\n.dataContainer {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    background-color: #061b0a;\n    width: 50vw;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    padding: 30px 25px 50px 25px;\n    color: white;\n    font-size: x-large;\n    border-radius: 12px;\n    /* TESTING */\n    /* border: 2px solid pink; */\n}\n\n#companyHeaderLogo {\n    /* padding-top: 25px; */\n    width: 300px;\n    /* height: 100px;\n    background-color: whitesmoke; */\n    margin: auto;\n    margin-top: 15px;\n}\n\nbutton {\n    font-family: 'Stick No Bills', sans-serif;\n    font-size: larger;\n}\n\nfooter {\n    width: 50vw;\n    background-color: #061b0a;\n    margin: auto;\n    flex-shrink: 0;\n    border-radius: 12px;\n}\n\nfooter p {\n    color: white;\n    margin: 25px;\n}\n\n.pageHeader {\n    padding-bottom: 20px;\n    font-size: xx-large;\n    /* TESTING */\n    /* border: 2px solid pink; */\n\n}\n\n#menuItemContainer {\n    padding: 15px;\n    font-size: large;\n    /* TESTING */\n    /* border: 2px solid pink; */\n}\n\n#menuItemContainer p {\n    padding: 5px;\n\n}\n\n#logo {\n    position: relative;\n    width: 300px;\n}\n\n#menuItemFlexContainer {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n#hoursDataContainer {\n    padding: 10px;\n    margin: 10px;\n}\n\n#contactPage {\n    margin: 10px;\n}\n\nh3 {\n    padding: 10px;\n    margin: 10px;\n    margin-top: 40px;\n}",""]);const h=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},749:(e,n,t)=>{e.exports=t.p+"96443aa21cbd875ff9ed.jpg"},497:(e,n,t)=>{e.exports=t.p+"9e657e4801c0947c509b.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/",t.b=document.baseURI||self.location.href,(()=>{const e=function(){const e=document.createElement("div"),n=document.createElement("h2");n.textContent="Welcome to KP's Bistro!",n.classList.add("pageHeader");const t=document.createElement("p");return t.textContent="Try our fresh restuarant grown and raised veggies and fish!\n                    Our state of the ART restuarant, centered around in house \n                    fresh products that are only supplemented by locally sourced\n                    fresh and organic products.",e.appendChild(n),e.appendChild(t),e},n=function(){document.querySelector("#homePageNavLink").addEventListener("click",(()=>{console.log("Click!");const n=e();o(n)})),document.querySelector("#menuPageNavLink").addEventListener("click",(()=>{console.log("Click!");const e=function(){const e=document.createElement("div"),n=document.createElement("div");n.id="menuItemFlexContainer";const t=document.createElement("h2");return t.textContent="MENU",t.classList.add("pageHeader"),e.appendChild(t),[{name:"BeFast Scramble",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble1",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble2",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble3",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble1",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble2",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble3",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble1",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble2",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble3",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble1",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble2",descripton:"Delicious Description!",price:"$9.00"},{name:"BeFast Scramble3",descripton:"Delicious Description!",price:"$9.00"}].forEach((e=>{let t=document.createElement("div");t.id="menuItemContainer";let o=document.createElement("p");o.textContent=e.name;let r=document.createElement("p");r.textContent=e.descripton;let a=document.createElement("p");a.textContent=e.price,t.appendChild(o),t.appendChild(r),t.appendChild(a),n.appendChild(t)})),e.appendChild(n),e}();o(e)})),document.querySelector("#contactPageNavLink").addEventListener("click",(()=>{console.log("Click!");const e=function(){const e=document.createElement("div");e.id="contactPage";const n=document.createElement("h2");n.textContent="Contact Us",n.classList.add("pageHeader");const t=document.createElement("h3");t.textContent="PHONE NUMBER",t.style.margin="10px",t.style.padding="10px";const o=document.createElement("p");o.textContent="425-555-4489";const r=document.createElement("div");r.id="hoursOpenContainer";const a=document.createElement("h3");a.textContent="HOURS",[{day:"Monday",hours:"7AM - 3PM"},{day:"Tuesday",hours:"7AM - 3PM"},{day:"Wednesday",hours:"7AM - 3PM"},{day:"Thursday",hours:"7AM - 3PM"},{day:"Friday",hours:"7AM - 3PM"},{day:"Saturday",hours:"7AM - 3PM"},{day:"Sunday",hours:"Closed"}].forEach((e=>{let n=document.createElement("div");n.id="hoursDataContainer";let t=document.createElement("div");t.textContent=e.day;let o=document.createElement("div");o.textContent=e.hours,n.appendChild(t),n.appendChild(o),r.appendChild(n)}));const i=document.createElement("h3");i.textContent="Location";const c=document.createElement("iframe");return c.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d667.9051715863404!2d-122.20908560430681!3d47.963058596444455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83f3df5f0d41aa7b!2sAFK%20Tavern!5e0!3m2!1sen!2sus!4v1632626283669!5m2!1sen!2sus",c.style.width="400px",c.style.height="300px",c.style.border="0",c.setAttribute("allowfullscreen",""),c.setAttribute("loading","lazy"),e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(r),e.appendChild(i),e.appendChild(c),e}();o(e)}))},o=function(e){const t=document.querySelector("#content");t.innerHTML="",function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("div");t.id="companyHeaderLogo";const o=document.createElement("img");o.src="https://i.imgur.com/DyfDZhM.png",o.setAttribute("alt","KP's Bistro Logo goes here"),o.id="logo",t.appendChild(o);const r=document.createElement("nav"),a=document.createElement("ul");a.id="navLinks";const i=document.createElement("li"),c=document.createElement("button");c.href="#",c.id="homePageNavLink",c.textContent="Welcome!";const d=document.createElement("li"),s=document.createElement("button");s.href="#",s.id="menuPageNavLink",s.textContent="Menu";const l=document.createElement("li"),p=document.createElement("button");p.href="#",p.id="contactPageNavLink",p.textContent="Contact Us",l.appendChild(p),d.appendChild(s),i.appendChild(c),a.appendChild(i),a.appendChild(d),a.appendChild(l),r.appendChild(a),n.appendChild(t),n.appendChild(r),e.appendChild(n)}();const o=document.createElement("div");o.classList.add("mainContainer");const r=document.createElement("div");r.classList.add("dataContainer");const a=e,i=document.createElement("footer"),c=document.createElement("p");c.textContent="Copyright © 2021 KPInc425. All Rights Reserved.",r.appendChild(a),o.appendChild(r),i.appendChild(c),o.appendChild(i),t.appendChild(o),n()};var r=t(379),a=t.n(r),i=t(795),c=t.n(i),d=t(569),s=t.n(d),l=t(565),p=t.n(l),u=t(216),m=t.n(u),h=t(589),f=t.n(h),g=t(917),b={};b.styleTagTransform=f(),b.setAttributes=p(),b.insert=s().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=m(),a()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;var v=t(426),x={};x.styleTagTransform=f(),x.setAttributes=p(),x.insert=s().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=m(),a()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,(()=>{console.log("First Load...");const n=e();o(n)})()})()})();