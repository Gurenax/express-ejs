let express = require('express');
let router = express.Router();

// Controllers
let document_controller = require('../controllers/document_controller');

// Routes
/* GET home page. */
router.get('/', document_controller.index);

/* GET request for creating a Document. NOTE This must come before routes that display Document (uses id) */
router.get('/create', document_controller.document_create_get);

/* POST request for creating Document. */
router.post('/create', document_controller.document_create_post);

/* POST request to Delete Document */
router.post('/delete', document_controller.document_delete);

/* POST request to Update Document */
router.post('/edit/:id', document_controller.document_update);

/* GET request to Edit Document */
router.get('/edit/:id', document_controller.document_edit);


/* GET request for one Document. */
router.get('/:id', document_controller.document_detail);


module.exports = router;
