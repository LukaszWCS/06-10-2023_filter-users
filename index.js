const people = [
  {
    prenom: "Lucas",
    age: 21,
    sexe: "h"
  },
  {
    prenom: "Lukasz",
    age: 14,
    sexe: "h"
  },
  {
    prenom: "Katy",
    age: 13,
    sexe: "f"
  },
  {
    prenom: "Stephany",
    age: 22,
    sexe: "f"
  }
]


// basic function that uses for loop
function filterUsers_for_loop(users) {
  const hommes = []
  const femmes = []
  const resultArr = [hommes, femmes]

  for (let i = 0; i < users.length; i++) {
    if(users[i].age >= 18){
      if(users[i].sexe === "h"){
        hommes.push(users[i].prenom)
      } else if (users[i].sexe === "f"){
        femmes.push(users[i].prenom)
      }
    }
  }
  return resultArr
}



// function that uses Array methods: filter & map
function filterUsers_filter_map_methods(users) {

  // filer users => return an array with the adult men
  const hommesAdultes = users.filter(user => {
    return user.age >= 18 && user.sexe === "f"
  })
   // filer hommesAdultes => return new array with only values(of property prenom) of each user
  const hommesFiltre = hommesAdultes.map(user => {
    return user.prenom
  })

  // filer users => return an array with the adult women
  const femmesAdultes = users.filter(user => {
    return user.age >= 18 && user.sexe === "f"
  })
  // filer femmesAdultes => return new array with only values(of property prenom) of each user
  const femmesFiltre = femmesAdultes.map(user => {
    return user.prenom
  })

  return [hommesFiltre, femmesFiltre]
}



// fancy function
function filterUsers_fancy_filter_map_methods(users) {
  // filer users => return an array with the adult men
  const hommes = users
    .filter(user => user.age >= 18 && user.sexe === "f" )
    .map(user => user.prenom)

    const fammes = users
    .filter(user => user.age >= 18 && user.sexe === "h" )
    .map(user => user.prenom)

  return [hommes, fammes]
}

const result = filterUsers_for_loop(people)
console.log(result);
    