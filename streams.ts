import { Subject } from "rxjs";

const s = new Subject<number>();
s.subscribe((val) => console.log(val, process.hrtime()));
// sync
s.next(1);
// async
setTimeout(() => {
  console.log("next 2 .....");
  s.next(2);
}, 1000);

setTimeout(() => {
  console.log("next 3 .....");
  s.next(3);
}, 3000);
