import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'//import that allows app to make http requests to api
import { Observable } from 'rxjs';//imports observable, handles asynchronous data from apis

//@injectable means it can be injected into other parts of the app
@Injectable({
  providedIn: 'root',
})
  //dataservice class handles api rquests
export class DataService {
  //constructor injects httpclient so it can be used to call api
  constructor(private httpClient:HttpClient){ }

  //method to get student data from online json api
  GetStudentData():Observable<any>{
    //gets data from api and returns it as observable
    return this.httpClient.get('https://api.jsonblob.com/019cadd4-39a3-7297-a08d-17dc18b8e4f4');

  }

//method to retrieve weather data from the OpenWeatherMap api
  GetWeatherData():Observable<any>{
    //gets weather data for galway from api and returns it as observable
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');

  }
}

