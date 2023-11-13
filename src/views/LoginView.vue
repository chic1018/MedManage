<template>
    <div class="container">
        <h1>医管通</h1>
        <div class="login-form">
            <LoginForm />
        </div>
        <div class="login-callout">
            <LoginCallout />
        </div>
        <nav>
            <router-link to="/site/terms">用户协议</router-link>
            <router-link to="/site/privacy">隐私政策</router-link>
            <router-link to="/about">关于</router-link>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue';
import LoginCallout from '@/components/LoginCallout.vue';

export default defineComponent({
    name: 'LoginView',
    components: {
        LoginForm,
        LoginCallout
    }
});
</script>

<style scoped>
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

.login-callout {
    margin-top: 20px;
}

nav {
    padding: 30px;
}

nav a{
    font-size: 0.75rem;
    padding: 16px;
    color: #0969da;
    font-weight: 400;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}
</style>
