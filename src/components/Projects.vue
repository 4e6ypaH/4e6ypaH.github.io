<template>
  <div id="app">
<div class="container">
 	<h2>Мои проекты:</h2>
	<p><a target="_blank" class="btn btn-primary" href="https://4e6ypah.github.io/testing/projects/landing1/" role="button">Первый опыт верстки по PSD шаблону </a><br>
		<!--<a class="btn btn-success" href="https://4e6ypah.github.io/testing/projects/test/" role="button">таблицы, фильтры, кнопки </a> -->
		<a target="_blank" class="btn btn-success" href="https://4e6ypah.github.io/go-on" role="button">проект на bootstrap 4 </a><br>
		<a target="_blank" class="btn btn-warning" href="https://4e6ypah.github.io/testing/projects/mailer1/" role="button">мэйлер 1</a>
		<a target="_blank" class="btn btn-info" href="https://4e6ypah.github.io/testing/projects/mailer2/" role="button">мэйлер 2</a>
		<a target="_blank" class="btn btn-dark" href="http://maximtroshkov.ru/testing/projects/profile/" role="button">профиль соцсети</a>
		<a target="_blank" class="btn btn-light" href="http://maximtroshkov.ru/testing/projects/math_trainer/" role="button">проект на Vue</a></p>
 <hr>
 <button class="btn btn-danger" @click="$emit('onProjects')">
			Узнать больше
		</button>
	 </div>
  </div>
</template>

<script>

</script>

<style scoped>
body * {
	text-align:center;
}
.btn {
margin-top: 5px;
margin-right: 5px;
}
</style>
