<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="push">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-grid>
              <ion-row>
                <ion-col size="3">
                  <ion-avatar class="profile">
                    <img :size="70" alt="Profile" :src="`../public/profilePictures/${user.id}.jpg`" />
                  </ion-avatar>
                </ion-col>
                <ion-col>
                  <ion-menu-toggle>
                    <ion-button expand="block" fill="clear" color="dark" style="font-weight: 600;"
                      @click="() => { $router.push(`/user/${user.id}/points`), selectedIndex = null }">
                      <img style="scale: 1.4; margin-right: 16px;" alt="Profile"
                        src="./theme/assets/svg/crown.svg" />{{ user.points }} Points <img style="padding-left: 12px;"
                        alt="Profile" src="./theme/assets/svg/arrow-right.svg" />
                    </ion-button>
                  </ion-menu-toggle>
                </ion-col>
              </ion-row>
            </ion-grid>
            <ion-list-header>{{ user.name }}</ion-list-header>
            <ion-note style="font-weight: 300;">{{ user.mobileNumber }}</ion-note>
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none"
                :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon :style="selectedIndex === i ? 'color: #D71921; scale:0.8;' : 'color: #B2B5B8; scale:0.8;'"
                  aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label style="font-weight: 600;" color="dark">{{ p.title }}</ion-label>
                <ion-badge v-if="p.title === 'Notifications'" color="warning" style="color: white;">{{
                  user.notifications?.length }}</ion-badge>
              </ion-item>
            </ion-menu-toggle>
            <div style="height: 1px; background-color: #B2B5B8; margin: 12px;" />
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPagesOther" :key="i">
              <ion-item @click="selectedIndex = i + 5" router-direction="root" :router-link="p.url" lines="none"
                :detail="false" class="hydrated" :class="{ selected: selectedIndex === i + 5 }">
                <ion-icon style="color: #B2B5B8; scale:0.8;" aria-hidden="true" slot="start" :ios="p.iosIcon"
                  :md="p.mdIcon"></ion-icon>
                <ion-label style="font-weight: 600;" color="dark">{{ p.title }}</ion-label>
                <ion-badge v-if="p.title === 'My Orders'" color="warning" style="color: white;">{{ user.orders?.length
                }}</ion-badge>
              </ion-item>
            </ion-menu-toggle>
            <ion-button expand="block" style="margin: 18px;">Logout</ion-button>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { ref } from 'vue';
import {
  fastFood,
  notifications,
  storefront,
  helpCircle,
  home,
  listSharp,
  person,
  heart,
  locate,
  book
} from 'ionicons/icons';

const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: home,
    mdIcon: home,
  },
  {
    title: 'Order Now!',
    url: '/items',
    iosIcon: fastFood,
    mdIcon: fastFood,
  },
  {
    title: 'Notifications',
    url: '/notifications',
    iosIcon: notifications,
    mdIcon: notifications,
  },
  {
    title: 'Store Locator',
    url: '/locations',
    iosIcon: storefront,
    mdIcon: storefront,
  },
  {
    title: "FAQ's",
    url: '/faq',
    iosIcon: helpCircle,
    mdIcon: helpCircle,
  },
];

const appPagesOther = [
  {
    title: 'My Orders',
    url: '/',
    iosIcon: listSharp,
    mdIcon: listSharp,
  },
  {
    title: 'My Account',
    url: '/',
    iosIcon: person,
    mdIcon: person,
  },
  {
    title: 'My Favorites',
    url: '/',
    iosIcon: heart,
    mdIcon: heart,
  },
  {
    title: 'Order Tracker',
    url: '/',
    iosIcon: locate,
    mdIcon: locate,
  },
  {
    title: 'Order History',
    url: '/',
    iosIcon: book,
    mdIcon: book,
  },
];

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
  ]
}

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.profile {
  width: 72px;
  height: 72px;
  margin-left: 18px;
}</style>
