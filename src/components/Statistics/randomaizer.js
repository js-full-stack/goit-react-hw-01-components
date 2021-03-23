const getRandomColor = function (color = '#') {
  const letters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// const getLog = log => console.log(log);

export default getRandomColor;
