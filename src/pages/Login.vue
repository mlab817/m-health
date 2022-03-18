<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg" style="min-width: 50vw;">
      <q-card-section horizontal>
        <q-card-section>
          Left
        </q-card-section>

        <q-card-section class="q-mt-lg">
          <div class="text-h6 q-mb-xl">Administrator Login</div>

          <q-form>
            <q-input dense outlined class="q-mb-md" label="Email Address" />

            <q-input dense outlined class="q-mb-md" label="Password" type="password" />

            <q-btn label="Login" class="full-width" color="primary" />
          </q-form>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {

  }
})
</script>
