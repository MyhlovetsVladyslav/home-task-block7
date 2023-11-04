<template>
    <div class="slot-component">
        <slot name='firstName'></slot>
        <slot name='lastName'></slot>
        <slot name='age'></slot>
    </div>
</template>
<style scoped>
.slot-component {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
}
</style>
  