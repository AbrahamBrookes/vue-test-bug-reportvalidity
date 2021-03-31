<template>
    <form @submit.prevent="formSubmit" ref="form" data-testid="form">
        <b-form-input
            :required="true"
            v-model="name"
            data-testid="name-input"
        />
        <input type="submit" />
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){ return {
        name: ''
    }},
    methods: {
        ...mapActions({
            store: 'Test/store'
        }),
        formSubmit(){
            if(this.$refs.form.reportValidity())
            this.doSubmit()
        },
        doSubmit(){
            this.store()
        }
    }
}
</script>
