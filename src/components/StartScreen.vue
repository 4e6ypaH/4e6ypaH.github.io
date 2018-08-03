<template>
  <div class="app">
		<h2>Привет, {{ name }}</h2>		
		<div>Введи свое имя:</div>
		<input 	type="text"
				v-bind:value= "name" 
				v-on:input= "name = $event.target.value"
				>

		<hr>	
		<div>Если хочешь получить информацию обо мне, нажимай кнопку!</div>   
    <button class="btn btn-danger" @click="$emit('onStart')">
      Узнать больше
    </button>

  </div>
</template>

<script>
export default {
	data() {
		return {
			name: ""
		}
	},	
	methods: {
		some() {
			alert(1);
		}
	}
};
</script>

<style scoped>
.btn, input {
	margin: 10px 0;
}

</style>
