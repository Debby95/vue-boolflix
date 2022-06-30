<template>
    <div class=" bg-dark">
        <div class="navbar mx-3  ">
            <img class="bool-logo" src="../assets/img/logo.png" alt="">
            <div class="input-group w-25 mx-3">
                <input type="text" class="form-control" v-model="userInput">
                <div class="input-group-append">
                    <button class="btn btn-outline-light" type="button" @click="startSearch">Search</button>
                </div>
            </div>
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
    .bool-logo {
        width: 200px;
    }

    .navbar {
        height: 100px;
        width: 100%;
    }
</style>