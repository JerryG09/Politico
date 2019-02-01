import express from 'express';
import politicalPartyController from '../dommycontroller/politcocontroller';
import politicalOfficeController from '../dommycontroller/pol-office-controller';
const router = express.Router()

router.get('/api/v1/parties', politicalPartyController.getallparty)
router.get('/api/v1/parties/:id', politicalPartyController.getAParty)
router.post('/api/v1/parties', politicalPartyController.createParty)
router.delete('/api/v1/parties/:id', politicalPartyController.deleteParty)
router.patch('/api/v1/parties/:id', politicalPartyController.updateParty)


router.get('/api/v1/offices', politicalOfficeController.getAllOffices)
router.get('/api/v1/offices/:id',politicalOfficeController.getAnOffice)
router.post('/api/v1/offices', politicalOfficeController.createOffice)



export default router;