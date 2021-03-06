
import { UPDATE, LOADING } from './Actions';
const INITIAL_STATE = {

      DATA: []
}
const reducer = (state = INITIAL_STATE, action) => {
      if (action.type == LOADING)
            return ({
                  ...state,
                  DATA: action.payload,

            })

      else {
            return state
      }
}
export default reducer;