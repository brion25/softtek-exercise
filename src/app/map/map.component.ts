import { Component, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, marker } from 'leaflet';

import { User } from '../types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() user: User;

  options: any;
  showMap = false;
  lat: number;
  lng: number;

  constructor() {}

  ngOnInit() {
    this.lat = +this.user.location.coordinates.latitude;
    this.lng = +this.user.location.coordinates.longitude;

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        marker([this.lat, this.lng])
      ],
      zoom: 5,
      center: latLng({ lat: this.lat, lng: this.lng })
    };

    this.showMap = true;
  }
}
