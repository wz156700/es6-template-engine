# es6-template-engine
## 简介
主要是通过es6的模板字符串搭配nodejs的vm模块来实现一个简单的模板引擎

## 包含的主要功能
1. 进行模板渲染
2. include 子模版

## 基础用法
1. initTemplate(false,'`<span>哇！${name}好可爱!</span>`','test')({name:'土豆，奥利奥'});
2. initTemplate(true,'./tests3.js')({name:'土豆，奥利奥'});
3. initTemplate(false,'`<span>${include("./test2.js",{name:name})}</span>`','test2')({name:'土豆，奥利奥'});
