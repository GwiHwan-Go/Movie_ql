export let people = [
    {
      id: 0,
      name: "Nicolas",
      age: 18,
      gender: "female"
    },
    {
      id: 1,
      name: "Jisu",
      age: 15,
      gender: "female"
    },
    {
      id: 2,
      name: "Japan Guy",
      age: 25,
      gender: "male"
    },
    {
      id: 3,
      name: "Daal",
      age: 11,
      gender: "female"
    },
    {
      id: 4,
      name: "JD",
      age: 340,
      gender: "male"
    },
    {
      id: 5,
      name: "moondaddi",
      age: 22,
      gender: "male"
    },
    {
      id: 6,
      name: "flynn",
      age: 12,
      gender: "male"
    }
  ];

  export const getById = id => {
      const filteredPeople = people.filter(
          person => person.id ===id);
          return filteredPeople[0];
  }

  export const deletePerson = id =>{
      const cleanedPeople = people.filter(person => person.id!==id);
      if(people.length > cleanedPeople.length){
          people = cleanedPeople;
          return true;
      } else {
          return false;
      }
  }

  export const addPerson = (name, age, gender) =>{
      const newPerson = {
          id : `${people.length+1}`,
          name,
          age,
          gender
      };
      people.push(newPerson);
      return newPerson
  } //4:19 error course 10