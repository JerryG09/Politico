import express from 'express';
import politicalPartyController from '../dommycontroller/politcocontroller';
import politicalOfficeController from '../dommycontroller/pol-office-controller';
import validator from '../validation/validationCheck'

const router = express.Router()

router.get('/api/v1/parties', politicalPartyController.getallparty)
router.get('/api/v1/parties/:id', politicalPartyController.getAParty)
router.post('/api/v1/parties', validator.validateParty, politicalPartyController.createParty)
router.delete('/api/v1/parties/:id', politicalPartyController.deleteParty)
router.patch('/api/v1/parties/:id', politicalPartyController.updateParty)


router.get('/api/v1/offices', politicalOfficeController.getAllOffices)
router.get('/api/v1/offices/:id',politicalOfficeController.getAnOffice)
router.post('/api/v1/offices', validator.validateOffice, politicalOfficeController.createOffice)



export default router;