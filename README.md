# Vue-Toast-Plugin

[![Build Status](https://travis-ci.org/ihaichao/vue-toast-plugin.svg?branch=master)](https://travis-ci.org/ihaichao/vue-toast-plugin)
[![NPM Version](https://img.shields.io/badge/npm-v1.0.1-blue.svg)](https://www.npmjs.com/package/vue-toast-plugin)

A simple toast plugin for Vue.js.

## Demo

[Demo](https://ihaichao.github.io/vue-toast-plugin)

## Features

- Supports both Vue 1.x and 2.x
- Simple

## Installation

```Bash
npm i vue-toast-plugin
```

## Usage

> Need to use with webpack because css is imported in js for convenient.

index.js

```javascript
import Vue from 'vue'
import Toast from 'vue-toast-plugin'

Vue.use(Toast)
```

App.vue

```javascript
export default {
  methods: {
    success () {
      this.$toast(this.$refs.success, 'Wonderful!', 'success')
    },

    warning () {
      this.$toast(this.$refs.warning, 'Attention!', 'warning', 3000)
    },

    info () {
      this.$toast(this.$refs.info, 'Infomation!', 'info', 1000, 100)
    },

    error () {
      this.$toast(this.$refs.error, 'Opps!', 'error', 2000, 500, 600)
    }
  }
}
```

## Options

|Option|Description|Value|Default|
|---|---|---|---|
|el|target element|||
|text|content of the toast|||
|type|type of the toast|'success' 'warning' 'info' 'error'||
|duration|time before the toast vanishes, in millisecond||4000
|top|the distance between the top of the body and the toast element, in px||right of the target element
|left|the distance between the left of the body and the toast element, in px||bottom of the target element

## License

MIT
