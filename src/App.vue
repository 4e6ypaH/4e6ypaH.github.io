<template>
  <div id="app">
  <div class="container alert alert-secondary">

<h1>Резюме</h1>
  <hr>
  <div class="progress">
    <div class="progress-bar bg-info" :style="increaseProgress"></div>
  </div>
  <hr>
      <div class="box">
        <transition name="flip" mode="out-in">  
            <app-start-screen 
                              v-if="state == 'start'"
                              @onStart="onStart"
            ></app-start-screen>
            <app-contacts 
                          v-else-if="state == 'contacts'"
                          @onContacts="onContacts"
            ></app-contacts>  
            <app-skills 
                        v-else-if="state == 'skills'"
                        @onSkills="onSkills"
            ></app-skills>  
            <app-projects 
                          v-else-if="state == 'projects'"
                          @onProjects="onProjects"
            ></app-projects>  
            <app-hobbies 
                          v-else-if="state == 'hobbies'"
                          @onHobbies="onHobbies"
            ></app-hobbies>  
            <app-result-screen v-else-if="state == 'result'"></app-result-screen>  
            <div v-else> Unknown state </div>
          </transition>   
        </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
     state:'start',
     counter: 0
    }
  },
  computed: {
    increaseProgress() {
      return {
        width: this.counter + '%'
      }
    }
  },
  methods: {
    onStart() {
      this.state = 'contacts';
      this.counter += 20
    },
    onContacts() {
      this.state = 'skills';
      this.counter += 20
    },
    onSkills() {
      this.state = 'projects';
      this.counter += 20
    },
    onProjects() {
      this.state = 'hobbies';
      this.counter += 20
    },
    onHobbies() {
      this.state = 'result';
      this.counter += 20
    }
  }
}
</script>

<style scoped>
h1 {
  text-align:center
}
  .container {
    margin-top: 20px;
  }

  .flip-enter {

  }

  .flip-enter-active {
      animation: flipInX 0.8s linear;
  }

  .flip-leave-active {
      animation: flipOutX 0.8s linear;
  }

  @keyframes flipInX {
    from{transform: rotateX(90deg);}
    to{transform: rotateX(0deg);}
  }

  @keyframes flipOutX {
    from{transform: rotateX(0deg);}
    to{transform: rotateX(90deg);}
  }
</style>
