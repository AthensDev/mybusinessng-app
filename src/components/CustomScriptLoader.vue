<template>
   <div class="switch-theme-mode">
      <label id="switch" class="switch">
          <input type="checkbox" @change="toggleTheme()" id="slider">
          <span class="slider round"></span>
      </label>
    </div>

</template>
<script>
import customScript from "~/assets/js/main.js";
import darkmodeScript from "~/assets/js/darkmode.js";
import { computed, ref, onMounted, onBeforeMount, nextTick } from 'vue'
export default {
    setup() {
        const doubleRequestAnimationFrame = (callback) => {
            requestAnimationFrame(() => {
                requestAnimationFrame(callback)
            })
        }
        const forceNextTick = (callback) => {
            if (callback && typeof callback === 'function') {
                doubleRequestAnimationFrame(callback)
            } else {
                return new Promise(resolve => {
                    doubleRequestAnimationFrame(resolve)
                })
            }
        }
        return {
            forceNextTick
        }
    },
    mounted() {
        let unsubscribe = null
        unsubscribe = this.$store.subscribe((mutation, state) => {
            if (mutation) {
                nextTick(() => {
                    setTimeout(function() {
                        customScript()
                    }, 1000)
                })
                unsubscribe() // So it only reacts once.
            }
        })
        this.forceNextTick(() => {
            nextTick(() => {
                setTimeout(function() {
                    customScript()
                    // darkmodeScript()
                }, 1000)
            })
        })
    },


    methods: {
      toggleTheme(){
        if (localStorage.getItem("cuex_theme") === "theme-dark") {
              this.setTheme("theme-light");
            } else {
                this.setTheme("theme-dark");
            }
      },

      setTheme(themeName){
         localStorage.setItem("cuex_theme", themeName);
            document.documentElement.className = themeName;
      }
    }

};

</script>
