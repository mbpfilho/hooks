export function reducer(state,action){
  switch(action.type){
      case "numberAdd2":
          return{...state,number:state.number+2}
      // case "numberAddN":
      //     return{...state,number:state.number+parseInt(document.getElementById("n").value)}
      case "numberAddN":
          return{...state,number:state.number+parseInt(action.payload)}
      case "numberMulti7":
          return{...state,number:state.number*7}
      case "numberDiv25":
          return{...state,number:state.number/25}
      case "numberParseInt":
          return{...state,number:parseInt(state.number)}
      case "login":
          return {...state,user:{name:action.payload}}
      default:
          return state
  }
}


