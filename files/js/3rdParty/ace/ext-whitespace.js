ace.define("ace/ext/whitespace",["require","exports","module","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../lib/lang");t.$detectIndentation=function(e,t){for(var n=[],r=[],i=0,o=0,a=Math.min(e.length,1e3),s=0;s<a;s++){var c=e[s];if(/^\s*[^*+\-\s]/.test(c)){if("\t"==c[0])i++,o=-Number.MAX_VALUE;else{var g=c.match(/^ */)[0].length;if(g&&"\t"!=c[g]){var h=g-o;!(h>0)||o%h||g%h||(r[h]=(r[h]||0)+1),n[g]=(n[g]||0)+1}o=g}for(;s<a&&"\\"==c[c.length-1];)c=e[s++]}}for(var l=r.reduce(function(e,t){return e+t},0),u={score:0,length:0},f=0,s=1;s<12;s++){var v=function(e){for(var t=0,r=e;r<n.length;r+=e)t+=n[r]||0;return t}(s);1==s?(f=v,v=n[1]?.9:.8,n.length||(v=0)):v/=f,r[s]&&(v+=r[s]/l),v>u.score&&(u={score:v,length:s})}if(u.score&&u.score>1.4)var d=u.length;return i>f+1?((1==d||f<i/4||u.score<1.8)&&(d=void 0),{ch:"\t",length:d}):f>i+1?{ch:" ",length:d}:void 0},t.detectIndentation=function(e){var n=e.getLines(0,1e3),r=t.$detectIndentation(n)||{};return r.ch&&e.setUseSoftTabs(" "==r.ch),r.length&&e.setTabSize(r.length),r},t.trimTrailingSpace=function(e,t){var n=e.getDocument(),r=n.getAllLines(),i=t&&t.trimEmpty?-1:0,o=[],a=-1;t&&t.keepCursorPosition&&(e.selection.rangeCount?e.selection.rangeList.ranges.forEach(function(e,t,n){var r=n[t+1];r&&r.cursor.row==e.cursor.row||o.push(e.cursor)}):o.push(e.selection.getCursor()),a=0);for(var s=o[a]&&o[a].row,c=0,g=r.length;c<g;c++){var h=r[c],l=h.search(/\s+$/);c==s&&(l<o[a].column&&l>i&&(l=o[a].column),s=o[++a]?o[a].row:-1),l>i&&n.removeInLine(c,l,h.length)}},t.convertIndentation=function(e,t,n){var i=e.getTabString()[0],o=e.getTabSize();n||(n=o),t||(t=i);for(var a="\t"==t?t:r.stringRepeat(t,n),s=e.doc,c=s.getAllLines(),g={},h={},l=0,u=c.length;l<u;l++){var f=c[l].match(/^\s*/)[0];if(f){var v=e.$getStringScreenWidth(f)[0],d=Math.floor(v/o),m=v%o,p=g[d]||(g[d]=r.stringRepeat(a,d));(p+=h[m]||(h[m]=r.stringRepeat(" ",m)))!=f&&(s.removeInLine(l,0,f.length),s.insertInLine({row:l,column:0},p))}}e.setTabSize(n),e.setUseSoftTabs(" "==t)},t.$parseStringArg=function(e){var t={};/t/.test(e)?t.ch="\t":/s/.test(e)&&(t.ch=" ");var n=e.match(/\d+/);return n&&(t.length=parseInt(n[0],10)),t},t.$parseArg=function(e){return e?"string"==typeof e?t.$parseStringArg(e):"string"==typeof e.text?t.$parseStringArg(e.text):e:{}},t.commands=[{name:"detectIndentation",exec:function(e){t.detectIndentation(e.session)}},{name:"trimTrailingSpace",exec:function(e){t.trimTrailingSpace(e.session)}},{name:"convertIndentation",exec:function(e,n){var r=t.$parseArg(n);t.convertIndentation(e.session,r.ch,r.length)}},{name:"setIndentation",exec:function(e,n){var r=t.$parseArg(n);r.length&&e.session.setTabSize(r.length),r.ch&&e.session.setUseSoftTabs(" "==r.ch)}}]}),ace.require(["ace/ext/whitespace"],function(){});