import { combineLatest, merge, Subject } from "rxjs";

it("works", () => {
  expect(true).toBe(true);
});

// a simple imperative programming
it("imperative", () => {
  let a = 3;
  let b = 3;
  let c = a + b;
  expect(c).toBe(6);
  a = a + 1;
  //   this will give us wrong answer
  //   expect(c).toBe(7)
  //   this is correct but no reactivity :(
  c = a + b;
  expect(c).toBe(7);
});

// rxjs way
it("reactive", () => {
  const a = new Subject<number>();
  const b = new Subject<number>();
  const c = combineLatest([a, b]);

  //   consumer
  c.subscribe(([a, b]) => console.log(a + b));

  // producer
  a.next(3); // latest value => a = 3
  b.next(3); // this will be ignored because b is not 3 but 4
  b.next(4); // latest value => b = 4

  //   now if we do another next "c" will change automatically
});
