import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode, ThemePalette, throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-Events',
  templateUrl: './Events.component.html',
  styleUrls: ['./Events.component.css']
})
export class EventsComponent implements OnInit {

  items = [
    {
      "title": "Music Festival",
      "subtitle": "EDM fest",
      "imgURL": "https://wallpaperaccess.com/full/3990902.jpg",
      "content": ""
    },
    {
      "title": "Food Fiesta",
      "subtitle": "Unlimited buffet",
      "imgURL": "https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2018/05/Blog-1030x538.png",
      "content": ""
    },
    {
      "title": "Gaming Corner",
      "subtitle": "Refresh yourself with Games",
      "imgURL": "https://www.teknosassociates.com/wp-content/uploads/2020/03/teknos-associates-gamers-make-money-image001.jpg",
      "content": ""
    },
    {
      "title": "Hackathon",
      "subtitle": "Job Fair",
      "imgURL": "https://studentportal.vnit.ac.in/static/IMAGES/vnitnet_hackathon.png",
      "content": ""
    }
  ];

  sleepTimer = (ms: number) => new Promise(r => setTimeout(r, ms));
  // color: ThemePalette = 'primary';
  // mode: ProgressSpinnerMode = 'determinate';
  // progressValue: number = 40;

  isLoading: boolean = true;

  constructor() { }

  async ngOnInit() {
    this.items.forEach(element => {
      element.content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem illum quas, quos, quis perspiciatis velit doloremque, molestias ducimus reiciendis facere repudiandae suscipit fuga. Eveniet maiores ex architecto cum, aliquid quis!"
    });
    await this.sleepTimer(1100);
    this.isLoading = false;
  }


  // sleepTimer(): void{
  //   for (let i=0; i<50000; i++){
  //     for (let j=i; j<50000; j++){}
  //     if (i%1000 == 0){
  //       console.log(i/100);
  //     }
  //   }
  // }

}
