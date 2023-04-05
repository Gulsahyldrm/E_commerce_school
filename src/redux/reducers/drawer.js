//statlerimi tutan yapı olarak düşünebilirsin 
//actionsdan ya da normal bir şekilde veri, type, payload alır 

export const drawerReducer = (state = {drawer: false}, action) =>{
    switch (action.type) {
        case "DRAWER":
            return{
                drawer: action.payload
            }
            
        default:
           return state
    }




}