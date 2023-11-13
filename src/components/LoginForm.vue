<template>
    <form action="" class="login-form" @submit.prevent="handleSubmit">
        <label for="username">用户名</label>
        <input type="text" name="username" id="username" />
        <div>
            <label for="password">密码</label>
            <router-link to="/password_reset">忘记密码？</router-link>
        </div>
        <input type="password" name="password" id="password" />
        <input type="submit" id="submit" value="登 录" />
    </form>
</template>

<script lang="ts">
export default {
    methods: {
        handleSubmit() {
            // TODO
        }
    }
};
</script>

<style scoped>
form {
    text-align: left;
}

.login-form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #d0d7de;
    border-radius: 16px;
    background-color: #f6f8fa;
    width: 274px;
}

.login-form label {
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 21px;
}

input {
    padding: 5px 12px;
    margin-top: 4px;
    margin-bottom: 16px;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    line-height: 20px;
}

input:focus {
    border-color: #0969da;
    outline: none;
    box-shadow: inset 0 0 0 1px #0969da;
}

#submit {
    padding: 5px 12px;
    background-color: #2da44e;
    border: 1px solid #2a9147;
    border-radius: 6px;
    color: #ffffff;
    cursor: pointer;
    line-height: 20px;
    font-weight: 500;
}

div a {
    float: right;
    color: #0969da;
    font-weight: 400;
    text-decoration: none;
}

div a:hover {
    text-decoration: underline;
}
</style>
