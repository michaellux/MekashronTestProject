import*as e from"glob";import r from"plugin-error";import{PurgeCSS as t}from"purgecss";import o from"through2";import n from"vinyl-sourcemaps-apply";function s(s){return o.obj((async function(c,u,i){if(c.isNull())return i(null,c);if(c.isBuffer())try{const r={...s,content:(a=s.content,p=s.skippedContentGlobs,a.reduce(((r,t)=>[...r,...e.sync(t,{ignore:p})]),[])),css:[{raw:c.contents.toString()}],stdin:!0,sourceMap:!!c.sourceMap},o=(await(new t).purge(r))[0],u=r.rejected&&o.rejected?o.rejected.join(" {}\n")+" {}":o.css;c.contents=Buffer.from(u,"utf-8"),c.sourceMap&&n(c,o.sourceMap),i(null,c)}catch(e){e instanceof Error&&this.emit("error",new r("gulp-purgecss",e.message))}var a,p;if(c.isStream()){let e="";c.contents.on("data",(r=>{e+=r.toString()})).on("end",(async()=>{try{const r={...s,css:[{raw:e}],sourceMap:!!c.sourceMap},u=(await(new t).purge(r))[0],a=r.rejected&&u.rejected?u.rejected.join(" {}\n")+" {}":u.css,p=o();p.write(Buffer.from(a,"utf-8")),c.contents=c.contents.pipe(p),c.sourceMap&&n(c,u.sourceMap),i(null,c)}catch(e){e instanceof Error&&this.emit("error",new r("gulp-purgecss",e.message))}}))}}))}export{s as default};