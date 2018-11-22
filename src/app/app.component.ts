import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Schedule',
      url: '/schedule',
      icon: 'list'
    },
    {
      title: 'Speakers',
      url: '/speakers',
      icon: 'people'
    },
    {
      title: 'Map',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'About',
      url: '/map',
      icon: 'information-circle'
    },
    {
      title: 'Tutorial',
      url: '/tutorial',
      icon: 'bonfire'
    },
    {
      title: 'Tareas',
      url: '/todos',
      icon: 'list'
    },
    {
      title: 'Tareas Firebase',
      url: '/todos-firebase',
      icon: 'list'
    },
    {
      title: 'Camara',
      url: '/camera',
      icon: 'camera'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
