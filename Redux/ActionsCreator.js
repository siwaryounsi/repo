import { UPDATE, LOADING } from './Actions';
import axios from 'axios';
export const loadingAction = (Data) => {

      return {
            type: LOADING,
            payload: Data
      }

};
export const fetchLoading = () => {
      return (dispatch) => {
            axios.get("http://192.168.100.110:5000/api/contacts/603bf2cf3641c437d863adbd").then(
                  res => {
                        dispatch(loadingAction(res.data))


                  }
            )

      }

}