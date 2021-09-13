import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 初始化vue的所有属性
stateMixin(Vue) // 定义$watch，用于手动启用watch属性，生成Watcher实例
eventsMixin(Vue) // 绑定监听事件，$on, $off, $emit, $once
lifecycleMixin(Vue) // 
renderMixin(Vue) // 

export default Vue
