<template>
<div class="input-group w-25 mx-3">
    <input type="text" class="form-control" v-model="userInput">
    <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="startSearch">Button</button>
    </div>
</div>
</template>

<script>
//import axios from "axios";
export default {
    name: "TheHeader",
    data() {
        return {
            userInput: "",
        };
    },
    methods: {
        startSearch() {
            this.$emit("textChanged", this.userInput)
        }
    },
}
    
</script>

<style>
</style>