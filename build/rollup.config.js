import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import { name } from '../package.json'

const packageName = `lego-bricks`
const file = type => `dist/${packageName}.${type}.js`

const overrides = {
    compilerOptions: {
        declaration: true
    },
    exclude: [
        "tests/**/*.ts",
        "tests/**/*.tsx"
    ]
}

export { packageName as name, file }
export default {
    input: 'src/index.ts',
    output: {
        name: packageName,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),  //  nodeResolve 解析三方库
        typescript({
            tsconfigOverride: overrides,
        }),
        vue(),
        css({ output: 'bundle.css' })
    ],
    external: [ //  声明排除打包的三方依赖
        'vue',
        'lodash-es'
    ]
}