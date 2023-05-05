const persons = [
    {
        id: 1,
        name : 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        ide: 3,
        name: 'Dan Abramov',
        number: '12-43-234345'
    },
    {
        id: 4,
        name: 'Mary Poppendick',
        number: '39-23-6423122'
    },
];

function getAllData(){
    const records = persons.findAll()

        return records
};

function getDataById (id){
    const record = persons.findByid()

        return record
};

function createData (data){
    const record = persons.insert(data)

        return record
};

function updateData (id,data){
    const dataToUpdate = {
        id, 
        ...data,
    };

    const record = persons.update(dataToUpdate)

        return record
};

function deleteData(id){
    const record = persons.delete(id)

        return record
}

module.export = {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData,
};
