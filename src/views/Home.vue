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
              <ion-button size="small" expand="block" fill="clear" color="dark" style="font-weight: 600;"
                @click="() => $router.push(`/user/${user.id}/points`)">
                <img style="scale: 1.4; margin-right: 16px;" alt="Profile"
                  src="../theme/assets/svg/crown.svg" />{{ user.points }} Points <img style="padding-left: 12px;"
                  alt="Profile" src="../theme/assets/svg/arrow-right.svg" />
              </ion-button>
            </ion-col>
            <ion-col size="2" class="ion-no-padding">
              <ion-avatar class="profile">
                <img alt="Profile" :src="`../public/profilePictures/${user.id}.jpg`" />
              </ion-avatar>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col size="3">
              <img style="scale: 1; margin-right: 12px;" alt="Profile" src="../../resources/logo.png" />
            </ion-col>
            <ion-col>
              <p>Annyeong, {{ user.name }}</p>
              <h1 style="margin-top: 0;">What do you want to eat?</h1>
            </ion-col>
          </ion-row>
        </ion-grid>
        <div style="border: solid 1px #CDCDCD; border-radius: 14px; padding: 6px 20px; background-color: #F8F9FA;">
          <ion-row>
            <ion-col size="1">
              <img style="margin-top: 16px; scale: 1.5;" src="../theme/assets/svg/search.svg">
            </ion-col>
            <ion-col>
              <ion-input fill="solid" :placeholder="`Try our new ${newItem}`"></ion-input>
            </ion-col>
          </ion-row>
        </div>

        <ion-grid>
          <ion-row>
            <ion-col>
              <h3 style="font-weight: 600;">Special Offers!</h3>
            </ion-col>
            <ion-col>
              <div className="ion-float-end">
                <ion-button size="small" fill="clear" color="#D71921" style="font-weight: 600; margin-top: 18px;">
                  View All <img style="padding-left: 12px;" alt="Profile" src="../theme/assets/svg/arrow-right.svg" />
                </ion-button>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
        <div class="vouchers">
          <img v-for=" voucher in vouchers" alt="voucher" :src="`../../public/vouchers/${voucher.id}.png`"
            :key="voucher.id" />
        </div>

        <ion-grid>
          <ion-row>
            <ion-col>
              <h3 style="font-weight: 600;">Categories</h3>
            </ion-col>
          </ion-row>
        </ion-grid>
        <div class="categories">
          <div v-for=" category in categories"
            :style="`position: relative; padding: 12px; height: 250px; width: 200px; border-radius: 20px; margin-left: 6px;  background-image: url('../../public/categories/${category.id}.png')`"
            alt="voucher" :src="`../../public/categories/${category.id}.png`" :key="category.id">
            <div style="width: 200px; margin-top: auto;"></div>
            <div style="position: absolute; bottom: 12px;">
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-label style="color: white;">{{ category.name }}</ion-label>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <ion-label style="color: rgb(189, 189, 189);">{{ `${category.total} Recipes` }}</ion-label>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          </div>
        </div>

        <ion-grid>
          <ion-row>
            <ion-col>
              <h3 style="font-weight: 600;">What's New</h3>
            </ion-col>
          </ion-row>
        </ion-grid>
        <img style="width: 100%;" alt="voucher" :src="`../../public/new/1.png`" />

        <ion-grid>
          <ion-row>
            <ion-col>
              <h3 style="font-weight: 600;">Most Popular</h3>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid>
          <ion-row class="ion-no-padding">
            <ion-col v-for="popular in popularList" size="6">
              <ion-nav-link router-direction="forward" :component="preview"></ion-nav-link>
              <ion-card color="light" style="box-shadow: none !important;"
                @click="() => $router.push(`/items/${popular.id}`)">
                <ion-card-content>
                  <img style="border-radius: 10px; width: calc(50vw); height: calc(30vw);"
                    :src="`../../public/items/${popular.id}.png`">
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
      <div class="float">
        <ion-button style="font-weight: 600;" @click="() => $router.push(`/items`)">Order Now</ion-button>
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
  name: 'Dan',
  mobileNumber: '+639851712329',
  points: 100,
  tier: 'Beginner',

  notifications: [
    {
      id: 1,
      message: 'Payment successful'
    },
    {
      id: 2,
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
  rewards: {
    all: {
      data: [
        {
          id: 1,
          name: 'Steak Fries Vegies',
          category: 'Meat',
          points: 100
        }
      ]
    },
    beginer: {
      data: []
    },
    intermediate: {
      data: []
    },
    loyal: {
      data: []
    }
  }
}
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

.vouchers {
  width: calc(100vw - 24px);
  height: 100px;
  display: flex;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.categories {
  width: calc(100vw - 24px);
  height: 250px;
  display: flex;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.float {
  position: fixed;
  bottom: 20px;
  right: 20px;
}</style>
