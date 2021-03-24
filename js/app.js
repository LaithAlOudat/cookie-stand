'use strict';


/* 2
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

// let formSection = document.getElementById('container');
// formSection.appendChild('container');

const addBranchForm = document.getElementById('add-branch');

addBranchForm.addEventListener('submit', addNewBranch);

function addNewBranch(event) {
  event.preventDefault();
  let location = event.target.locationName.value;
  let minNumOfCustomers = Number(event.target.minCustomersPerHour.value);
  let maxminNumOfCustomers = Number(event.target.maxCustomersPerHour.value);
  let averageCookiesPerCustomer = Number(event.target.avgCookiesPurchasedPerHour.value);

  let addBranch = new Store(location, minNumOfCustomers, maxminNumOfCustomers, averageCookiesPerCustomer);
  addBranch.getCustomersPerHour();
  addBranch.getCookiesPerHour();
  addBranch.getTotalCookiesPerDay();
  addBranch.render();

  let footer = document.getElementById('footer');
  container.removeChild(footer);
  renderFooter();
  addBranchForm.reset();
}

}

*/
let operatingHours = hoursOfOperation();
let eachHoursTotals = [];
const container = document.getElementById('sales-Table');
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
function calculateTotal() {
  let dailyTotal = 0;
  for (let i = 0; i < eachHoursTotals.length; i++) {
    dailyTotal += eachHoursTotals[i];
  }
  return dailyTotal;
}
for (let i = 0; i < operatingHours.length; i++) {
  eachHoursTotals.push(0);
}
let Store = function (location, minNumOfCustomers, maxminNumOfCustomers, averageCookiesPerCustomer) {
  this.location = location;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxminNumOfCustomers = maxminNumOfCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPerDay = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerDay = 0;
};
Store.prototype.getCustomersPerHour = function () {
  for (let i = 0; i < operatingHours.length; i++) {
    this.customersPerHour.push(getRandomNumber(this.minNumOfCustomers, this.maxminNumOfCustomers));
  }
};
Store.prototype.getCookiesPerHour = function () {
  for (let i = 0; i < operatingHours.length; i++) {
    let temp = this.customersPerHour[i] * this.averageCookiesPerCustomer;
    this.cookiesPerHour.push(Math.floor(temp));
  }
};
Store.prototype.getTotalCookiesPerDay = function () {
  for (let i = 0; i < operatingHours.length; i++) {
    this.totalCookiesPerDay += this.cookiesPerHour[i];
  }
};
let renderHeader = function () {
  const trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (let i = 0; i < operatingHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = operatingHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  container.appendChild(trEl);
};
Store.prototype.render = function () {
  const trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  container.appendChild(trEl);
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (let i = 0; i < operatingHours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
    eachHoursTotals[i] += this.cookiesPerHour[i];
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);
};
let renderFooter = function () {
  const trEl = document.createElement('tr');
  trEl.id = 'footer';
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
const seattle = new Store('Seattle', 23, 65, 6.3);
seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getTotalCookiesPerDay();
const tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.getTotalCookiesPerDay();
const dubai = new Store('Dubai', 11, 38, 3.7);
dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.getTotalCookiesPerDay();
const paris = new Store('Paris', 20, 38, 2.3);
paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.getTotalCookiesPerDay();
const lima = new Store('Lima', 2, 16, 4.6);
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
const addBranchForm = document.getElementById('add-branch');
addBranchForm.addEventListener('submit', addNewBranch);
function addNewBranch(event) {
  event.preventDefault();
  let location = event.target.locationName.value;
  let minNumOfCustomers = Number(event.target.minCustomersPerHour.value);
  let maxminNumOfCustomers = Number(event.target.maxCustomersPerHour.value);
  let averageCookiesPerCustomer = Number(event.target.avgCookiesPurchasedPerHour.value);

  let addBranch = new Store(location, minNumOfCustomers, maxminNumOfCustomers, averageCookiesPerCustomer);
  addBranch.getCustomersPerHour();
  addBranch.getCookiesPerHour();
  addBranch.getTotalCookiesPerDay();
  addBranch.render();

  let footer = document.getElementById('footer');
  container.removeChild(footer);
  renderFooter();
  addBranchForm.reset();
}