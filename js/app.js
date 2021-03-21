'use strict';

function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function hoursOfOperation() {
  let startTime = 6;
  let endTime = 9;

  let pm = false;

  let currentTime = startTime;

  let workHours = [];

  while (pm === false || currentTime < endTime) {
    if (pm === false && currentTime < 12) {
      workHours.push(currentTime + ':00am');
      currentTime++;
    }
    else if (pm === false && currentTime === 12) {
      pm = true;
      workHours.push(currentTime + ':00pm');
      currentTime = 1;
    }
    else {
      workHours.push(currentTime + ':00pm');
      currentTime++;
    }
  }

  return workHours;
}


const seattle = {
  branchLocation: 'Seattle',
  minNumOfCustomers: 0,
  maxminNumOfCustomers: 0,
  avg: [],
  tatavg: 0,
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getMinNumOfCustomers: function (min, max) {
    this.minNumOfCustomers = getRandomNumber(min, max);
  },
  getMaxminNumOfCustomers: function (min, max) {
    this.maxminNumOfCustomers = getRandomNumber(min, max);
  },
  getAvg: function (i) {
    this.avg[i] = (this.minNumOfCustomers + this.maxminNumOfCustomers) / 2;
  },
  getTatavg: function (i) {
    this.tatavg += this.avg[i];
    if (i === 14) {
      this.tatavg = Math.floor(this.tatavg / 15);
    }
  },
  getCookiesPerHour: function () {
    this.cookiesPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
  },
  getCookiesPerOperation: function (i) {
    this.cookiesPerOperation.push(`${hoursOfOperation()[i]} ${this.cookiesPerHour[i]} cookies`);
  },
  getTotalCookiesPerDay: function (i) {
    this.totalCookiesPerDay += this.cookiesPerHour[i];
  },
  render: function () {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.cookiesPerOperation.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    // const pE1 = document.createElement('p');
    // articleEl.appendChild(pE1);
    // pE1.textContent = `average: ${this.tatavg} sale per day`;
    const pE2 = document.createElement('p');
    articleEl.appendChild(pE2);
    pE2.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

for (let i = 0; i < 15; i++) {
  seattle.getMinNumOfCustomers(50, 100);
  seattle.getMaxminNumOfCustomers(101, 200);
  seattle.getAvg(i);
  seattle.getTatavg(i);
  seattle.getCookiesPerHour();
  seattle.getCookiesPerOperation(i);
  seattle.getTotalCookiesPerDay(i);
}

seattle.render();

const tokyo = {
  branchLocation: 'Tokyo',
  minNumOfCustomers: 0,
  maxminNumOfCustomers: 0,
  avg: [],
  tatavg: 0,
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getMinNumOfCustomers: function (min, max) {
    this.minNumOfCustomers = getRandomNumber(min, max);
  },
  getMaxminNumOfCustomers: function (min, max) {
    this.maxminNumOfCustomers = getRandomNumber(min, max);
  },
  getAvg: function (i) {
    this.avg[i] = (this.minNumOfCustomers + this.maxminNumOfCustomers) / 2;
  },
  getTatavg: function (i) {
    this.tatavg += this.avg[i];
    if (i === 14) {
      this.tatavg = Math.floor(this.tatavg / 15);
    }
  },
  getCookiesPerHour: function () {
    this.cookiesPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
  },
  getCookiesPerOperation: function (i) {
    this.cookiesPerOperation.push(`${hoursOfOperation()[i]} ${this.cookiesPerHour[i]} cookies`);
  },
  getTotalCookiesPerDay: function (i) {
    this.totalCookiesPerDay += this.cookiesPerHour[i];
  },
  render: function () {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.cookiesPerOperation.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    // const pE1 = document.createElement('p');
    // articleEl.appendChild(pE1);
    // pE1.textContent = `average: ${this.tatavg} sale per day`;
    const pE2 = document.createElement('p');
    articleEl.appendChild(pE2);
    pE2.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

for (let i = 0; i < 15; i++) {
  tokyo.getMinNumOfCustomers(50, 100);
  tokyo.getMaxminNumOfCustomers(101, 200);
  tokyo.getAvg();
  tokyo.getCookiesPerHour();
  tokyo.getCookiesPerOperation(i);
  tokyo.getTotalCookiesPerDay(i);
}

tokyo.render();

const dubai = {
  branchLocation: 'Dubai',
  minNumOfCustomers: 0,
  maxminNumOfCustomers: 0,
  avg: [],
  tatavg: 0,
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getMinNumOfCustomers: function (min, max) {
    this.minNumOfCustomers = getRandomNumber(min, max);
  },
  getMaxminNumOfCustomers: function (min, max) {
    this.maxminNumOfCustomers = getRandomNumber(min, max);
  },
  getAvg: function (i) {
    this.avg[i] = (this.minNumOfCustomers + this.maxminNumOfCustomers) / 2;
  },
  getTatavg: function (i) {
    this.tatavg += this.avg[i];
    if (i === 14) {
      this.tatavg = Math.floor(this.tatavg / 15);
    }
  },
  getCookiesPerHour: function () {
    this.cookiesPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
  },
  getCookiesPerOperation: function (i) {
    this.cookiesPerOperation.push(`${hoursOfOperation()[i]} ${this.cookiesPerHour[i]} cookies`);
  },
  getTotalCookiesPerDay: function (i) {
    this.totalCookiesPerDay += this.cookiesPerHour[i];
  },
  render: function () {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.cookiesPerOperation.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    // const pE1 = document.createElement('p');
    // articleEl.appendChild(pE1);
    // pE1.textContent = `average: ${this.tatavg} sale per day`;
    const pE2 = document.createElement('p');
    articleEl.appendChild(pE2);
    pE2.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

for (let i = 0; i < 15; i++) {
  dubai.getMinNumOfCustomers(50, 100);
  dubai.getMaxminNumOfCustomers(101, 200);
  dubai.getAvg();
  dubai.getCookiesPerHour();
  dubai.getCookiesPerOperation(i);
  dubai.getTotalCookiesPerDay(i);
}

dubai.render();

const paris = {
  branchLocation: 'Paris',
  minNumOfCustomers: 0,
  maxminNumOfCustomers: 0,
  avg: [],
  tatavg: 0,
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getMinNumOfCustomers: function (min, max) {
    this.minNumOfCustomers = getRandomNumber(min, max);
  },
  getMaxminNumOfCustomers: function (min, max) {
    this.maxminNumOfCustomers = getRandomNumber(min, max);
  },
  getAvg: function (i) {
    this.avg[i] = (this.minNumOfCustomers + this.maxminNumOfCustomers) / 2;
  },
  getTatavg: function (i) {
    this.tatavg += this.avg[i];
    if (i === 14) {
      this.tatavg = Math.floor(this.tatavg / 15);
    }
  },
  getCookiesPerHour: function () {
    this.cookiesPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
  },
  getCookiesPerOperation: function (i) {
    this.cookiesPerOperation.push(`${hoursOfOperation()[i]} ${this.cookiesPerHour[i]} cookies`);
  },
  getTotalCookiesPerDay: function (i) {
    this.totalCookiesPerDay += this.cookiesPerHour[i];
  },
  render: function () {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.cookiesPerOperation.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    // const pE1 = document.createElement('p');
    // articleEl.appendChild(pE1);
    // pE1.textContent = `average: ${this.tatavg} sale per day`;
    const pE2 = document.createElement('p');
    articleEl.appendChild(pE2);
    pE2.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

for (let i = 0; i < 15; i++) {
  paris.getMinNumOfCustomers(50, 100);
  paris.getMaxminNumOfCustomers(101, 200);
  paris.getAvg();
  paris.getCookiesPerHour();
  paris.getCookiesPerOperation(i);
  paris.getTotalCookiesPerDay(i);
}

paris.render();

const lima = {
  branchLocation: 'Lima',
  minNumOfCustomers: 0,
  maxminNumOfCustomers: 0,
  avg: [],
  tatavg: 0,
  cookiesPerHour: [],
  cookiesPerOperation: [],
  totalCookiesPerDay: 0,
  getMinNumOfCustomers: function (min, max) {
    this.minNumOfCustomers = getRandomNumber(min, max);
  },
  getMaxminNumOfCustomers: function (min, max) {
    this.maxminNumOfCustomers = getRandomNumber(min, max);
  },
  getAvg: function (i) {
    this.avg[i] = (this.minNumOfCustomers + this.maxminNumOfCustomers) / 2;
  },
  getTatavg: function (i) {
    this.tatavg += this.avg[i];
    if (i === 14) {
      this.tatavg = Math.floor(this.tatavg / 15);
    }
  },
  getCookiesPerHour: function () {
    this.cookiesPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
  },
  getCookiesPerOperation: function (i) {
    this.cookiesPerOperation.push(`${hoursOfOperation()[i]} ${this.cookiesPerHour[i]} cookies`);
  },
  getTotalCookiesPerDay: function (i) {
    this.totalCookiesPerDay += this.cookiesPerHour[i];
  },
  render: function () {
    const container = document.getElementById('cookie-stand');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.branchLocation;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.cookiesPerOperation.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = this.cookiesPerOperation[i];
    }
    // const pE1 = document.createElement('p');
    // articleEl.appendChild(pE1);
    // pE1.textContent = `average: ${this.tatavg} sale per day`;
    const pE2 = document.createElement('p');
    articleEl.appendChild(pE2);
    pE2.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  }
};

for (let i = 0; i < 15; i++) {
  lima.getMinNumOfCustomers(50, 100);
  lima.getMaxminNumOfCustomers(101, 200);
  lima.getAvg();
  lima.getCookiesPerHour();
  lima.getCookiesPerOperation(i);
  lima.getTotalCookiesPerDay(i);
}

lima.render();
