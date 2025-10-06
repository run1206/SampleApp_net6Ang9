import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any) {
    debugger;
    console.error('An error occurred:', error);

    // Access the stack trace and other details
    if (error.stack) {
      console.error('Stack Trace:', error.stack);
    }
    if (error.message) {
      console.error('Error Message:', error.message);
    }
    // You can also send this error to a logging service or a backend API
  }
}