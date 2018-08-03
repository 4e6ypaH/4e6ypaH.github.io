<template>
  <div id="app">
<div class="container">
 		<!--main info-->
        	<h3>Максим Трошков</h3> 
        	<div class="row">
        	<div class="col-2">
       			 <img src="src/img/Maxim_Troshkov.jpg" width="115" class="img" alt="photo">
   			</div> <br>
   			<div class="col-sm-6  offset-sm-2 offset-md-1 offset-lg-0">
   				<address> 
        			Дата рождения: 4.11.89 (28 лет) <br>
        			г. Петрозаводск	<br>
					<i class="fa fa-phone"></i>: +79004643930<br>
					<i class="fa fa-envelope"></i>:
                      <a href="mailto:confusion@food.net">maxim_troshkov@mail.ru</a> <br>					
								
                <div class="btn-group" role="group">
                    <a role="button" class="btn btn-primary" href="tel:+79004643930"><i class="fa fa-phone"> Call</i></a>
                    <a role="button" class="btn btn-info" href="skype:smart22108@mail.ru"><i class="fa fa-skype"> Skype</i></a>
                    <a role="button" class="btn btn-success" href="mailto:maxim_troshkov@mail.ru"><i class="fa fa-envelope-o"> Email</i></a>
                </div>
            </address>
        	</div>  
       </div>
      </div>
		<!--end of main info-->
	<hr>												
       <button class="btn btn-danger" @click="$emit('onContacts')">
			Узнать больше
	   </button>
  </div>
</template>

<script>

</script>

<style scoped>
address {

}
.btn-group {
	margin-top:15px;
}
</style>
