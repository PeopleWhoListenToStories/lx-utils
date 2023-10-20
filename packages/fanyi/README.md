# 记录

```shell
pnpm init
pnpm add typescript rollup @rollup/plugin-typescript @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-terser rollup-plugin-peer-deps-external -D
npx run tsc --init
mkdir src
mkdir src/index.ts
echo 'export {}' >> src/index.ts

```

> 注：基本配置不再过多赘述，@rollup/plugin-commonjs 为 ES6 转换插件，@rollup/plugin-node-resolve 为 Node 模块解析插件，rollup-plugin-terse 为代码压缩插件，rollup-plugin-peer-deps-external 为打包时使用外部库插件（就是说，打包的时候不把依赖库打包进去，node_modules 依赖链你也知道）。
