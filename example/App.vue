<template>
  <div id="app">
    <div class="default btn" ref="default" @click="defaultt">default</div>
    <div class="info btn" ref="info" @click="info">info</div>
    <div class="success btn" ref="success" @click="success">success</div>
    <div class="warning btn" ref="warning" @click="warning">warning</div>
    <div class="error btn" ref="error" @click="error">error</div>
  </div>
</template>

<script>
  export default {
    name: 'app',

    methods: {
      defaultt () {
        this.$toast(this.$refs.default, 'Default', '')
      },

      info () {
        this.$toast(this.$refs.info, 'Information!', 'info')
      },

      success () {
        this.$toast(this.$refs.success, 'Wonderful!', 'success')
      },

      warning () {
        this.$toast(this.$refs.warning, 'Attention!', 'warning')
      },

      error () {
        this.$toast(this.$refs.error, 'Oops!', 'error')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    color: #fff;
  }

  .btn {
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 10px auto 50px;
  }

  .default.btn {
    background-color: #000
  }

  .success.btn {
    background-color: #47d279;
  }

  .warning.btn {
    background-color: #ffb243;
  }

  .info.btn {
    background-color: #48BBF8;
  }

  .error.btn {
    background-color: #ff6464;
  }
</style>
