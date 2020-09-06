// Product Types

type Mammal = {
  name: string;
  lungCapacity: number;
};
type OceanDweller = {
  name: string;
  favoriteOcean: string;
};

type OceanDwellingMammal = Mammal & OceanDweller;
















const aardvark: Mammal = {
  name: "aardvark",
  lungCapacity: 1,
};
// Is an aardvark an OceanDwellingMammal?
// const oceanArdvark: OceanDwellingMammal = aardvark;

const tuna: OceanDweller = {
  name: "tuna",
  favoriteOcean: "pacific",
};
// Is a tuna an OceanDwellingMammal?
// const airLovingTuna: OceanDwellingMammal = tuna;
















const dolphin = {
  name: "dolphin",
  lungCapacity: 4,
  favoriteOcean: "atlantic",
};

// Is a dolphin an OceanDwellingMammal?
// const o: OceanDwellingMammal = dolphin;
















// Sum Types

type SuccessfulString = {
  status: "success";
  value: string;
};

type Failure = {
  status: "fail";
  err: Error;
};

type StringResult = SuccessfulString | Failure;

function generateDateStringOnlyIfEven(): StringResult {
  const now = new Date();
  if (now.getMilliseconds() % 2 === 0) {
    return {
      status: "success",
      value: now.toISOString(),
    };
  } else {
    return {
      status: "fail",
      err: new Error("not an even millisecond"),
    };
  }
}
















const s = generateDateStringOnlyIfEven();

if (s.status === "success") {
  console.info(s.value);
} else {
  console.error(s.err);
}
