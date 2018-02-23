ace.define("ace/theme/textmate",["require","exports","module","ace/lib/dom"],function(e,t,a){"use strict";t.isDark=!1,t.cssClass="ace-tm",t.cssText='.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}',t.$id="ace/theme/textmate",e("../lib/dom").importCssString(t.cssText,t.cssClass)}),ace.define("ace/ext/textarea",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/net","ace/ace","ace/theme/textmate"],function(e,t,a){"use strict";function r(e,t){for(var a in t)e.style[a]=t[a]}function o(e,t){if("textarea"!=e.type)throw new Error("Textarea required!");var a=e.parentNode,r=document.createElement("div"),o=function(){var t="position:relative;";["margin-top","margin-left","margin-right","margin-bottom"].forEach(function(a){t+=a+":"+u(e,r,a)+";"});var a=u(e,r,"width")||e.clientWidth+"px",o=u(e,r,"height")||e.clientHeight+"px";t+="height:"+o+";width:"+a+";",t+="display:inline-block;",r.setAttribute("style",t)};for(i.addListener(window,"resize",o),o(),a.insertBefore(r,e.nextSibling);a!==document;){if("FORM"===a.tagName.toUpperCase()){var c=a.onsubmit;a.onsubmit=function(a){e.value=t(),c&&c.call(this,a)};break}a=a.parentNode}return r}function c(e,t,a,r,o){function c(e){return"true"===e||1==e}e.getSession(),e.renderer;return e.setDisplaySettings=function(t){null==t&&(t="none"==a.style.display),t?(a.style.display="block",a.hideButton.focus(),e.on("focus",function t(){e.removeListener("focus",t),a.style.display="none"})):e.focus()},e.$setOption=e.setOption,e.$getOption=e.getOption,e.setOption=function(t,a){switch(t){case"mode":e.$setOption("mode","ace/mode/"+a);break;case"theme":e.$setOption("theme","ace/theme/"+a);break;case"keybindings":switch(a){case"vim":e.setKeyboardHandler("ace/keyboard/vim");break;case"emacs":e.setKeyboardHandler("ace/keyboard/emacs");break;default:e.setKeyboardHandler(null)}break;case"wrap":case"fontSize":e.$setOption(t,a);break;default:e.$setOption(t,c(a))}},e.getOption=function(t){switch(t){case"mode":return e.$getOption("mode").substr("ace/mode/".length);case"theme":return e.$getOption("theme").substr("ace/theme/".length);case"keybindings":var a=e.getKeyboardHandler();switch(a&&a.$id){case"ace/keyboard/vim":return"vim";case"ace/keyboard/emacs":return"emacs";default:return"ace"}break;default:return e.$getOption(t)}},e.setOptions(o),e}function n(e,a,r){var o={mode:"Mode:",wrap:"Soft Wrap:",theme:"Theme:",fontSize:"Font Size:",showGutter:"Display Gutter:",keybindings:"Keyboard",showPrintMargin:"Show Print Margin:",useSoftTabs:"Use Soft Tabs:",showInvisibles:"Show Invisibles"},c={mode:{text:"Plain",javascript:"JavaScript",xml:"XML",html:"HTML",css:"CSS",scss:"SCSS",python:"Python",php:"PHP",java:"Java",ruby:"Ruby",c_cpp:"C/C++",coffee:"CoffeeScript",json:"json",perl:"Perl",clojure:"Clojure",ocaml:"OCaml",csharp:"C#",haxe:"haXe",svg:"SVG",textile:"Textile",groovy:"Groovy",liquid:"Liquid",Scala:"Scala"},theme:{clouds:"Clouds",clouds_midnight:"Clouds Midnight",cobalt:"Cobalt",crimson_editor:"Crimson Editor",dawn:"Dawn",gob:"Green on Black",eclipse:"Eclipse",idle_fingers:"Idle Fingers",kr_theme:"Kr Theme",merbivore:"Merbivore",merbivore_soft:"Merbivore Soft",mono_industrial:"Mono Industrial",monokai:"Monokai",pastel_on_dark:"Pastel On Dark",solarized_dark:"Solarized Dark",solarized_light:"Solarized Light",textmate:"Textmate",twilight:"Twilight",vibrant_ink:"Vibrant Ink"},showGutter:null,fontSize:{"10px":"10px","11px":"11px","12px":"12px","14px":"14px","16px":"16px"},wrap:{off:"Off",40:"40",80:"80",free:"Free"},keybindings:{ace:"ace",vim:"vim",emacs:"emacs"},showPrintMargin:null,useSoftTabs:null,showInvisibles:null},n=[];n.push("<table><tr><th>Setting</th><th>Value</th></tr>");for(var s in t.defaultOptions)n.push("<tr><td>",o[s],"</td>"),n.push("<td>"),function(e,t,a,r){if(a){e.push("<select title='"+t+"'>");for(var o in a)e.push("<option value='"+o+"' "),r==o&&e.push(" selected "),e.push(">",a[o],"</option>");e.push("</select>")}else e.push("<input type='checkbox' title='",t,"' ",r+""=="true"?"checked='true'":"","'></input>")}(n,s,c[s],r.getOption(s)),n.push("</td></tr>");n.push("</table>"),e.innerHTML=n.join("");for(var l=e.getElementsByTagName("select"),u=0;u<l.length;u++)l[u].onchange=function(e){var t=e.currentTarget;r.setOption(t.title,t.value)};for(var d=e.getElementsByTagName("input"),u=0;u<d.length;u++)d[u].onclick=function(e){var t=e.currentTarget;r.setOption(t.title,t.checked)};var m=document.createElement("input");m.type="button",m.value="Hide",i.addListener(m,"click",function(){r.setDisplaySettings(!1)}),e.appendChild(m),e.hideButton=m}var i=e("../lib/event"),s=e("../lib/useragent"),l=(e("../lib/net"),e("../ace"));e("../theme/textmate"),a.exports=t=l;var u=function(e,t,a){var r=e.style[a];return r||(r=window.getComputedStyle?window.getComputedStyle(e,"").getPropertyValue(a):e.currentStyle[a]),r&&"auto"!=r&&"intrinsic"!=r||(r=t.style[a]),r};t.transformTextarea=function(e,a){var u,d=o(e,function(){return u.getValue()});e.style.display="none",d.style.background="white";var m=document.createElement("div");r(m,{top:"0px",left:"0px",right:"0px",bottom:"0px",border:"1px solid gray",position:"absolute"}),d.appendChild(m);var p=document.createElement("div");r(p,{position:"absolute",right:"0px",bottom:"0px",cursor:"nw-resize",border:"solid 9px",borderColor:"lightblue gray gray #ceade6",zIndex:101});var g=document.createElement("div"),b={top:"0px",left:"20%",right:"0px",bottom:"0px",position:"absolute",padding:"5px",zIndex:100,color:"white",display:"none",overflow:"auto",fontSize:"14px",boxShadow:"-5px 2px 3px gray"};s.isOldIE?b.backgroundColor="#333":b.backgroundColor="rgba(0, 0, 0, 0.6)",r(g,b),d.appendChild(g),a=a||t.defaultOptions;var h=l.edit(m);(u=h.getSession()).setValue(e.value||e.innerHTML),h.focus(),d.appendChild(p),c(h,0,g,0,a),n(g,0,h);var f="";return i.addListener(p,"mousemove",function(e){var t=this.getBoundingClientRect();e.clientX-t.left+(e.clientY-t.top)<(t.width+t.height)/2?(this.style.cursor="pointer",f="toggle"):(f="resize",this.style.cursor="nw-resize")}),i.addListener(p,"mousedown",function(e){if(e.preventDefault(),"toggle"!=f){d.style.zIndex=1e5;var t=d.getBoundingClientRect(),a=t.width+t.left-e.clientX,r=t.height+t.top-e.clientY;i.capture(p,function(e){d.style.width=e.clientX-t.left+a+"px",d.style.height=e.clientY-t.top+r+"px",h.resize()},function(){})}else h.setDisplaySettings()}),h},t.defaultOptions={mode:"javascript",theme:"textmate",wrap:"off",fontSize:"12px",showGutter:"false",keybindings:"ace",showPrintMargin:"false",useSoftTabs:"true",showInvisibles:"false"}}),ace.require(["ace/ext/textarea"],function(){});