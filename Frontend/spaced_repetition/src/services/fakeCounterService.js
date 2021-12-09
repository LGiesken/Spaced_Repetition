let counters = [
  { _id: 1, counter: 5 },
  { _id: 2, counter: 0 },
  { _id: 3, counter: 2 },
  { _id: 4, counter: 6 },
  { _id: 5, counter: 10 },
  { _id: 6, counter: 8 },
  { _id: 7, counter: 22 },
  { _id: 8, counter: 5 },
  { _id: 9, counter: 0 },
];

export function getCounters() {
  return counters;
}

export default {
  getCounters,
};
