const listperson=function(state='1',action){

  switch(action.type){
    case 'listperson':
  //  console.log("----++++++++++++++----");
    //console.log(action.data)
      return Object.assign({},state,{personlist:action.data,allpersonlist:action.alldata});

    default:
      return state
  }
}

export {listperson}
