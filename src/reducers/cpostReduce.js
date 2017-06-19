const chuanyuePostReduce= function (state={},action){
  switch(action.type){
    case 'CpostDone':
      return   {window:true,code:true}
    case 'CpostFail':
      return   {window:false,code:true}
    default:
      return  state;
  }
}
export  {chuanyuePostReduce}
