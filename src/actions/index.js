import { auth, provider } from '../firebase'; // Adjust the path as necessary
import { signInWithPopup } from 'firebase/auth';
import { SET_USER } from './actionType';

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

export function signInApi() {
    return async (dispatch) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Extract necessary fields
            const userData = {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            };

            console.log(userData);
            dispatch(setUser(userData)); // Dispatch only serializable user data
        } catch (error) {
            alert(error.message);
            dispatch({ type: 'SIGN_IN_FAILURE', error: error.message }); // Handle sign-in failure
        }
    };
}
