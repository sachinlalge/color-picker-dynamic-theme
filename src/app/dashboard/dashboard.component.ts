import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardSamples = [
    {
      title: 'Card 1',
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.'
    },
    {
      title: 'Card 2',
      value: 'Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Fusce nec tellus sed augue semper porta.'
    },
    {
      title: 'Card 3',
      value: 'Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.'
    },
    {
      title: 'Card 4',
      value: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
