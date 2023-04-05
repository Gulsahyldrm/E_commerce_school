export const productsDetailReducer = (state = {product: {}},action) =>{
    switch (action.type) {
        case "GET_DETAILS":
            
            return{
                ...state,
                products:action.payload
            }
    
        default:
            return state 
    }
}