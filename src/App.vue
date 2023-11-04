<template>
  <div>
    <h1>Слоти</h1>
    <slot-component>
      <h2>Контент з компоненту ChildComponent</h2>
      <p>Деякий текст з компоненту ChildComponent.</p>
    </slot-component>
    <hr>
    <multi-component>
      <template v-slot:firstName>
        <p>Vlad</p>
      </template>
      <template v-slot:lastName>
        <p>Myhlovets</p>
      </template>
      <template v-slot:age>
        <p>20 year</p>
      </template>
    </multi-component>
    <hr>
    <fall-component>
      <template v-slot:header>
        <h2>Це заголовок</h2>
      </template>
      <template v-slot:default>
        <p>Це вміст компонента.</p>
      </template>
      <template v-slot:footer>
        <p>Це нижній колонтитул компонента.</p>
      </template>
      <template v-slot:str="value">
        <p>{{ value.message }}</p>
      </template>
    </fall-component>
    <hr>
    <modal-window>
      <template v-slot:header="header">
        <p>{{ header.modal }}</p>
      </template>
      <template v-slot:body="body">
        <p>{{ body.modal }}</p>
      </template>
      <template v-slot:footer="footer">
        <p>{{ footer.modal }}</p>
      </template>
    </modal-window>
  </div>
  <hr>
  <div>
    <h1>Міксіни</h1>
    <p>{{ mixinData }}</p>
    <button @click="mixinMethod">Викликати метод з міксіна</button>
    <button @click="anotherMixinMethod">Ще один метод з міксіна</button>
    <hr>
    <div>
      <h2>Реєстраційна форма</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="login">Логін:</label>
          <input type="text" id="login" v-model="formData.login" />
          <span v-if="formErrors.login">{{ formErrors.login }}</span>
        </div>
        <div>
          <label for="email">Електронна пошта:</label>
          <input type="email" id="email" v-model="formData.email" />
          <span v-if="formErrors.email">{{ formErrors.email }}</span>
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="formData.password" />
          <span v-if="formErrors.password">{{ formErrors.password }}</span>
        </div>
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  </div>
  <hr>
  <div>
    <h1>Власні директиви</h1>
    <div>
      <p v-custom-color="'red'">Цей текст буде червоного кольору.</p>
      <p v-custom-color="'#00ff00'">Цей текст буде зеленого кольору.</p>
      <p v-custom-directive="'action1'">Цей текст матиме червоний фон.</p>
      <p v-custom-directive="'action2'">Цей текст буде жирним.</p>
      <p v-custom-directive>Цей текст матиме курсивний шрифт (за замовчуванням).</p>
      <div v-tooltipDirective="'Це тултип! Наведіть мишу, щоб побачити його.'">
        Наведіть мишу, щоб побачити тултип.
      </div>
    </div>
    <div v-draggable>
            Hello,World!
    </div>
  </div>
</template>

<script>
import SlotComponent from "./components/SlotComponent.vue";
import MultiComponent from "./components/MultiComponent.vue";
import FallComponent from "./components/FallbackSlotComponent.vue"
import ModalWindow from "./components/ModalWindow.vue"
import { BaseMixin } from './mixin.js';
import { formValidationMixin } from './ValidationMixin.js'
export default {
  mixins: [BaseMixin, formValidationMixin],
  components: {
    SlotComponent,
    MultiComponent,
    FallComponent,
    ModalWindow
  },
  data() {
    return {
      bool: true,
      timer: null,
      formData: {
        login: '',
        email: '',
        password: '',
      },
    }
  },
  directives: {
    customDirective: {
      mounted(el, binding) {
        const param = binding.value;


        if (param === 'action1') {
          el.style.backgroundColor = 'red';
        } else if (param === 'action2') {
          el.style.fontWeight = 'bold';
        } else {
          el.style.fontStyle = 'italic';
        }
      },
    },
    tooltipDirective: {
      mounted(el, binding) {
        const tooltipText = binding.value;
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'tooltip';
        tooltipElement.textContent = tooltipText;

        el.appendChild(tooltipElement);

        el.addEventListener('mouseover', () => {
          tooltipElement.style.display = 'block';
        });

        el.addEventListener('mouseout', () => {
          tooltipElement.style.display = 'none';
        });
      }
    },
    draggable: {
      mounted(el) {
        el.onmousedown = function (e) {
          el.style.position = "absolute";

          document.body.appendChild(el);
          moveAt(e);

          el.style.zIndex = 1000;

          function moveAt(e) {
            el.style.left = e.pageX - el.offsetWidth / 2 + "px";
            el.style.top = e.pageY - el.offsetHeight / 2 + "px";
          }

          document.onmousemove = function (e) {
            moveAt(e);
          };

          el.onmouseup = function () {
            document.onmousemove = null;
            el.onmouseup = null;
          };
        };

        el.ondragstart = function () {
          return false;
        };
      },
    },
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {

        console.log('Форма успішно відправлена!');
      } else {
        console.log('Форма має помилки. Будь ласка, виправте їх перед відправкою.');
      }
    },
  }
};
</script>
<style></style>