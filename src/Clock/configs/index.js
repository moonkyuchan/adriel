const handType = [
  {
    key: 1,
    type: "hour",
    deg: (time) => {
      return ((time.getHours() % 12) + time.getMinutes() / 60) * 30;
    },
  },
  {
    key: 2,
    type: "minutes",
    deg: (time) => {
      return (time.getMinutes() + time.getSeconds() / 60) * 6;
    },
  },
  {
    key: 3,
    type: "seconds",
    deg: (time) => {
      return time.getSeconds() * 6;
    },
  },
];

export { handType };
