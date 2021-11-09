const initTemplate=require('./index.js')

initTemplate(false,'`<span>哇！${name}好可爱!</span>`','test')({name:'土豆，奥利奥'});
initTemplate(true,'./tests3.js')({name:'土豆，奥利奥'});
initTemplate(false,'`<span>${include("./test2.js",{name:name})}</span>`','test2')({name:'土豆，奥利奥'});
