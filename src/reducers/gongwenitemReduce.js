const gongwenInfo=function(state='1',action){

  switch(action.type){
    case 'gongwenInfotext':
  //  console.log("----++++++++++++++----");
    //console.log(action.data)
      return Object.assign({},state,{formG:action.data});
    default:
      return state
  }
}

export {gongwenInfo}
