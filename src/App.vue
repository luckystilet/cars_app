<template>
  <div id="app" class="container pt-5">
    <div class="row mb-3">
      <div class="col">
        <h1>Cars Application</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label for="search">Find your car</label>
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="name, model..."
            v-model="search"
            @input="updateSelectedCar"
          >
        </div>

        <hr>

        <ul class="list-group">
          <li
            v-for="(car, idx) in filteredCars"
            :key="idx"
            @click="selectCar(idx)"
            class="list-group-item list-group-item-action pointer"
            :class="{'active': selectedCarIndex === idx}"
          >
            {{car.name}} - {{car.model}}
          </li>
        </ul>
      </div>
      <div class="col-md-8 pt-4">
        <div class="row">
          <div class="col-md-7">
            <h2>{{car.name}}</h2>
            <img
              :src="car.image"
              :alt="car.name + '-' + car.model"
              class="rounded detailed-car-image"
            >
          </div>
          <div class="col-md-5 pt-2">
            <h5>Car details</h5>
            <ul>
              <li>Model - <strong>{{car.model}}</strong></li>
              <li>Year - <strong>{{car.year}}</strong></li>
              <li>Owner - <strong>{{car.owner}}</strong></li>
            </ul>
            <div class="phone-block">
              <transition name="phone">
                <p v-if="show">{{car.phone}}</p>
              </transition>
            </div>
            <button
              class="btn btn-outline-success mr-3 btn-show-hide-phone"
              @click="show=!show"
              v-text="phoneBtnText"
            >
            </button>
            <button class="btn btn-primary" @click="modalVisibility = true">Buy</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row pt-3" v-if="logs.length">
      <div class="col-md-12">
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{
              'list-group-item-secondary': log.type === 'cnl',
              'list-group-item-success': log.type === 'ok'
            }"
            v-for="log in logs"
          >
            {{log.text}} {{log.date | date}}
          </li>
        </ul>
      </div>
    </div>

    <transition name="modal">
      <div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="modalVisibility">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Do you want buy this car?</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="modalVisibility = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5>Current car - <strong>{{car.name}}</strong></h5>
            <ul>
              <li>Model - <strong>{{car.model}}</strong></li>
              <li>Year - <strong>{{car.year}}</strong></li>
              <li>Owner - <strong>{{car.owner}}</strong></li>
            </ul>

          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="cancelOrder"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="newOrder"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
    </transition>
    <transition name="fade">
      <div class="modal-backdrop fade show" v-if="modalVisibility"></div>
    </transition>
  </div>
</template>

<script>
  const car=(name, model, owner, year, phone, image)=>({name, model, owner, year, phone, image})
  const log=(text,type,date= new Date())=>({text, type, date})

  const cars = [
    car('Volkswagen','model_1','owner_1','year_1','phone_1','img/volkswagen.jpg'),
    car('Chevrolet','model_2','owner_2','year_2','phone_2','img/chevrolet.jpg'),
    car('Ford','model_3','owner_3','year_3','phone_3','img/ford.jpg'),
    car('Honda','model_4','owner_4','year_4','phone_4','img/honda.jpg'),
    car('Nissan','model_5','owner_5','year_5','phone_5','img/nissan.jpg'),
    car('Peugeot','model_6','owner_6','year_6','phone_6','img/peugeot.jpg'),
    car('Citroen','model_7','owner_7','year_7','phone_7','img/citroen.jpg'),
    car('Toyota','model_8','owner_8','year_8','phone_8','img/toyota.jpg')
  ]
  export default {
    name: 'app',
    data: ()=>({
      cars,
      car: cars[0],
      logs: [],
      selectedCarIndex: 0,
      show: false,
      search: '',
      modalVisibility: false
    }),
    methods: {
      selectCar(idx){
        this.car = this.cars[idx]
        this.selectedCarIndex = idx
      },
      updateSelectedCar(){
        const res = this.filteredCars.filter((el)=>Object.is(el, this.car))
        if(!res.length){
          this.car = this.filteredCars[0]
          this.selectedCarIndex = 0
        }
        for(const[idx, el] of this.filteredCars.entries()){
          if(Object.is(el, this.car)){
            this.selectedCarIndex = idx
          }
        }
      },
      newOrder(){
        this.modalVisibility = false
        this.logs.push(
          log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
        )
      },
      cancelOrder(){
        this.modalVisibility = false
        this.logs.push(
          log(`Canceled order: ${this.car.name} - ${this.car.model}`, 'cnl')
        )
      }
    },
    computed: {
      phoneBtnText(){
        return this.show ? 'Hide Phone' : 'Show Phone'
      },
      filteredCars(){
        const filtered = this.cars.filter((car)=>{
          return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
        })
        return filtered
      }
    },
    // watch: {
    //   search(text){
    //     const filtered = this.cars.filter((car)=>{
    //       return car.name.indexOf(text) > -1 || car.model.indexOf(text) > -1
    //     })
    //     this.car = filtered[0]
    //     if(filtered.filter((el)=>{Object.is(el, this.car)})){
    //       this.car = filtered[0]
    //     }
    //   }
    // },
    components: {}
  }
</script>


<style>
</style>
