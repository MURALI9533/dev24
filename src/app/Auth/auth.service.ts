import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Example login method
  login(username: string, password: string): boolean {
    // Perform authentication logic here
    if (username === 'user' && password === 'password') {
      // Mocking token generation
      localStorage.setItem('token', 'your_generated_token');
      return true;
    } else {
      return false;
    }
  }

  // Example logout method
  logout(): void {
    // Clear token
    localStorage.removeItem('token');
  }

  // Example method to check if user is logged in
  isLoggedIn(): boolean {
    // Check if token exists
    return true;
    //return !!localStorage.getItem('token');
  }
}
