
export const BaseMixin = {
    data() {
        return {
            mixinData: 'Це дані з базового міксіна'
        };
    },
    methods: {
        mixinMethod() {
            console.log('Це метод з базового міксіна');
        },
        anotherMixinMethod() {
            console.log('Це ще один метод з базового міксіна');
        },
    }
};
