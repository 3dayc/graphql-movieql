export const people = [
    {
        id: "0",
        name: "Hyanghoon",
        age: 31,
        gender: "male"
    },
    {
        id: "1",
        name: "Sohyun",
        age: 31,
        gender: "male"
    },
    {
        id: "2",
        name: "Hyanga",
        age: 31,
        gender: "male"
    },
    {
        id: "3",
        name: "Nicolas",
        age: 31,
        gender: "male"
    },
    {
        id: "4",
        name: "Erika",
        age: 31,
        gender: "fmale"
    },
    {
        id: "5",
        name: "Kane",
        age: 31,
        gender: "fmale"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}