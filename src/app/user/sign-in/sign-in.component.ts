import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  imports: [FormsModule],
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  errorMsg: string = '';
  signInError: boolean = false;
  constructor() {}

  // constructor(private router: Router, private userService: UserService) { }

  signIn() {
    alert('welcome back');
    window.location.href = './catalog';
    // this.userService.signIn(this.credentials).subscribe({
    //   next: () => this.router.navigate(['/catalog']),
    //   error:(err) => {
    //     console.error('sign-in failed', err);
    //     this.errorMsg = err.error || 'sign in failed';
    //   }
    // });
  }
}
