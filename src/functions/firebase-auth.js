import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth()

const login = (email, password) => {
  // handle login
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

const register = () => {

}

const logout = () => {}

export {
  login,
  register,
  logout
}
