<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary">
            <img src="../theme/assets/svg/menu-duo-md.svg">
          </ion-menu-button>
        </ion-buttons>
        <ion-grid class="ion-no-padding">
          <ion-row class="ion-no-padding">
            <ion-col class="ion-no-padding">
              <ion-title style="font-size: 26px;">Food</ion-title>
            </ion-col>
            <ion-col size="2" class="ion-no-padding">              
              <ion-avatar class="profile">
                <img alt="Profile" src="../theme/assets/svg/shopping-bag.svg" />
              </ion-avatar>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <div style="border: solid 1px #CDCDCD; border-radius: 14px; padding: 6px 20px; background-color: #F8F9FA;">
          <ion-row>
            <ion-col size="1">
              <img style="margin-top: 16px; scale: 1.5;" src="../theme/assets/svg/search.svg">
            </ion-col>
            <ion-col>
              <ion-input fill="solid" :placeholder="`Try our new ${newItem}`"></ion-input>
            </ion-col>
            <ion-col size="1">
              <img style="margin-top: 16px; scale: 1.5;" src="../theme/assets/svg/filter.svg">
            </ion-col>
          </ion-row>
        </div>

        <ion-grid style="padding-top: 24px;">
          <ion-row class="ion-no-padding">
            <ion-col class="ion-no-padding" size="3">
              <ion-button size="medium" expand="block" :color="selected === 'all' ? 'primary':'light'" @click="selected = 'all'">All</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding" size="3">
              <ion-button size="medium" expand="block" :color="selected === 'Meat' ? 'primary':'light'" @click="selected = 'Meat'">Meat</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding" size="3">
              <ion-button size="medium" expand="block" :color="selected === 'Chicken' ? 'primary':'light'" @click="selected = 'Chicken'">Chicken</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding" size="3">
              <ion-button size="medium" expand="block" :color="selected === 'Seafood' ? 'primary':'light'" @click="selected = 'Seafood'">Seafood</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid>
          <ion-row class="ion-no-padding">
            <ion-col v-for="popular in popularList" size="6">
              <ion-nav-link router-direction="forward" :component="preview"></ion-nav-link>
              <ion-card color="light" style="box-shadow: none !important;" @click="() => $router.push(`/items/${popular.id}`)">
                <ion-card-content>
                  <img style="border-radius: 10px; width: calc(50vw); height: calc(30vw);" :src="`../../public/items/${popular.id}.png`">
                  <h3 style="font-weight: 600; height: 40px;">{{ popular.name }}</h3>
                  <p>{{ popular.category }}</p>
                  <ion-row class="ion-no-padding">
                    <ion-col>
                      <h3 style="font-weight: 600; color: #D71921;">P{{ popular.price }}</h3>
                    </ion-col>
                    <ion-col>
                      <h3 className="ion-float-end" style="font-weight: 600; color: #FFC02E;">{{ popular.rating }}</h3>
                    </ion-col>
                  </ion-row>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

import preview from './preview.vue';

let selected = ref('all');
const newItem = 'Steak Fries Veggies'

const vouchers = [
  {
    id: 1,
  },
  {
    id: 2,
  }
]

const categories = [
  {
    id: 1,
    name: 'Chicken',
    total: 9
  },
  {
    id: 2,
    name: 'Meat',
    total: 3
  },
  {
    id: 3,
    name: 'Seafood',
    total: 6
  },
]

const popularList = [
  {
    id: 1,
    name: 'Steak Fries Veggies',
    category: 'Meat',
    price: 175,
    rating: 5
  },
  {
    id: 2,
    name: 'Chicken Salad',
    category: 'Chicken',
    price: 172,
    rating: 4.6
  },
  {
    id: 3,
    name: 'Fried Chicken',
    category: 'Chicken',
    price: 150,
    rating: 4.9
  },
  {
    id: 4,
    name: 'Tempura',
    category: 'Seafood',
    price: 160,
    rating: 4.9
  },
]

const user = {
  id: 1,
  name:'Dan',
  mobileNumber: '+639851712329',
  points: 100,
  tier: 'Beginner',

  notifications: [
    {
        id:1,
        message: 'Payment successful'
      },  
    {
        id:2,
        message: 'Your order was successfully placed'
      }
    ],

  orders: [
    {
      id: 1,
      name: 'C2',
      description: '1pc chicken with rice'
    }
  ],
  rewards:{
  all:{
      data:[
        {
          id: 1,
          name: 'Steak Fries Vegies',
          category: 'Meat',
          points: 100
        }
      ]
    },
    beginer:{
      data:[]
    },
    intermediate:{
      data:[]
    },
    loyal:{
      data:[]
    }
  }
}

const options = {
          chart: {
          type: 'donut',
        },
        legend: {
          show: false,
        },
        colors: ['#F7D1D3', '#D71921'],
        stroke: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: false,
                },
                total: {
                  show: true,
                  fontFamily: 'Segoe UI',
                  fontSize: '16px',
                  label: '',
                  fontWeight: 400,
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return `${b}/${160}`
                    })
                  },
                },
                value: {
                  fontSize: '16px',
                  color: '#000',
                  fontWeight: 400,
                  offsetY: 5,
                },
              },
            },
          },
        },
      }
const series = [(160 - user.points),user.points]
</script>

<style scoped>
#container {
  padding: 12px 12px 0;
  position: relative;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-toolbar {
    --background: white;

    --border-color: transparent;
    --border-width: 0 0;

    --min-height: 80px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }
  .profile {
  width: 40px;
  height: 40px;
}

.vouchers{
  width: calc(100vw - 24px);
  height: 100px;
  display: flex;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

.categories{
  width: calc(100vw - 24px);
  height: 250px;
  display: flex;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
