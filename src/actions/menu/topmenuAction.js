import {ajaxfetch} from '../ajaxfetch.js'
import message from 'antd/lib/message';

// 登录人员topmenu菜单权限查询
const getPersTopmenu = (condition)=>(dispatch, getState)=> {
  ajaxfetch.getDo('/auth/sessionLogin/login')
  .then(function(json){
    console.log(json);
    if(typeof(json.dataRows)!="undefined"){
        return dispatch({type:'PersTopmenu',data:json.dataRows});
    }
    else {
      message.error("获取失败");
    }
  })
}
