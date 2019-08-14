import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://newsapi.org/v2/top-head;omes?lanuage=en&apiKey=d948c11e91b04de9bbcd5bb0065a395c';

  constructor(private httpClient: HttpClient) {}

  public getNews(){
    return this.httpClient.get(`${this.apiURL}`);
}
}