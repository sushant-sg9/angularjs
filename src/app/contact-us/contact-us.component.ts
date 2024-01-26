import { Component } from '@angular/core';
import {faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  email = faEnvelope;
  phone = faPhone;
  location = faLocationDot;
}
