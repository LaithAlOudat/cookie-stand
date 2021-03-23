'use strict';
/*
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
*/

function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

let workHours = hoursOfOperation();

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
    } else if (pm === false && currentTime === 12) {
      pm = true;
      workHours.push(currentTime + ':00pm');
      currentTime = 1;
    } else {
      workHours.push(currentTime + ':00pm');
      currentTime++;
    }
  }

  return workHours;
}

let Location = function (location, minNumOfCustomers, maxminNumOfCustomers, averageCookiesPerCustomer) {
  this.location = location;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxminNumOfCustomers = maxminNumOfCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPerDay = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerDay = 0;
};

Location.prototype.getCustomersPerHour = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
  }
};

Location.prototype.getCookiesPerHour = function () {
  for (let i = 0; i < workHours.length; i++) {
    let temp = this.customersPerHour[i] * this.averageCookiesPerCustomer;
    this.cookiesPerHour.push(Math.floor(temp));
  }
};

Location.prototype.getTotalCookiesPerDay = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.totalCookiesPerDay += this.cookiesPerHour[i];
  }
};

let renderHeader = function () {
  const container = document.getElementById('sales-Table');
  const trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (let i = 0; i < workHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = workHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  container.appendChild(trEl);
};

let eachHoursTotals = [];

for (let i = 0; i < workHours.length; i++) {
  eachHoursTotals.push(0);
}

Location.prototype.render = function () {
  const container = document.getElementById('sales-Table');
  const trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  container.appendChild(trEl);
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (let i = 0; i < workHours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
    eachHoursTotals[i] += this.cookiesPerHour[i];
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);
};

function calculateTotal() {
  let dailyTotal = 0;
  for (let i = 0; i < eachHoursTotals.length; i++) {
    dailyTotal += eachHoursTotals[i];
  }
  return dailyTotal;
}

let renderFooter = function () {
  const container = document.getElementById('sales-Table');
  const trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (let i = 0; i < eachHoursTotals.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = eachHoursTotals[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = calculateTotal();
  trEl.appendChild(tdEl);
  container.appendChild(trEl);
};

const seattle = new Location('Seattle', 23, 65, 6.3);
seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getTotalCookiesPerDay();

const tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.getTotalCookiesPerDay();

const dubai = new Location('Dubai', 11, 38, 3.7);
dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.getTotalCookiesPerDay();

const paris = new Location('Paris', 20, 38, 2.3);
paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.getTotalCookiesPerDay();

const lima = new Location('Lima', 2, 16, 4.6);
lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.getTotalCookiesPerDay();

renderHeader();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderFooter();
