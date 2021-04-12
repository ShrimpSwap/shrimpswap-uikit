# 🦐 ShrimpSwap UIkit

[![Version](https://img.shields.io/npm/v/@shrimpswap/uikit)](https://www.npmjs.com/package/@shrimpswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@shrimpswap/uikit)](https://www.npmjs.com/package/@shrimpswap/uikit)

ShrimpSwap UIkit is a set of React components and hooks used to build pages on ShrimpSwap's apps.

It also contains a theme file for dark and light mode.

## Install

`yarn add @shrimpswap/uikit`

## npm

https://www.npmjs.com/package/@shrimpswap/uikit

## Setup

### Theme

Before using ShrimpSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@shrimpswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@shrimpswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://shrimpswap.github.io/shrimpswap-uikit/)
