"use strict";function _min(r,t,e,n,h){return r<t||e<t?r>e?e+1:r+1:n===h?t:t+1}function levenshtein(r,t){if(r===t)return 0;if(r.length>t.length){var e=r;r=t,t=e}for(var n=r.length,h=t.length;n>0&&r.charCodeAt(n-1)===t.charCodeAt(h-1);)n--,h--;for(var o=0;o<n&&r.charCodeAt(o)===t.charCodeAt(o);)o++;if(n-=o,h-=o,0===n||1===h)return h;var a,c,f,i,d,A,C,u,l,g,m,s,v=0,_=[];for(a=0;a<n;a++)_.push(a+1),_.push(r.charCodeAt(o+a));for(;v+3<h;)for(l=t.charCodeAt(o+(c=v)),g=t.charCodeAt(o+(f=v+1)),m=t.charCodeAt(o+(i=v+2)),s=t.charCodeAt(o+(d=v+3)),A=v+=4,a=0;a<_.length;a+=2)C=_[a],u=_[a+1],c=_min(C,c,f,l,u),f=_min(c,f,i,g,u),i=_min(f,i,d,m,u),A=_min(i,d,A,s,u),_[a]=A,d=i,i=f,f=c,c=C;for(;v<h;)for(l=t.charCodeAt(o+(c=v)),A=++v,a=0;a<_.length;a+=2)C=_[a],_[a]=A=C<c||A<c?C>A?A+1:C+1:l===_[a+1]?c:c+1,c=C;return A}