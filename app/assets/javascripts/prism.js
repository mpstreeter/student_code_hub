/* http://prismjs.com/download.html?themes=prism&languages=markup+css+css-extras+clike+javascript+java+coffeescript+c+python+ruby+objectivec&plugins=line-highlight+line-numbers */
var self=typeof window!="undefined"?window:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content)):t.util.type(e)==="Array"?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){var s=t.tokenize(e,r);return n.stringify(t.util.encode(s),i)},tokenize:function(e,n,r){var i=t.Token,s=[e],o=n.rest;if(o){for(var u in o)n[u]=o[u];delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u])continue;var a=n[u],f=a.inside,l=!!a.lookbehind,c=0;a=a.pattern||a;for(var h=0;h<s.length;h++){var p=s[h];if(s.length>e.length)break e;if(p instanceof i)continue;a.lastIndex=0;var d=a.exec(p);if(d){l&&(c=d[1].length);var v=d.index-1+c,d=d[0].slice(c),m=d.length,g=v+m,y=p.slice(0,v+1),b=p.slice(g+1),w=[h,1];y&&w.push(y);var E=new i(u,f?t.tokenize(d,f):d);w.push(E);b&&w.push(b);Array.prototype.splice.apply(s,w)}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e,r,i){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(function(t){return n.stringify(t,r,e)}).join("");var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};s.type=="comment"&&(s.attributes.spellcheck="true");t.hooks.run("wrap",s);var o="";for(var u in s.attributes)o+=u+'="'+(s.attributes[u]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"};if(!self.document){if(!self.addEventListener)return self.Prism;self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return self.Prism}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}return self.Prism}();typeof module!="undefined"&&module.exports&&(module.exports=Prism);;
Prism.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,punctuation:/[\{\};:]/g,"function":/[-a-z0-9]+(?=\()/ig};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/ig,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}});;
Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,"pseudo-class":/:[-\w]+(?:\(.*\))?/g,"class":/\.[-:\.\w]+/g,id:/#[-:\.\w]+/g}};Prism.languages.insertBefore("css","ignore",{hexcode:/#[\da-f]{3,6}/gi,entity:/\\[\da-f]{1,8}/gi,number:/[\d%\.]+/g});;
Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/ig,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}});Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/ig,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});;
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,operator:{pattern:/([^\.]|^)([-+]{1,2}|!|=?<|=?>|={1,2}|(&){1,2}|\|?\||\?|\*|\/|%|\^|(<){2}|(>){2,3}|:|~)/g,lookbehind:!0}});;
Prism.languages.coffeescript=Prism.languages.extend("javascript",{"block-comment":/([#]{3}\s*\r?\n(.*\s*\r*\n*)\s*?\r?\n[#]{3})/g,comment:/(\s|^)([#]{1}[^#^\r^\n]{2,}?(\r?\n|$))/g,keyword:/\b(this|window|delete|class|extends|namespace|extend|ar|let|if|else|while|do|for|each|of|return|in|instanceof|new|with|typeof|try|catch|finally|null|undefined|break|continue)\b/g});Prism.languages.insertBefore("coffeescript","keyword",{"function":{pattern:/[a-z|A-z]+\s*[:|=]\s*(\([.|a-z\s|,|:|{|}|\"|\'|=]*\))?\s*-&gt;/gi,inside:{"function-name":/[_?a-z-|A-Z-]+(\s*[:|=])| @[_?$?a-z-|A-Z-]+(\s*)| /g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g}},"attr-name":/[_?a-z-|A-Z-]+(\s*:)| @[_?$?a-z-|A-Z-]+(\s*)| /g});;
Prism.languages.c=Prism.languages.extend("clike",{string:/("|')([^\n\\\1]|\\.|\\\r*\n)*?\1/g,keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/g,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\//g});Prism.languages.insertBefore("c","string",{property:{pattern:/((^|\n)\s*)#\s*[a-z]+([^\n\\]|\\.|\\\r*\n)*/gi,lookbehind:true,inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/g,lookbehind:true}}}});delete Prism.languages.c["class-name"];delete Prism.languages.c["boolean"]
;
Prism.languages.python={comment:{pattern:/(^|[^\\])#.*?(\r?\n|$)/g,lookbehind:!0},string:/"""[\s\S]+?"""|("|')(\\?.)*?\1/g,keyword:/\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,"boolean":/\b(True|False)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;
/**
 * Original by Samuel Flores
 *
 * Adds the following new token classes:
 * 		constant, builtin, variable, symbol, regex
 */Prism.languages.ruby=Prism.languages.extend("clike",{comment:/#[^\r\n]*(\r?\n|$)/g,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g});Prism.languages.insertBefore("ruby","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0},variable:/[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,symbol:/:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g});;
Prism.languages.objectivec=Prism.languages.extend("c",{keyword:/(\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b)|((?=[\w|@])(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b)/g,string:/(?:("|')(\\?.)*?\1)|(?:@"(\\?.)*?")/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%|@/g});;
(function(){if(!window.Prism){return}function $$(a,b){return Array.prototype.slice.call((b||document).querySelectorAll(a))}function hasClass(a,b){b=" "+b+" ";return(" "+a.className+" ").replace(/[\n\t]/g," ").indexOf(b)>-1}var h=crlf=/\r?\n|\r/g;function highlightLines(a,b,c){var d=b.replace(/\s+/g,'').split(','),offset=+a.getAttribute('data-line-offset')||0;var e=parseFloat(getComputedStyle(a).lineHeight);for(var i=0,range;range=d[i++];){range=range.split('-');var f=+range[0],end=+range[1]||f;var g=document.createElement('div');g.textContent=Array(end-f+2).join(' \r\n');g.className=(c||'')+' line-highlight';if(!hasClass(a,'line-numbers')){g.setAttribute('data-start',f);if(end>f){g.setAttribute('data-end',end)}}g.style.top=(f-offset-1)*e+'px';if(hasClass(a,'line-numbers')){a.appendChild(g)}else{(a.querySelector('code')||a).appendChild(g)}}}function applyHash(){var b=location.hash.slice(1);$$('.temporary.line-highlight').forEach(function(a){a.parentNode.removeChild(a)});var c=(b.match(/\.([\d,-]+)$/)||[,''])[1];if(!c||document.getElementById(b)){return}var d=b.slice(0,b.lastIndexOf('.')),pre=document.getElementById(d);if(!pre){return}if(!pre.hasAttribute('data-line')){pre.setAttribute('data-line','')}highlightLines(pre,c,'temporary ');document.querySelector('.temporary.line-highlight').scrollIntoView()}var j=0;Prism.hooks.add('after-highlight',function(b){var c=b.element.parentNode;var d=c&&c.getAttribute('data-line');if(!c||!d||!/pre/i.test(c.nodeName)){return}clearTimeout(j);$$('.line-highlight',c).forEach(function(a){a.parentNode.removeChild(a)});highlightLines(c,d);j=setTimeout(applyHash,1)});addEventListener('hashchange',applyHash)})();
;
Prism.hooks.add("after-highlight",function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)||t.className.indexOf("line-numbers")===-1){return}var n=1+e.code.split("\n").length;var r;lines=new Array(n);lines=lines.join("<span></span>");r=document.createElement("span");r.className="line-numbers-rows";r.innerHTML=lines;if(t.hasAttribute("data-start")){t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)}e.element.appendChild(r)})
;
