import { viteMockServe } from '@micro-web/vite-plugin-mock'

import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
        logger: true,
      }),
    ],
  }
}
