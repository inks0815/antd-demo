// var FETCH_POSTS_REQUEST = {
//         type:'FETCH_POSTS_REQUEST'
//     },
//     FETCH_POSTS_FAILURE = {
//         type: 'FETCH_POSTS_FAILURE',
//         error: '请求错误'
//     },
//     FETCH_POSTS_DONE = {
//         type: 'FETCH_POSTS_DONE'
//     };
import message from 'antd/lib/message';
//const host='http://10.0.209.23:9091'
//const host='http://10.0.130.19:8080'
const host='http://10.124.5.41:8082'
//const host='http://202.99.45.105:8080'
const ajaxfetch={
  /*
  @param url 请求的地址 字符串
  @param key 参数的key 字符串
  @param param 请求的参数 对象
  全部使用post方法
  */
  getDo:function(url,param={},load){
    var hide
    if(load == undefined){
      hide = message.loading('正在执行请稍后...', 0);
    }

    //dispatch(FETCH_POSTS_REQUEST);
    var body;

      //body=encodeURIComponent(JSON.stringify(param));
      body=JSON.stringify(param);
      //console.log("88888000001111");
      //console.log(JSON.stringify(param));
      //console.log("88888000001111");

    return fetch(
      host+url,
      {method:'post',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},

        body:body
      }
      )
      //.then(response => response.json())
      .then(function(response){
        if(load == undefined){
          hide()
        }
        return response.json()
      })
    //.then(json => dispatch(receivePosts(type,json, dispatch)))
  }
}
export {ajaxfetch,host}
