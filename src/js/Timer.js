
export class Timer {
  constructor() {

  }

 useTimer() {
    let myVar = setTimeout(function myTime() {
    }, 10000);
    return myVar;
  };

  clearTimer() {
    clearTimeout();
  }
}
