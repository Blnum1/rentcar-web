import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        if (res.success) {
          alert('เข้าสู่ระบบสำเร็จ');
          localStorage.setItem('user', JSON.stringify(res.user));

          this.router.navigate(['/home']); 
        }else {
          alert('เข้าสู่ระบบล้มเหลว: ' + res.message);
        }
      },
      error: (err) => alert('เกิดข้อผิดพลาด: ' + err.err.message)
    });
  }

}
