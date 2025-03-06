const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    startingPrice: "$30",
   },
   {
    name: "Bob",
    occupation: "Teacher",
    startingPrice: "$50",
   },
]

const newFreelancers = [
  {
    name: "Benjamin",
    occupation: "Trainer",
    startingPrice: "$40",
  },
  {
    name: "David",
    occupation: "Scientist",
    startingPrice: "$100",
  },
  {
    name: "Juno",
    occupation: "Carpenter",
    startingPrice: "$60",
  }
];

let averagePrice = 0;

function init() {
  const root = document.querySelector("#root");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Freelancer Forum: The average starting price is";
  root.append(h1);
  const freelancersTable = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  for (let key of Object.keys(freelancers[0])) {
    const th = document.createElement("th");
    th.innerText = key;

    thead.appendChild(th);
  }

  freelancersTable.appendChild(thead);
  freelancersTable.appendChild(tbody);

  root.appendChild(freelancersTable)

  renderFreelancers();
}

function renderFreelancers() {

  const freelancersTable = document.querySelector("tbody");

  const freelancerElements = freelancers.map((freelancer) => {
    const row = document.createElement("tr");

    const f_name = document.createElement("td");
    f_name.innerHTML = freelancer.name;

    const f_occupation = document.createElement("td");
    f_occupation.innerHTML = freelancer.occupation;

    const f_startingPrice = document.createElement("td");
    f_startingPrice.innerHTML = freelancer.startingPrice;

    row.appendChild(f_name);
    row.appendChild(f_occupation);
    row.appendChild(f_startingPrice);

    return row;
  });

  freelancersTable.replaceChildren(...freelancerElements);
}


const addFreelancer = () => {

  const newFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];

  freelancers.push(newFreelancer);

  renderFreelancers();
};

setInterval (addFreelancer, 1000);

init();