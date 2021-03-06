declare interface GlobalAPI {
  cid: number;
  options: Object;
  config: Config;
  util: Util;

  extend: (options: Object) => Function;
  set: <T>(target: Object | Array<T>, key: string | number, value: T) => T;
  delete: <T>(target: Object| Array<T>, key: string | number) => void;
  nextTick: (fn: Function, context?: Object) => void | Promise<*>;
  use: (plugin: Function | Object) => void;
  mixin: (mixin: Object) => void;
  compile: (template: string) => { render: Function, staticRenderFns: Array<Function> };

  directive: (id: string, def?: Function | Object) => Function | Object | void;
  component: (id: string, def?: Class<Component> | Object) => Class<Component>;
  filter: (id: string, def?: Function) => Function | void;

  // allow dynamic method registration
  [key: string]: any
};

declare interface Util {
  warn: (msg: string, vm: Component) => void;
  extend: (to: Object, _from: ?Object) => Object;
  mergeOptions: (parent: Object, child: Object, vm?: Component) => Object;
  defineReactive: (obj: Object, key: string, val: any, customSetter?: ?Function, shallow?: boolean) => void;
}
