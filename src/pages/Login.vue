<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg" style="min-width: 360px;">
      <q-card-section class="q-mt-lg">
        <div class="text-h6 q-mb-xl text-center">Administrator Login</div>

        <q-form @submit="handleLogin">
          <q-input dense outlined class="q-mb-md" label="Email Address" v-model="email"/>

          <q-input dense outlined class="q-mb-md" label="Password" type="password" v-model="password"/>

          <q-btn label="Login" class="full-width" color="primary" type="submit" />
        </q-form>

        <q-separator class="q-my-md" />

        <q-btn label="Create New Account" to="/sign-up" class="full-width" flat />

        <q-btn label="Forgot password?" flat class="q-mt-md" no-caps to="/forgot-password" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { login } from "src/functions/firebase-auth";

export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')

    const handleLogin = () => {
      login(email.value, password.value)
    }

    return {
      handleLogin,
      email,
      password
    }
  }
})
</script>
