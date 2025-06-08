<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="caretBack"></ion-back-button>
        </ion-buttons>
        <ion-grid class="ion-no-padding">
          <ion-row class="ion-no-padding">
            <ion-col class="ion-no-padding">
              <ion-title style="font-size: 26px;">{{ item?.name }}</ion-title>
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
        <ion-card color="light" style="box-shadow: none !important;">
          <ion-card-content class="ion-text-center">
            <img style="border-radius: 10px; height: calc(20vh);" :src="`../../public/items/${item?.id}.png`">
          </ion-card-content>
        </ion-card>
        <h3 style="font-weight: 600; height: 40px; margin: 0;">{{ item.name }}</h3>
        <h3 style="font-weight: 600; color: #FFC02E; margin: 0;">{{ item.rating }}</h3>
        <p>{{ item.description }}</p>
        <ion-grid>
          <ion-row>
            <ion-col size="3">
              <h3 style="font-weight: 600; color: #D71921;">P{{ item.price }}</h3>
            </ion-col>
            <ion-col>
              <div className="ion-float-end">
                <ion-button :disabled="count <=0" size="medium" color="light" @click="() => count -= 1">-</ion-button> <span
                  style="margin: 12px;"><b>{{ count }}</b></span><ion-button size="medium" color="light"
                  @click="() => count += 1">+</ion-button>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
        <h3 style="font-weight: 600;">Beverages</h3>
        <ion-item>
          <ion-select label="Choose Beverages" placeholder="Favorite Fruit">
            <ion-select-option value="apple">Coke</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-grid style="padding-top: 24px;">
          <ion-row class="ion-no-padding">
            <ion-col class="ion-no-padding" size="4">
              <ion-button size="medium" expand="block" :color="size === 'Regular' ? 'warning' : 'light'"
                @click="size = 'Regular'">Regular</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding" size="4">
              <ion-button size="medium" expand="block" :color="size === 'Large' ? 'warning' : 'light'"
                @click="size = 'Large'">Large</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding" size="4">
              <ion-button size="medium" expand="block" :color="size === 'X-Large' ? 'warning' : 'light'"
                @click="size = 'X-Large'">X-Large</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>

        <h3 style="font-weight: 600;">Add-Ons</h3>
        <ion-card v-for="addon in addons" color="light" style="box-shadow: none !important;">
          <ion-card-content class="ion-text-center" style="padding: 0;">
            <ion-grid>
              <ion-row class="ion-no-padding">
                <ion-col class="ion-no-padding" size="3">
                  <img style="border-radius: 10px; height: 100px; width: 100px;"
                    :src="`../../public/addons/${addon.id}.png`">
                </ion-col>
                <ion-col>
                  <ion-row>
                    <h3 style="font-weight: 600; height: 30px; margin: 0;">{{ addon.name }}</h3>
                  </ion-row>
                  <ion-row>
                    <p style="margin: 0;">{{ addon.type }}</p>
                  </ion-row>
                  <ion-row>
                    <ion-row>
                      <ion-col size="4">
                        <h3 className="ion-float-start" style="font-weight: 600; color: #D71921;">P{{ addon.price }}</h3>
                      </ion-col>
                      <ion-col size="8">
                        <div className="ion-float-end" style="display: flex; margin-left: 100px;">
                          <ion-button size="small" color="primary">-</ion-button> <span style="margin: 10px;"><b>{{ 0
                          }}</b></span><ion-button size="small" color="primary">+</ion-button>
                        </div>
                      </ion-col>
                    </ion-row>
                  </ion-row>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <div class="float">
          <ion-button expand="block" style="font-weight: 600;" @click="() => setOpen(true)">Add to Bag</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const count = ref(1)
const size = ref('Regular')
const isOpen = ref(false);
const id = ref(route.params.id)
const setOpen = (open) => (isOpen.value = open);

const addons = [
  {
    id: 1,
    name: 'Tomato Souce',
    type: 'Souce',
    price: 49
  },
  {
    id: 2,
    name: 'White Rice',
    type: 'Rice',
    price: 25
  },
]

const popularList = [
  {
    id: 1,
    name: 'Steak Fries Veggies',
    category: 'Meat',
    price: 175,
    rating: 5,
    description: 'Steak Fries Veggies is a tasty dish featuring seasoned, thick-cut steak fries paired with a mix of roasted or sautéed vegetables for a satisfying and flavorful meal.'
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

const item = computed(() => {
  return popularList.find((v) => v.id === id || 1)
})

</script>

<style scoped>
#container {
  padding: 12px 12px 70px;
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
  bottom: 0;
  right: 0;
  padding: 20px;
  z-index: 1;
  width: 100%;
}</style>
