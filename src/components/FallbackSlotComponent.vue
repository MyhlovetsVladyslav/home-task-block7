<template>
    <div class="fallback-slot-component">
      <div class="header">
        <slot name="header">
          <p>Заголовок за замовчуванням</p>
        </slot>
      </div>
      <div class="content">
        <slot>
          <p>Вміст за замовчуванням</p>
        </slot>
      </div>
      <div class="footer">
        <slot name="footer">
          <p>Нижній колонтитул за замовчуванням</p>
        </slot>
      </div>
      <div>
        <slot name="str" :message="value"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FallbackSlotComponent",
    data() {
      return {
        value: 'Hello World!'
      }
    },
  };
  </script>
  
  <style scoped>
  .fallback-slot-component {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
  }
  
  
  </style>
  