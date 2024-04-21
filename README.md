# vite-plugin-kuaikuai

This magical talisman will invisibly help you succeed in all your endeavors. 🤞

## Installation

```
bun install -D @unickhow/vite-plugin-kuaikuai
```
```
pnpm install -D @unickhow/vite-plugin-kuaikuai
```
```
yarn add -D @unickhow/vite-plugin-kuaikuai
```
```
npm install -D @unickhow/vite-plugin-kuaikuai
```

## Usage

```js
// vite.config.js
import Kuaikuai from '@unickhow/vite-plugin-kuaikuai'

export default defineConfig({
  plugins: [
    Kuaikuai()
  ]
})
```

kuai-kuai is not enabled by default. You can customize it using the following parameters:

```ts
interface PluginOptions {
  /**
   * Whether to log when running `vite build`
   *
   * @default false
   */
  onBuild?: boolean
  /**
   * Whether to log when running `vite dev`
   *
   * @default false
   */
  onDev?: boolean
}
```

> "It's better to believe it exists than to believe it doesn't exist."

> "All is well."
