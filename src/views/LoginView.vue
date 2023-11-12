<template>
    <div class="container">
        <h1>医管通</h1>
        <LoginForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue';

export default defineComponent({
    name: 'LoginView',
    components: {
        LoginForm
    }
});
</script>

<style>
.container {
    position: absolute;
    top: 40%;
    left: 50%;
    vertical-align: middle;
    width: 316px;
    height: 240px;
    margin-left: -158px;
    margin-top: -180px;
}

h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.5px;
}
</style>
