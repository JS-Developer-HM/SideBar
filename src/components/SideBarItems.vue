<template>
  <perfect-scrollbar :style="{ height: `${height}px` }">
    <div class="side-items" ref="collapse">
      <ul
        v-for="(sideItems, i) in sideCollapse"
        class="menu-nav"
        id="collapse"
        :key="i"
      >
        <li
          class="menu-item"
          :class="{ 'menu-item-submenu': item.submenu }"
          v-for="item in sideItems"
          :key="item.id"
        >
          <a
            class="menu-link"
            :class="{ active: item.id == activeID }"
            :data-bs-target="'#item-' + item.id"
            :data-bs-toggle="'collapse'"
            @click="active($event, item)"
          >
            <span class="menu-icon"><i :class="item.icon"></i></span>
            <span class="menu-text" v-text="item.name"></span>
            <i class="fas fa-angle-right" v-if="item.submenu"></i>
          </a>
          <div
            class="menu-submenu collapse"
            :id="'item-' + item.id"
            data-bs-parent="#collapse"
            v-if="item.submenu"
          >
            <ul class="menu-subnav">
              <li class="menu-item" v-for="sub in item.submenu" :key="sub.name">
                <a href="#" class="menu-link">
                  <span class="menu-dot"></span>
                  <span class="menu-text">sub.name</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </perfect-scrollbar>
</template>

<style>
.ps {
  padding-top: 12px;
}
</style>
<script>
export default {
  data() {
    return {
      activeID: null,
      height: window.innerHeight,
    };
  },
  inject: ["sideCollapse"],
  methods: {
    resize() {
      const header = document.querySelector(".side-header");
      const footer = document.querySelector(".side-footer");
      this.height =
        window.innerHeight - header.offsetHeight - footer.offsetHeight;
    },
    active(e, item) {
      const show = this.$refs.collapse.querySelector(".menu-submenu.show");
      console.log(show);
      show && show.previousSibling.click();
      this.activeID = item.id;
    },
  },
  created() {
    const sideItems = this.sideCollapse || [];
    sideItems.forEach((item) =>
      item.map((coll) => (coll.id = (Math.random() * 10e10) | 0))
    );
    this.sideItems = sideItems;
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    this.resize();
  },
};
</script>
