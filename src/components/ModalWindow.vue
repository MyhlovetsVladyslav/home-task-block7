<template>
    <div>
        <button @click="openModal">Модал</button>
        <div class="modal" v-if="isOpen">
            <div class="modal-content">
                <div class="close" @click="closeModal">&times;</div>
                <div class="modal-content">
                    <slot name='header' :modal="header"></slot>
                    <br>
                    <slot name='body' :modal="body"></slot>
                    <br>
                    <slot name='footer' :modal="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false,

            header: 'header',
            body: 'body',
            footer: 'footer',
        }
    },
    methods: {
        openModal() {
            this.isOpen = !this.isOpen;
        },
        closeModal() {
            this.isOpen = false
        }

    },
}
</script>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}
</style>