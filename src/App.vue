<template>
	<div id="app">
		<test-form/>
	</div>
</template>

<script>
import TestForm from './components/TestForm.vue'

export default {
	components: {
		TestForm
	},
	data(){ return {
		name: ''
	}},
	methods: {
		formSubmit(){
			if(this.$refs.form.reportValidity())
				this.doSubmit()
		},
		doSubmit(){
			console.log("doingSubmit")
			return false
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
