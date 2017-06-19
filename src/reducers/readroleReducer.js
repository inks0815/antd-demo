const readrole=function(state='1',action){

  switch(action.type){
    case 'listReadRole':
  //  console.log("----++++++++++++++----");
    //console.log(action.data)
      return Object.assign({},state,{readrolelist:action.data});
    default:
      return state
  }
}

export {readrole}
