import * as oc from "../constants/OrderConstants";
export const orderCreateReducer =(state={}, action) =>{
    switch(action.type){
        case oc.ORDER_CREATE_REQUEST:
            return {loading: true}
        case oc.ORDER_CREATE_SUCCESS:
            return {loading: false, success: true, order:action.payload};
        case oc.ORDER_CREATE_FAIL:
            return {loading: false, error: action.payload};
        case oc.ORDER_CREATE_RESET:
            return {};
        default: 
            return state;
             
    }
}
export const orderDetailsReducer = (state = {loading: true}, action)=> {
    switch(action.type) {
        case oc.ORDER_DETAILS_REQUEST:
            return  {loading: true};
        case oc.ORDER_DETAILS_SUCCESS:
            return {loading: false, order: action.payload };
        case oc.ORDER_DETAILS_FAIL:   
            return {loading: false, error: action.palyload};
        default:
            return state; 
    }
}
export const orderPayReducer = (state = {}, action) => {
    switch(action.type) {
        case oc.ORDER_PAY_REQUEST: 
            return { loading: true };
        case oc.ORDER_PAY_SUCCESS:
            return { loading: false, success: true };
        case oc.ORDER_PAY_FAIL:
            return { loading:false, error: action.payload };
        case oc.ORDER_PAY_RESET:
            return { };
        default:
            return state;
    }
}

export const myOrdersReducer =(state = {orders:[] }, action) => {
  switch(action.type) {
    case oc.ORDER_MINE_LIST_REQUEST: 
    return {loading: true};
    case oc.ORDER_MINE_LIST_SUCCESS:
        return { loading: false, orders: action.payload };
    case oc.ORDER_MINE_LIST_FAIL:
        return {loading:false, error: action.payload };
            
    default:
        return state;
    }
}
export const ordersListReducer = (state = {orders:[] }, action) => {
    switch(action.type) {
        case oc.ORDER_LIST_REQUEST: 
        return { loading: true};
        case oc.ORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case oc.ORDER_LIST_FAIL:
            return { loading:false, error: action.payload };
                
        default:
            return state;
        }
}
export const orderDeleteReducer = (state = { }, action) => {
    switch(action.type) {
        case oc.ORDER_DELETE_REQUEST: 
        return { loading: true};
        case oc.ORDER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case oc.ORDER_DELETE_RESET:
            return { };
            
        case oc.ORDER_DELETE_FAIL:
            return { loading:false, error: action.payload };
                
        default:
            return state;
        }
}
export const orderDeliverReducer = (state = { }, action) => {
    switch(action.type) {
        case oc.ORDER_DELIVER_REQUEST: 
            return { loading: true};
        case oc.ORDER_DELIVER_SUCCESS:
            return { loading: false, success: true };
        case oc.ORDER_DELIVER_RESET:
            return { };
            
        case oc.ORDER_DELIVER_FAIL:
            return { loading:false, error: action.payload };
                
        default:
            return state;
        }
}
