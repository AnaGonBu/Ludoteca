import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pageable } from '../core/model/page/Pageable';
import { Loan } from './model/loan';
import { LoanPage } from './model/loanPage';
;

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(
    private http: HttpClient
) { }

private baseUrl = `${environment.apiUrl}/loan`;
private baseUrlAlta = `${environment.apiUrl}/loan/alta`;


getLoans(pageable: Pageable, game?: number | null, client?: number | null, date?:string): Observable<LoanPage> {
  const body = {
  pageable: pageable,
  game: game ?? null,
  client: client ?? null,
  date: date ?? null
  };
  return this.http.post<LoanPage>(this.baseUrl, body); 
}
getAllLoans(){
  
return this.http.get<Loan[]>(this.baseUrl);

}

// getLoans(pageable: Pageable, gameId?: number, clientId?: number, date?: Date): Observable<LoanPage> {
//   let url = this.baseUrl;
//   const params = [];
//   if (gameId) params.push(`gameId=${gameId}`);
//   if (clientId) params.push(`clientId=${clientId}`);
//   if (date) {
//       // Formatea la fecha a 'yyyy-MM-dd' antes de agregarla como parámetro
//       const formattedDate = this.TypeDate(date);
//       params.push(`date=${formattedDate}`);
//   }
//   if (params.length) url += '?' + params.join('&');
//   return this.http.post<LoanPage>(url, { pageable: pageable });
//TypeDate(date: Date) : string { 
  //const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  //return date.toLocaleDateString('en-CA', options);
//}
// }

saveLoan(loan: Loan): Observable<Loan> {
  

   const loanDto = {

     game: loan.game,
     client: loan.client,
     date1: loan.date1,
     date2: loan.date2
     };
    

      return this.http.post<Loan>(this.baseUrlAlta, loanDto);
    
  }

deleteLoan(idLoan : number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${idLoan}`);
}   

}
