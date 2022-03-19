<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg" style="min-width: 50vw;">
      <q-card-section horizontal>
        <q-card-section>
          Left
        </q-card-section>

        <q-card-section class="q-mt-lg">
          <div class="text-h6 q-mb-xl">Administrator Login</div>

          <q-form @submit="handleLogin">
            <q-input dense outlined class="q-mb-md" label="Email Address" v-model="email"/>

            <q-input dense outlined class="q-mb-md" label="Password" type="password" v-model="password"/>

            <q-btn label="Login" class="full-width" color="primary" type="submit" />
          </q-form>
        </q-card-section>
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
