import { viteMockServe } from '@micro-web/vite-plugin-mock'

import vue from '@vitejs/plugin-vue'

export default ({ command }) => {
  let prodMock = true
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
      }),
    ],
  }
}
