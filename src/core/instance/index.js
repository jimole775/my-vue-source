import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue就是整个框架的主体
// 使用构造函数而不是class，因为函数在使用mixin拼合时更直观一点
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options) // 在initMixin中定义
}

initMixin(Vue) // 定义 _init 方法，这个就是new Vue的入口
stateMixin(Vue) // 定义 $watch，用于手动启用watch属性，生成Watcher实例
eventsMixin(Vue) // 定义 监听事件，$on, $off, $emit, $once
lifecycleMixin(Vue) // 定义 生命周期有关的方法 $forceUpdate 和 $destory
renderMixin(Vue) // 定义 $createElement

export default Vue
