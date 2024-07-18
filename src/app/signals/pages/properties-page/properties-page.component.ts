import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})

export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  })

  onFieldUpdated(field: keyof User, value: string){
    /* this.user.set(({...this.user(), [field]: value}))

    this.user.update(current => ({
      ...current,
      [field]: value
    })) */

    this.user.update(current => {
      
      switch(field){
        case 'first_name':
          current.first_name = value
          break;
        case 'last_name':
          current.last_name = value
          break;
        case 'email':
          current.email = value
          break;
      }

      return current;
    })
  }

}
