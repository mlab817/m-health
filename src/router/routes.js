const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: 'patients',
        component: () => import('pages/Patients.vue'),
        props: { pageTitle: 'Registered Patients' },
        meta: {
          requiresAuth: true
        }
      },
      { path: 'login',
        component: () => import('pages/Login.vue'),
        meta: {
          guest: true,
          hideSidebar: true,
          hideHeader: true
        }
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
