ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,i){"use strict";var n=e("../../lib/oop"),o=e("../../range").Range,r=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(a,r),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var n=e.getLine(i);if(this.singleLineBlockCommentRe.test(n)&&!this.startRegionRe.test(n)&&!this.tripleStarBlockCommentRe.test(n))return"";var o=this._getFoldWidgetBase(e,t,i);return!o&&this.startRegionRe.test(n)?"start":o},this.getFoldWidgetRange=function(e,t,i,n){var o=e.getLine(i);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,i);var r=o.match(this.foldingStartMarker);if(r){s=r.index;if(r[1])return this.openingBracketBlock(e,r[1],i,s);var a=e.getCommentFoldRange(i,s+r[0].length,1);return a&&!a.isMultiLine()&&(n?a=this.getSectionRange(e,i):"all"!=t&&(a=null)),a}if("markbegin"!==t&&(r=o.match(this.foldingStopMarker))){var s=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],i,s):e.getCommentFoldRange(i,s,-1)}},this.getSectionRange=function(e,t){for(var i=e.getLine(t),n=i.search(/\S/),r=t,a=i.length,s=t+=1,g=e.getLength();++t<g;){var l=(i=e.getLine(t)).search(/\S/);if(-1!==l){if(n>l)break;var d=this.getFoldWidgetRange(e,"all",t);if(d){if(d.start.row<=r)break;if(d.isMultiLine())t=d.end.row;else if(n==l)break}s=t}}return new o(r,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,i){for(var n=t.search(/\s*$/),r=e.getLength(),a=i,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,g=1;++i<r;){t=e.getLine(i);var l=s.exec(t);if(l&&(l[1]?g--:g++,!g))break}var d=i;if(d>a)return new o(a,n,d,t.length)}}.call(a.prototype)}),ace.define("ace/mode/mavens_mate_log",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/mavens_mate_log_highlight_rules","ace/mode/folding/cstyle"],function(e,t,i){"use strict";var n=e("../lib/oop"),o=e("./text").Mode,r=e("./mavens_mate_log_highlight_rules").MavensMateLogHighlightRules,a=e("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=r,this.foldingRules=new a};n.inherits(s,o),function(){this.$id="ace/mode/mavens_mate_log"}.call(s.prototype),t.Mode=s});