// Classic OOP example using structural typing for implicit
// polymorphism
type Vehicle = {
  color: string,
}
const drive = (v: Vehicle, distance: number) => {
  console.log(`driving ${distance} units in a ${v.color} vehicle`)
}
















// Straightforward instantiation and use
const vehicle: Vehicle = {
  color: "purple"
}
drive(vehicle, 12)
















// Objects with correct "structure" are valid
const obj = {
  color: "blue",
};
drive(obj, 10)
















// Objects with correct "structure" _and extra propertes_ are valid
const obj2 = {
  color: "green",
  hasLeatherSeats: true,
};
drive(obj2, 10)
















// Now for a another type
// Note we do not say "extends Vehicle" anywhere
type Truck = {
  color: string,
  carryingCapacity: number,
}
const carry = (t: Truck, load: number) => {
  if (load > t.carryingCapacity) {
    console.log(`failed to carry ${load} units in a ${t.color} truck`)
  } else {
    console.log(`carrying ${load} units in a ${t.color} truck`)
  }
}
















const truck: Truck = {
  color: "red",
  carryingCapacity: 8,
};
carry(truck, 7)
















// Is a Truck a Vehicle?
// Uncomment to find out
// drive(truck, 15);
















// Is a Vehicle a Truck?
// Uncomment to find out
// carry(vehicle, 10);
