import Vue from 'vue'

const nameList = {};
const commonComponents = require.context('./', false, /\.vue$/);

commonComponents.keys().forEach((filename) => {
  const name = filename.replace(/.\/|.vue/g, '');
  nameList[name] = commonComponents(filename);
});

Object.keys(nameList).forEach(componentName => {
  // 全局注册组件
  Vue.component(
    componentName,
    nameList[componentName].default,
  )
})
