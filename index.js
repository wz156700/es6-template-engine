const fs = require('fs'); //引入fs模块
const vm = require('vm'); //引入vm模块

//template数组
let templateMap={
}

let context={
    include:function (tempalteName,data){
        templateMap[tempalteName]= templateMap[tempalteName]||initTemplate(true,tempalteName)
        return templateMap[tempalteName](data)
    }
}


//param:可以直接是需要转换的模板,也可以是模板内容文件的路径,必传
//isFilePath：是否是文件路径，必传
//templateName:模板名字。如果isFilePath为false,templateName必传;如果isFilePath为true,templateName则不需要传
function initTemplate(isFilePath,param,templateName){
    let temp=param
    //如果不是路径
    if(!isFilePath){
        if(!templateMap[templateName]){
            return templateMap[templateName]=vm.runInNewContext(`(function(data){with(data) return ${temp};})`,context)
        }else{
            return templateMap[templateName]
        }
    }else{
        if(!templateMap[param]){
            return templateMap[param]=vm.runInNewContext(`(function(data){with(data) return \`${fs.readFileSync(temp,'utf-8')}\`;})`,context)
        }else{
            return templateMap[param]
        }
    }

}

module.exports=initTemplate;

