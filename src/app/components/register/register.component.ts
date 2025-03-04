import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordMismatch: boolean = false;

  constructor(private authservice: AuthService){}

  register(){

    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }
    this.passwordMismatch = false;
    this.authservice.register(this.username, this.password).subscribe({
      next: (res) => alert('สมัครสมาชิกสำเร็จ'),
      error: (err) => alert('เกิดข้อผิดพลาด: ' + err.err.message)
    });
  }
}
