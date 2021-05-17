const express = require("express");
const router = express.Router();
const crudController = require('../controller/crudController');


router.get("/home",crudController.index)
router.post("/update",crudController.update)
router.get("/destroy/:id",crudController.destroy)
router.post("/insert",crudController.insert)



module.exports = router; 