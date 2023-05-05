const {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData,
} = require('./module')

function handleGetAllData (req,res){
    const records = getAllData()

        return res.json(records);
};

function handleGetDataById (req,res){
    const { id } = req.params
    const record = getDataById(id)

        if (Object.keys(record).length === 0){
            return res.status(404).json({
                message : 'Not Found :(',
            })
        };
    
    return res.json(record);
};

function handleCreateData (req, res){
    const data = req.body;
    const record = createData(data);

        if (record.id === 0){
            return res.status(404).json({
                message: 'falta el nombre o número, completeo conrrectamente',
            });

        } else if(persons.length===record.name){
            return res.status(404).json({
                message: 'El nombre ya existe en la agenda',
            })
        }
        return res.json(record);
};

function handleUpdateData (req, res){
    const { id } = req.body;
    const data =req.body;

    const record = updateData(id, data);

        if (Object.keys(record).length ===0){
            return res.status(404).json({
                message: 'Not Found :(',
            });
        };

    return res.json(record);
};

function handleDeleteData(req, res){
    const {id} = req.params;
        deleteData(id);

            return res.json ({
                message: 'Record deleted :)'
            });
};

function handleLogin(req, res){
    const userName =req.body.username;
    const password = req.body.password;
    
        if (userName === 'miguel' && password === '123456'){
            req.session.user = userName;
            return res.json({
                message: 'inicio de sesión exitoso'
            });
        };
    return res.json({
        message: 'Usuario o contraseña incorreta'
    });
};

module.exports = {
    handleGetAllData,
    handleGetDataById,
    handleCreateData,
    handleUpdateData,
    handleDeleteData,
    handleLogin,
};
