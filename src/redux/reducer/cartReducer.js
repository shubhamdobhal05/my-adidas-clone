const cart = [];


const cartReducer = (state = cart, action) => {
    const data = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //checking if product is already exist
            const productExist = state.find((x) => x.id === data.id);
            if(productExist) {
                return state.map((x) => x.id === data.id ? {...x, qty: x.qty + 1} : x);
            } else {
                const data = action.payload;
                return [
                    ...state,
                    {
                        ...data,
                        qty: 1,
                    }
                ]
            }
            break;
        
        default:
            return state;
            break;
    }
}


export default cartReducer;