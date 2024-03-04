const findTheOldest = function (people) {
  // people array with person objects with name, birth and death years
  // name of the oldest person
  // algo
  // sort people from oldest to youngest
  // return the first entry

  // handle 2 cases where year of death is missing
  // if the year of birth is too new (non oldest person)
  // if the year of birth is too old (oldest person)

  return people
    .map((person) => {
      if (!("yearOfDeath" in person)) {
        let yearCurrent = new Date();
        yearCurrent = yearCurrent.getFullYear();
        person.age = yearCurrent - person.yearOfBirth;
      } else {
        person.age = person.yearOfDeath - person.yearOfBirth;
      }

      return person;
    })
    .sort((a, b) => (a.age > b.age ? -1 : 1))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
