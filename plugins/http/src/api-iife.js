if("__TAURI__"in window){var __TAURI_HTTP__=function(e){"use strict";async function t(e,t={},n){return window.__TAURI_INTERNALS__.invoke(e,t,n)}return"function"==typeof SuppressedError&&SuppressedError,e.fetch=async function(e,n){const r=null==n?void 0:n.maxRedirections,i=null==n?void 0:n.maxRedirections;n&&(delete n.maxRedirections,delete n.connectTimeout);const a=new Request(e,n),s=await a.arrayBuffer(),o=s.byteLength?Array.from(new Uint8Array(s)):null,u=await t("plugin:http|fetch",{method:a.method,url:a.url,headers:Array.from(a.headers.entries()),data:o,maxRedirections:r,connectTimeout:i});a.signal.addEventListener("abort",(()=>{t("plugin:http|fetch_cancel",{rid:u})}));const{status:d,statusText:c,url:_,headers:l}=await t("plugin:http|fetch_send",{rid:u}),f=await t("plugin:http|fetch_read_body",{rid:u}),h=new Response(new Uint8Array(f),{headers:l,status:d,statusText:c});return Object.defineProperty(h,"url",{value:_}),h},e}({});Object.defineProperty(window.__TAURI__,"http",{value:__TAURI_HTTP__})}