// let init ={
//     count: 0
// }

export default function countReducer(state, action){

switch(action.type){
   case "Increment" : {
       return {
           ...state,
           count: state.count + 1
       }
   }

   case "Decrement":{
       return{
        ...state,
        count: state.count - 1
       }
   }
default : return state;
}
}
 export const Incre ={
    type:"Increment"
}
export const Decre ={
    type:"Decrement"
}
// let s = countReducer(init, Incre)

// console.log(s)