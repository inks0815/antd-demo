import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {gongwenInfo} from './gongwenitemReduce'
import {readrole} from './readroleReducer'
import {listperson} from './listpersonReduce'
import {chuanyuePostReduce} from './cpostReduce'

function isfetch(state='none',action){
  switch(action.type){
    case 'FETCH_POSTS_REQUEST':
      state='block';
      return state;
    case 'FETCH_POSTS_FAILURE':
      state='none';
      alert(action.error)
      return state
    case 'FETCH_POSTS_DONE':
      state='none';
      return state
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  gongwenInfo,
  readrole,
  listperson,
  chuanyuePostReduce
})

export default todoApp
