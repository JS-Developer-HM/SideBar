<template>
  <div
    id="sidebar"
    class="d-flex flex-column"
    :class="{ minbar: toggleIcon, toggle: toggle }"
  >
    <div class="side-header d-flex flex-column">
      <div class="dots d-flex">
        <div
          v-for="color in ['danger', 'warning', 'success']"
          :key="color"
          :class="`bg-${color} rounded-circle`"
        ></div>
      </div>
      <div class="brand d-flex justify-content-between px-2">
        <div class="logo">UI <span class="rounded-circle">5</span></div>
        <div
          class="toggle-icon"
          @click="toggleIcon = !toggleIcon"
          :class="{ active: toggleIcon }"
        >
          <div class="svg-icon">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background:new 0 0 512 512;"
              xml:space="preserve"
            >
              <path
                d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068
			l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
			l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
			c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="form-group search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
          <path
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          />
        </svg>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
    </div>
    <div class="side-content">
      <side-bar-items></side-bar-items>
    </div>
    <div class="side-footer">
      <div class="f-logo"></div>
      <div class="info">
        <span class="title">Tam Tram</span>
        <p>Lead Visual Designer</p>
      </div>
      <span class="f-icon"><i class="fab fa-vuejs"></i></span>
    </div>
  </div>
  <div class="sidebar-toggle" @click="toggle = !toggle">
    <i class="fas fa-bars"></i>
  </div>
</template>
<script>
import SideBarItems from "./SideBarItems.vue";
export default {
  components: { SideBarItems },
  data() {
    return {
      toggleIcon: false,
      toggle: false,
    };
  },
};
</script>
