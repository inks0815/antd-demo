import {ajaxfetch} from './ajaxfetch.js'
import message from 'antd/lib/message'

const getgongwenItems= ()=>(dispatch)=>{
  let condition={
        workitemId:'392539',
        documentId:'202354',
    }
  return ajaxfetch.getDo('/default/com.unicom.document.business.handle.operation.open.openForReact.getFormDataPkg.biz.ext',condition)
  .then(function(json){

     //console.log("++++++++++++++");
     //console.log(json.docmCdMindTds)
    if(json.retCode=='1'){
      //根据json返回的不同角色dispatch不同的对象 跳转不同的页面
      return dispatch({type: 'gongwenInfotext', data: json.dataRows})
    }else{
       alert('获取公文信息失败')
    }
  })
}

//传阅方式获取
const getlistReadRole= (condition)=>(dispatch)=>{
  return ajaxfetch.getDo('/default/com.unicom.document.commons.readconfig.readForReact.readconfigRangePkg.biz.ext',
     condition)
  .then(function(json){

     //console.log("++++++++++++++");
     //console.log(json.docmCdMindTds)
    if(json.retCode=='1'){
      //根据json返回的不同角色dispatch不同的对象 跳转不同的页面
      return dispatch({type: 'listReadRole', data: json.dataRows.listReadRole})
    }else{
       alert('获取传阅方式失败')
    }
  })
}

//获取人员接口
const getlistperson= (condition)=>(dispatch)=>{
  return ajaxfetch.getDo('/default/com.unicom.document.business.handle.operation.circulate.circulateForReact.getCirculatePersonPkg.biz.ext',
     condition)
  .then(function(json){

     //console.log("++++++++++++++");
     //console.log(json.docmCdMindTds)
    if(json.retCode=='1'){
      //根据json返回的不同角色dispatch不同的对象 跳转不同的页面
      return dispatch({type: 'listperson', data: json.dataRows.myObject.notAllPerson,alldata:json.dataRows.myObject.allPerson})
    }else{
       alert('获取传阅方式失败')
    }
  })
}

//选择传阅人员提交数据
const chuanyuePost= (condition)=>(dispatch)=>{
  return ajaxfetch.getDo('/default/com.unicom.document.business.handle.operation.circulate.circulateForReact.saveCirculatesPkg.biz.ext',
     condition)
  .then(function(json){

     //console.log("++++++++++++++");
     //console.log(json.docmCdMindTds)
    if(json.retCode=='1'){
      //根据json返回的不同角色dispatch不同的对象 跳转不同的页面
      message.success('传阅成功')
      return dispatch({type: 'CpostDone'})
    }else{
       message.error('提交失败')
       return dispatch({type: 'CpostFail'})
    }
  })
}

export {getgongwenItems,getlistReadRole,getlistperson,chuanyuePost}
