import * as actions from "../actions";

const reducer = (state, action) => {
    switch(action.type){
        case actions.GET_DATA_REQUESTED:
            return { ...state, isLoading: true };
        case actions.GET_DATA_DONE:
            return { ...state, isLoading: false, repositories: { ...state.repositories, ...action.payload }, isCancelled: false };
        case actions.GET_CANDLE_DATA_DONE:
            return { ...state, isLoading: false, candleData: action.payload.response, isCancelled: false };
        case actions.GET_DATA_FAILED:
            return { ...state, isLoading: false, isError: true, error: action.payload }
        case actions.GET_DATA_CANCEL:
            return { ...state, isLoading: false, isCancelled: true }
        default:
            return state;
    }
}
export default reducer;