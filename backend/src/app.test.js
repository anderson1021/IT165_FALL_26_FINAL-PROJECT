import test from 'node:test';
import assert from 'node:assert/strict';
import {app} from './app.js';
test('initial API contract and unavailable database handling',async()=>{
 const server=app.listen(0,'127.0.0.1');await new Promise(r=>server.once('listening',r));
 const base=`http://127.0.0.1:${server.address().port}`;
 try {
 let r=await fetch(base+'/api/health');assert.equal(r.status,200);assert.equal((await r.json()).status,'ok');
 r=await fetch(base+'/api/project');assert.equal((await r.json()).name,'Dyckman Kitchen');
 r=await fetch(base+'/api/favorites');assert.equal(r.status,503);
 r=await fetch(base+'/api/missing');assert.equal(r.status,404);
 r=await fetch(base+'/api/recipes?search='+ 'a'.repeat(81));assert.equal(r.status,400);
 } finally{await new Promise(r=>server.close(r));}
});
