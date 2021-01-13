<template>
  <side-bar></side-bar>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  data() {
    return {
      sideCollapse: [
        [
          {
            name: "Dashboard",
            icon: "fas fa-home",
          },
          {
            name: "Products",
            icon: "fas fa-atom",
            submenu: [
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
            ],
          },
          {
            name: "Bookmark",
            icon: "fas fa-bookmark",
            submenu: [
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
            ],
          },
        ],
        [
          {
            name: "Users",
            icon: "fas fa-user",
            submenu: [
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
            ],
          },
          {
            name: "Setting",
            icon: "fas fa-bell",
            submenu: [
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
            ],
          },
        ],
        [
          {
            name: "Chat",
            icon: "fas fa-comments",
            submenu: [
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
              { name: "Submenu Item" },
            ],
          },
          {
            name: "Signout",
            icon: "fas fa-sign-out-alt",
          },
        ],
      ],
    };
  },
  components: { SideBar },
  provide() {
    return {
      sideCollapse: this.sideCollapse,
    };
  },
};
</script>
