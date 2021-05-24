function Owner(name, cpf, rg, dateOfBirth, neighborhood, state, complement) {
  this.name = name;
  this.cpf = cpf;
  this.rg = rg;
  this.dateOfBirth = dateOfBirth;
  this.neighborhood = neighborhood;
  this.state = state;
  this.complement = complement;
}

function Car(
  model,
  color,
  brand,
  chasis,
  maxSpeed,
  currentSpeed,
  doors,
  solarRoof,
  transmission,
  fuel
) {
  this.model = model;
  this.color = color;
  this.brand = brand;
  this.chasis = chasis;
  this.owner = owner;
  this.maxSpeed = maxSpeed;
  this.currentSpeed = currentSpeed;
  this.doors = doors;
  this.solarRoof = solarRoof;
  this.transmission = transmission;
  this.fuel = fuel;

  var minSpeed = 0;

  function speed() {
    let newMarch = [];
    let speedChange = ["P", 1, 2, "N", 3, 4, "R"];
    let increaseSpeed = minSpeed++;
    if (increaseSpeed === maxSpeed) {
      return (increaseSpeed = 0);
    }
    speedChange.forEach((e) => {
      if (e === 1) {
        setTimeout(speed, 100);

        speedChange.shift();
        newMarch.push(speedChange);
      }
    });

    console.log(increaseSpeed);
    return increaseSpeed;
  }

  speed();
}

const owner = new Owner("nuevo", "aca", "si");

const car = new Car(
  "Mustang",
  "Green",
  "Ford",
  "hard",
  30,
  "currentSpeed",
  "doors",
  "solarRoof",
  1,
  "fuel"
);

console.log(car);
