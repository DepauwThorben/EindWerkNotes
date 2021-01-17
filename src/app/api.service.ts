import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
     return this.http.get('https://backend-thorben.glitch.me/users');   
    
  }


  
  AddUser = (name:string) => {
     let nameEncoded=encodeURIComponent(name);
    let URI1= encodeURI('https://backend-thorben.glitch.me/add?name=')+nameEncoded;
    return this.http.get(URI1);


  }

  AddNote = (name:string, note:string ,categorie:string) => {
    
    
    
    
    let URI2=encodeURI('https://backend-thorben.glitch.me/addnote?name=');
    let nameEncoded=encodeURIComponent(name);
    console.log("naam: "+nameEncoded);

    let URI3=encodeURI('&content=');
    let noteEncoded=encodeURIComponent(note);
    console.log("NoteEncoded: "+noteEncoded);

    let URI4 = encodeURI('&categorie=');
    let categorieEncoded = encodeURIComponent(categorie);
    let encodedUri=URI2 + nameEncoded + URI3 + noteEncoded + URI4 + categorieEncoded;
    console.log(encodedUri)
    return this.http.get(encodedUri);

   }

  DeleteUser = (name:string) => {
    let nameEncoded=encodeURIComponent(name);
    let encodedUri= encodeURI('https://backend-thorben.glitch.me/remove?name=')+nameEncoded;
    return this.http.get(encodedUri);
    

  }

  GetNotes = (name:string) => {

    let nameEncoded=encodeURIComponent(name);
    let encodedUri= encodeURI('https://backend-thorben.glitch.me/notes?name=')+nameEncoded;
    return this.http.get(encodedUri);

  }

  DeleteNote = (id) => {
    let idEncoded=encodeURIComponent(id);
    let encodedUri= encodeURI('https://backend-thorben.glitch.me/removeNote?id=')+idEncoded;
    return this.http.get(encodedUri);
    

  }

  EditNote = (id,content:string,categorie:string) =>
  {
    let URI5=encodeURI('https://backend-thorben.glitch.me/editNote?id=');
    let idEncoded=encodeURIComponent(id);
    console.log("id: "+idEncoded);

    let URI6=encodeURI('&content=');
    let contentEncoded=encodeURIComponent(content);
    console.log("NoteEncoded: "+contentEncoded);

    let URI7 = encodeURI('&categorie=');
    let categorieEncoded = encodeURIComponent(categorie);
    let encodedUri=URI5 + idEncoded + URI6 + contentEncoded + URI7 + categorieEncoded;
    console.log(encodedUri)
    return this.http.get(encodedUri);
  }

  SearchNote(userid,content:string,categorie:string)
  {

    let idEncoded=encodeURIComponent(userid);
    let URI8=encodeURI('https://backend-thorben.glitch.me/zoekNote?userId=') + idEncoded;
    

    if( content != null){
      
      let contentEncoded=encodeURIComponent(content);
      URI8 +=encodeURI('&content=') + contentEncoded;
    
    }
   

   
    let categorieEncoded = encodeURIComponent(categorie);
     URI8 += encodeURI('&categorie=') + categorieEncoded;
     
    

    let encodedUri= URI8;
    console.log(encodedUri)
    return this.http.get(encodedUri);
  }
}
