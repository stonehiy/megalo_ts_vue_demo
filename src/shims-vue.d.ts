import Vue from 'vue'
import 'miniprogram-api-typings'
import '@types/node'


import * as Megalo from '@megalo/api'


declare module '*.vue' {
  export default Vue
}

declare module 'megalo/types/vue' {
  interface Vue {
    $mp: any
  }
}

 // 全局变量设置
declare global {
  const Megalo: typeof Megalo

}
