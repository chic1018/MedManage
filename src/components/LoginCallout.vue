<template>
    <div id="container">
        <span>没有账号？</span>
        <router-link to="/signup">注册</router-link>
    </div>
</template>

<style scoped>
#container {
    padding: 16px 16px;
    text-align: center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
}

div a {
    color: #0969da;
    font-weight: 400;
    text-decoration: none;
}

div a:hover {
    text-decoration: underline;
}
</style>
