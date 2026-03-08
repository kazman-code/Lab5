//imports
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',//html file
  styleUrl: './app.css'//css file
})
 
export class App implements OnInit{
  //stores student data gotten from api
  students:any[]=[];
  //variable that stores weather data from api
  weatherData: any;
  //injects dataservice so it can be used
  constructor(private dataService:DataService){}
  //runs when component is initialised
  ngOnInit(): void {

      //calls service method to get weather data
    this.dataService.GetStudentData().subscribe((data) => {
      this.students = data.students;//stores student data from api
      console.log(this.students);//prints student data to console
    });

  //calls service method to get weather data
    this.dataService.GetweatherData().subscribe((data) => {
        this.weatherData = data;//stores weather api response
        console.log(this.weatherData);//prints weather data to console

      });



}
}
