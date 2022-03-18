<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-if="!$route.meta.hideSidebar" v-model="leftDrawerOpen" show-if-above bordered>
      <q-toolbar class="q-my-md">
        <q-avatar>
          <img src="~assets/logo.png" alt="logo">
        </q-avatar>
        <q-toolbar-title>M-Health</q-toolbar-title>
      </q-toolbar>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-header v-if="!$route.meta.hideHeader">
      <q-toolbar class="q-py-md">
        <q-avatar>
          <img src="~assets/logo.png" alt="logo">
        </q-avatar>
        <q-toolbar-title>
          M-Health
        </q-toolbar-title>
        <q-space />
        <q-btn flat round to="/login">
          <q-icon name="bi-box-arrow-right" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  { title: "Home", link: "/", icon: "bi-house-door-fill" },
  { title: "Patients", link: "/patients", icon: "bi-people-fill", gap: true },
  { title: "Bookings", link: "/bookings", icon: "bi-calendar-fill" },
  { title: "Exams ", link: "/exams", icon: "bi-heart-pulse" },
  { title: "Schedules", link: "/Home", icon: "schedule.png" },
  { title: "Messages", link: "/messages", icon: "messages.png", gap: true },
  { title: "Records ", link: "/records", icon: "records.png" },
  { title: "About ", link: "/about", icon: "bi-question-circle-fill" },
];

const linksList2 = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  },
});
</script>
