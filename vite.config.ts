import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置css预处理器scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/mixin.scss";
          @import "@/styles/variables.scss";
          `,
      },
    },
  },

  server: {
    host: '0.0.0.0'
    //在开发模式下设置了服务器端口的监听地址为“0.0.0.0”，
  }
})
