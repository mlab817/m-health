import { boot } from 'quasar/wrappers'
import {getAuth} from "firebase/auth";

const auth = getAuth()

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot (({ router }) => {
  router.beforeEach((to, from) => {
    const user = auth.currentUser
    if (to.meta.requiresAuth && !user) {
      return {
        path: '/login',
        query: { redirect: to.fullPath }
      }
    }

    if (to.meta.guest && user) {
      console.log('already logged in')
      return {
        path: '/'
      }
    }
  })
})
