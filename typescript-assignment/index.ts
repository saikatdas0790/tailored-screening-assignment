type U<A> = Omit<A, "id">;

const instanceOfA: U<{ id: string; x: number; y: number }> = {
  // * To test this, uncomment the below code
  // id: 1,
  x: 15,
  y: 25,
};
