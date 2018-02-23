ace.define("ace/ext/menu_tools/overlay_page",["require","exports","module","ace/lib/dom"],function(e,t,a){"use strict";var o=e("../../lib/dom");o.importCssString("#ace_settingsmenu, #kbshortcutmenu {background-color: #F7F7F7;color: black;box-shadow: -5px 4px 5px rgba(126, 126, 126, 0.55);padding: 1em 0.5em 2em 1em;overflow: auto;position: absolute;margin: 0;bottom: 0;right: 0;top: 0;z-index: 9991;cursor: default;}.ace_dark #ace_settingsmenu, .ace_dark #kbshortcutmenu {box-shadow: -20px 10px 25px rgba(126, 126, 126, 0.25);background-color: rgba(255, 255, 255, 0.6);color: black;}.ace_optionsMenuEntry:hover {background-color: rgba(100, 100, 100, 0.1);transition: all 0.3s}.ace_closeButton {background: rgba(245, 146, 146, 0.5);border: 1px solid #F48A8A;border-radius: 50%;padding: 7px;position: absolute;right: -8px;top: -8px;z-index: 100000;}.ace_closeButton{background: rgba(245, 146, 146, 0.9);}.ace_optionsMenuKey {color: darkslateblue;font-weight: bold;}.ace_optionsMenuCommand {color: darkcyan;font-weight: normal;}.ace_optionsMenuEntry input, .ace_optionsMenuEntry button {vertical-align: middle;}.ace_optionsMenuEntry button[ace_selected_button=true] {background: #e7e7e7;box-shadow: 1px 0px 2px 0px #adadad inset;border-color: #adadad;}.ace_optionsMenuEntry button {background: white;border: 1px solid lightgray;margin: 0px;}.ace_optionsMenuEntry button:hover{background: #f0f0f0;}"),a.exports.overlayPage=function(e,t,a,i,r,n){function s(e){27===e.keyCode&&l.click()}a=a?"top: "+a+";":"",r=r?"bottom: "+r+";":"",i=i?"right: "+i+";":"",n=n?"left: "+n+";":"";var l=document.createElement("div"),c=document.createElement("div");l.style.cssText="margin: 0; padding: 0; position: fixed; top:0; bottom:0; left:0; right:0;z-index: 9990; background-color: rgba(0, 0, 0, 0.3);",l.addEventListener("click",function(){document.removeEventListener("keydown",s),l.parentNode.removeChild(l),e.focus(),l=null}),document.addEventListener("keydown",s),c.style.cssText=a+i+r+n,c.addEventListener("click",function(e){e.stopPropagation()});var p=o.createElement("div");p.style.position="relative";var u=o.createElement("div");u.className="ace_closeButton",u.addEventListener("click",function(){l.click()}),p.appendChild(u),c.appendChild(p),c.appendChild(t),l.appendChild(c),document.body.appendChild(l),e.blur()}}),ace.define("ace/ext/modelist",["require","exports","module"],function(e,t,a){"use strict";var o=[],i=function(e,t,a){this.name=e,this.caption=t,this.mode="ace/mode/"+e,this.extensions=a;var o;o=/\^/.test(a)?a.replace(/\|(\^)?/g,function(e,t){return"$|"+(t?"^":"^.*\\.")})+"$":"^.*\\.("+a+")$",this.extRe=new RegExp(o,"gi")};i.prototype.supportsFile=function(e){return e.match(this.extRe)};var r={ABAP:["abap"],ABC:["abc"],ActionScript:["as"],ADA:["ada|adb"],Apache_Conf:["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],AsciiDoc:["asciidoc|adoc"],Assembly_x86:["asm|a"],AutoHotKey:["ahk"],BatchFile:["bat|cmd"],Bro:["bro"],C_Cpp:["cpp|c|cc|cxx|h|hh|hpp|ino"],C9Search:["c9search_results"],Cirru:["cirru|cr"],Clojure:["clj|cljs"],Cobol:["CBL|COB"],coffee:["coffee|cf|cson|^Cakefile"],ColdFusion:["cfm"],CSharp:["cs"],Csound_Document:["csd"],Csound_Orchestra:["orc"],Csound_Score:["sco"],CSS:["css"],Curly:["curly"],D:["d|di"],Dart:["dart"],Diff:["diff|patch"],Dockerfile:["^Dockerfile"],Dot:["dot"],Drools:["drl"],Edifact:["edi"],Eiffel:["e|ge"],EJS:["ejs"],Elixir:["ex|exs"],Elm:["elm"],Erlang:["erl|hrl"],Forth:["frt|fs|ldr|fth|4th"],Fortran:["f|f90"],FTL:["ftl"],Gcode:["gcode"],Gherkin:["feature"],Gitignore:["^.gitignore"],Glsl:["glsl|frag|vert"],Gobstones:["gbs"],golang:["go"],GraphQLSchema:["gql"],Groovy:["groovy"],HAML:["haml"],Handlebars:["hbs|handlebars|tpl|mustache"],Haskell:["hs"],Haskell_Cabal:["cabal"],haXe:["hx"],Hjson:["hjson"],HTML:["html|htm|xhtml|vue|we|wpy"],HTML_Elixir:["eex|html.eex"],HTML_Ruby:["erb|rhtml|html.erb"],INI:["ini|conf|cfg|prefs"],Io:["io"],Jack:["jack"],Jade:["jade|pug"],Java:["java"],JavaScript:["js|jsm|jsx"],JSON:["json"],JSONiq:["jq"],JSP:["jsp"],JSSM:["jssm|jssm_state"],JSX:["jsx"],Julia:["jl"],Kotlin:["kt|kts"],LaTeX:["tex|latex|ltx|bib"],LESS:["less"],Liquid:["liquid"],Lisp:["lisp"],LiveScript:["ls"],LogiQL:["logic|lql"],LSL:["lsl"],Lua:["lua"],LuaPage:["lp"],Lucene:["lucene"],Makefile:["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],Markdown:["md|markdown"],Mask:["mask"],MATLAB:["matlab"],Maze:["mz"],MEL:["mel"],MIXAL:["mixal"],MUSHCode:["mc|mush"],MySQL:["mysql"],Nix:["nix"],NSIS:["nsi|nsh"],ObjectiveC:["m|mm"],OCaml:["ml|mli"],Pascal:["pas|p"],Perl:["pl|pm"],pgSQL:["pgsql"],PHP:["php|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module"],Pig:["pig"],Powershell:["ps1"],Praat:["praat|praatscript|psc|proc"],Prolog:["plg|prolog"],Properties:["properties"],Protobuf:["proto"],Python:["py"],R:["r"],Razor:["cshtml|asp"],RDoc:["Rd"],Red:["red|reds"],RHTML:["Rhtml"],RST:["rst"],Ruby:["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],Rust:["rs"],SASS:["sass"],SCAD:["scad"],Scala:["scala"],Scheme:["scm|sm|rkt|oak|scheme"],SCSS:["scss"],SH:["sh|bash|^.bashrc"],SJS:["sjs"],Smarty:["smarty|tpl"],snippets:["snippets"],Soy_Template:["soy"],Space:["space"],SQL:["sql"],SQLServer:["sqlserver"],Stylus:["styl|stylus"],SVG:["svg"],Swift:["swift"],Tcl:["tcl"],Tex:["tex"],Text:["txt"],Textile:["textile"],Toml:["toml"],TSX:["tsx"],Twig:["twig|swig"],Typescript:["ts|typescript|str"],Vala:["vala"],VBScript:["vbs|vb"],Velocity:["vm"],Verilog:["v|vh|sv|svh"],VHDL:["vhd|vhdl"],Wollok:["wlk|wpgm|wtest"],XML:["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],XQuery:["xq"],YAML:["yaml|yml"],Django:["html"]},n={ObjectiveC:"Objective-C",CSharp:"C#",golang:"Go",C_Cpp:"C and C++",Csound_Document:"Csound Document",Csound_Orchestra:"Csound",Csound_Score:"Csound Score",coffee:"CoffeeScript",HTML_Ruby:"HTML (Ruby)",HTML_Elixir:"HTML (Elixir)",FTL:"FreeMarker"},s={};for(var l in r){var c=r[l],p=(n[l]||l).replace(/_/g," "),u=l.toLowerCase(),d=new i(u,p,c[0]);s[u]=d,o.push(d)}a.exports={getModeForPath:function(e){for(var t=s.text,a=e.split(/[\/\\]/).pop(),i=0;i<o.length;i++)if(o[i].supportsFile(a)){t=o[i];break}return t},modes:o,modesByName:s}}),ace.define("ace/ext/themelist",["require","exports","module","ace/lib/fixoldbrowsers"],function(e,t,a){"use strict";e("ace/lib/fixoldbrowsers");t.themesByName={},t.themes=[["Chrome"],["Clouds"],["Crimson Editor"],["Dawn"],["Dreamweaver"],["Eclipse"],["GitHub"],["IPlastic"],["Solarized Light"],["TextMate"],["Tomorrow"],["XCode"],["Kuroir"],["KatzenMilch"],["SQL Server","sqlserver","light"],["Ambiance","ambiance","dark"],["Chaos","chaos","dark"],["Clouds Midnight","clouds_midnight","dark"],["Dracula","","dark"],["Cobalt","cobalt","dark"],["Gruvbox","gruvbox","dark"],["Green on Black","gob","dark"],["idle Fingers","idle_fingers","dark"],["krTheme","kr_theme","dark"],["Merbivore","merbivore","dark"],["Merbivore Soft","merbivore_soft","dark"],["Mono Industrial","mono_industrial","dark"],["Monokai","monokai","dark"],["Pastel on dark","pastel_on_dark","dark"],["Solarized Dark","solarized_dark","dark"],["Terminal","terminal","dark"],["Tomorrow Night","tomorrow_night","dark"],["Tomorrow Night Blue","tomorrow_night_blue","dark"],["Tomorrow Night Bright","tomorrow_night_bright","dark"],["Tomorrow Night 80s","tomorrow_night_eighties","dark"],["Twilight","twilight","dark"],["Vibrant Ink","vibrant_ink","dark"]].map(function(e){var a=e[1]||e[0].replace(/ /g,"_").toLowerCase(),o={caption:e[0],theme:"ace/theme/"+a,isDark:"dark"==e[2],name:a};return t.themesByName[a]=o,o})}),ace.define("ace/ext/options",["require","exports","module","ace/ext/menu_tools/overlay_page","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/ext/modelist","ace/ext/themelist"],function(e,t,a){"use strict";e("./menu_tools/overlay_page").overlayPage;var o=e("../lib/dom"),i=e("../lib/oop"),r=e("../lib/event_emitter").EventEmitter,n=o.buildDom,s=e("./modelist"),l={Bright:[],Dark:[]};e("./themelist").themes.forEach(function(e){l[e.isDark?"Dark":"Bright"].push({caption:e.caption,value:e.theme})});var c={Main:{Mode:{path:"mode",type:"select",items:s.modes.map(function(e){return{caption:e.caption,value:e.mode}})},Theme:{path:"theme",type:"select",items:l},Keybinding:{type:"buttonBar",path:"keyboardHandler",items:[{caption:"Ace",value:null},{caption:"Vim",value:"ace/keyboard/vim"},{caption:"Emacs",value:"ace/keyboard/emacs"}]},"Font Size":{path:"fontSize",type:"number",defaultValue:12,defaults:[{caption:"12px",value:12},{caption:"24px",value:24}]},"Soft Wrap":{type:"buttonBar",path:"wrap",items:[{caption:"Off",value:"off"},{caption:"Free",value:"free"},{caption:"80",value:"80"},{caption:"40",value:"40"}]},"Cursor Style":{path:"cursorStyle",items:[{caption:"Ace",value:"ace"},{caption:"Slim",value:"slim"},{caption:"Smooth",value:"smooth"},{caption:"Smooth And Slim",value:"smooth slim"},{caption:"Wide",value:"wide"}]},Folding:{path:"foldStyle",items:[{caption:"Manual",value:"manual"},{caption:"Mark begin",value:"markbegin"},{caption:"Mark begin and end",value:"markbeginend"}]},"Soft Tabs":[{path:"useSoftTabs"},{path:"tabSize",type:"number",values:[2,3,4,8,16]}],Overscroll:{type:"buttonBar",path:"scrollPastEnd",items:[{caption:"None",value:0},{caption:"Half",value:.5},{caption:"Full",value:1}]}},More:{"Atomic soft tabs":{path:"navigateWithinSoftTabs"},"Enable Behaviours":{path:"behavioursEnabled"},"Full Line Selection":{type:"checkbox",values:"text|line",path:"selectionStyle"},"Highlight Active Line":{path:"highlightActiveLine"},"Show Invisibles":{path:"showInvisibles"},"Show Indent Guides":{path:"displayIndentGuides"},"Persistent Scrollbar":[{path:"hScrollBarAlwaysVisible"},{path:"vScrollBarAlwaysVisible"}],"Animate scrolling":{path:"animatedScroll"},"Show Gutter":{path:"showGutter"},"Show Print Margin":[{path:"showPrintMargin"},{type:"number",path:"printMarginColumn"}],"Highlight selected word":{path:"highlightSelectedWord"},"Fade Fold Widgets":{path:"fadeFoldWidgets"},"Merge Undo Deltas":{path:"mergeUndoDeltas",items:[{caption:"Always",value:"always"},{caption:"Never",value:"false"},{caption:"Timed",value:"true"}]},"Elastic Tabstops":{path:"useElasticTabstops"},"Incremental Search":{path:"useIncrementalSearch"},"Read-only":{path:"readOnly"},"Copy without selection":{path:"copyWithEmptySelection"},"Live Autocompletion":{path:"enableLiveAutocompletion"}}},p=function(e,t){this.editor=e,this.container=t||document.createElement("div"),this.groups=[],this.options={}};(function(){i.implement(this,r),this.add=function(e){e.Main&&i.mixin(c.Main,e.Main),e.More&&i.mixin(c.More,e.More)},this.render=function(){this.container.innerHTML="",n(["table",{id:"controls"},this.renderOptionGroup(c.Main),["tr",null,["td",{colspan:2},["table",{id:"more-controls"},this.renderOptionGroup(c.More)]]]],this.container)},this.renderOptionGroup=function(e){return Object.keys(e).map(function(t,a){var o=e[t];return o.position||(o.position=a/1e4),o.label||(o.label=t),o}).sort(function(e,t){return e.position-t.position}).map(function(e){return this.renderOption(e.label,e)},this)},this.renderOptionControl=function(e,t){var a=this;if(Array.isArray(t))return t.map(function(t){return a.renderOptionControl(e,t)});var o,i=a.getOption(t);if(t.values&&"checkbox"!=t.type&&("string"==typeof t.values&&(t.values=t.values.split("|")),t.items=t.values.map(function(e){return{value:e,name:e}})),"buttonBar"==t.type)o=["div",t.items.map(function(e){return["button",{value:e.value,ace_selected_button:i==e.value,onclick:function(){a.setOption(t,e.value);for(var o=this.parentNode.querySelectorAll("[ace_selected_button]"),i=0;i<o.length;i++)o[i].removeAttribute("ace_selected_button");this.setAttribute("ace_selected_button",!0)}},e.desc||e.caption||e.name]})];else if("number"==t.type)o=["input",{type:"number",value:i||t.defaultValue,style:"width:3em",oninput:function(){a.setOption(t,parseInt(this.value))}}],t.defaults&&(o=[o,t.defaults.map(function(e){return["button",{onclick:function(){var t=this.parentNode.firstChild;t.value=e.value,t.oninput()}},e.caption]})]);else if(t.items){var r=function(e){return e.map(function(e){return["option",{value:e.value||e.name},e.desc||e.caption||e.name]})},n=Array.isArray(t.items)?r(t.items):Object.keys(t.items).map(function(e){return["optgroup",{label:e},r(t.items[e])]});o=["select",{id:e,value:i,onchange:function(){a.setOption(t,this.value)}},n]}else"string"==typeof t.values&&(t.values=t.values.split("|")),t.values&&(i=i==t.values[1]),o=["input",{type:"checkbox",id:e,checked:i||null,onchange:function(){var e=this.checked;t.values&&(e=t.values[e?1:0]),a.setOption(t,e)}}],"checkedNumber"==t.type&&(o=[o,[]]);return o},this.renderOption=function(e,t){if(!t.path||t.onchange||this.editor.$options[t.path]){this.options[t.path]=t;var a="-"+t.path;return["tr",{class:"ace_optionsMenuEntry"},["td",["label",{for:a},e]],["td",this.renderOptionControl(a,t)]]}},this.setOption=function(e,t){"string"==typeof e&&(e=this.options[e]),"false"==t&&(t=!1),"true"==t&&(t=!0),"null"==t&&(t=null),"undefined"==t&&(t=void 0),"string"==typeof t&&parseFloat(t).toString()==t&&(t=parseFloat(t)),e.onchange?e.onchange(t):this.editor.setOption(e.path,t),this._signal("setOption",{name:e.path,value:t})},this.getOption=function(e){return e.getValue?e.getValue():this.editor.getOption(e.path)}}).call(p.prototype),t.OptionPanel=p}),ace.require(["ace/ext/options"],function(){});