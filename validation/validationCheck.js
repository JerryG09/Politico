
/**
   * @param {*} req 
   * @param {*} res 
   * @param {*} next
   * @returns {*} json 
   */
class ValidationChecker{
  static validateOffice(req, res, next) {
    const name = req.body.name;
    const type = req.body.type;
    try {
      const regex = /^[a-zA-Z\s]*$/;
      if (name.trim() === '') {
        return res.status(400).json({ message: 'Office name cannot be empty' });
      }
      if (!regex.test(name)) {
        return res.status(400).json({ message: 'Office name can only be letters' });
      }
      if (type.trim() === '') {
        return res.status(400).json({ message: 'Type cannot be empty' });
      }
      if (!regex.test(type)) {
        return res.status(400).json({ message: 'hqAdress can only contain letter' });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: 'Name and Type field are required'
      });
    }
  }


  /**
   * @param {*} req 
   * @param {*} res 
   * @param {*} next
   * @returns {*} json 
   */
  static validateParty(req, res, next) {
    const {
      name, hqAddress, logoUrl
    } = req.body;
    try {
      const regex = /^[a-zA-Z\s]*$/;
      if (name.trim() === '') {
        return res.status(400).json({ message: 'Partyname cannot be empty' });
      }
      if (!regex.test(name)) {
        return res.status(400).json({ message: 'Party name can only be letters' });
      }
      if (hqAddress.trim() === '') {
        return res.status(400).json({ message: 'Address cannot be empty' });
      }
      if (!regex.test(hqAddress)) {
        return res.status(400).json({ message: 'hqAdress can only contain letter' });
      }
      if (logoUrl.trim() === '') {
        return res.status(400).json({ message: 'Image URLtype cannot be empty' });
      }
      next();
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        status: 500,
        error: 'Name, hqAddress, logoUrl is required'
      });
    }
  }
}

export default ValidationChecker