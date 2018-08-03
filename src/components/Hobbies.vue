<template>
  <div id="app">
<div class="container">
 	<h2>Хобби и увлечения:</h2>	
					<ul>
						<li>киберспорт (участник онлайн и LAN турниров по CS 1.6, Warcraft 3 TFT, Dota, Hearthstone) </li>
						<li>волейбол </li>
						<li>мифология </li>
						<li>интеллектуальные игры ("Своя игра", "Что? Где? Когда?", "Мозгобойня") </li>
					</ul>		

 <hr>
 <button class="btn btn-danger" @click="$emit('onHobbies')">
			Узнать больше
		</button>
	 </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
