module.exports = (app) => {
    const studentController = require('../controllers/student.controller.js');

    app.post('/register',  studentController.create);
    app.get('/view',studentController.findAll)
    app.put('/update/:id',studentController.update)
    app.delete('/delete/:id',studentController.delete)

}
