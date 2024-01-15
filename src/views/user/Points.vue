<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary">
            <img src="../../theme/assets/svg/menu-duo-md.svg">
          </ion-menu-button>
        </ion-buttons>
        <ion-title style="font-size: 26px;">Loyalty Points</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col size="2">
              <img style="scale: 3; margin-left: 12px;" alt="Profile" src="../../theme//assets/svg/crown.svg" />
            </ion-col>
            <ion-col>
              <b>{{ `${user.tier} Tier` }}</b>
            </ion-col>
            <ion-col>
              <div className="ion-float-end">
                <ion-button size="small" fill="clear" color="#D71921" style="font-weight: 600; margin-top: -3px;">
                  View all <img style="padding-left: 12px;" alt="Profile" src="../../theme/assets/svg/arrow-right.svg" />
                </ion-button>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
        <p>Earn points by purchasing from our store. The more points you earn, the higher your tier!</p>
        <div style="margin: 30px 50px;">
          <apexchart width="100%" type="donut" :options="options" :series="series"></apexchart>
        </div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <h3 style="font-weight: 600;">Rewards</h3>
            </ion-col>
            <ion-col>
              <div className="ion-float-end">
                <ion-button size="small" fill="clear" color="#D71921" style="font-weight: 600; margin-top: 18px;">
                  How it works <img style="padding-left: 12px;" alt="Profile"
                    src="../../theme/assets/svg/arrow-right.svg" />
                </ion-button>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid class="ion-no-padding">
          <ion-row class="ion-no-padding">
            <ion-col class="ion-no-padding" size="2">
              <ion-button size="medium" expand="block" :color="selected === 'all' ? 'primary' : 'light'"
                @click="selected = 'all'">All</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding" size="4">
              <ion-button size="medium" expand="block" :color="selected === 'beginner' ? 'primary' : 'light'"
                @click="selected = 'beginner'">Beginner</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding" size="4">
              <ion-button size="medium" expand="block" :color="selected === 'intermediate' ? 'primary' : 'light'"
                @click="selected = 'intermediate'">Intermediate</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding" size="2">
              <ion-button size="medium" expand="block" :color="selected === 'loyal' ? 'primary' : 'light'"
                @click="selected = 'loyal'">Loyal</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-card v-for="row in user.rewards[selected]?.data" color="light" style="box-shadow: none !important;">
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col size="4">
                  <img style="border-radius: 10px;" :src="`../../../public/items/${row.id}.png`">
                </ion-col>
                <ion-col>
                  <ion-row>
                    <b>{{ row.name }}</b>
                  </ion-row>
                  <ion-row>
                    {{ row.category }}
                  </ion-row>
                  <ion-row>
                    <img style="scale: 1; margin-right: 12px;" alt="Profile"
                      src="../../theme//assets/svg/crown.svg" /><ion-label color="primary"><b>{{ `${row.points} points`
                      }}</b></ion-label>
                  </ion-row>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </div>
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <!-- 
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components ddfgsdfg</a></p>
      </div> -->
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
let selected = ref('all');
const user = {
  id: 1,
  name: 'Dan Ibañez',
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
const series = [(160 - user.points), user.points]
</script>

<style scoped>
#container {
  padding: 12px 12px 0;
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
</style>
