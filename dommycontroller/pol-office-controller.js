import db from '../dommy/db/pol-office-db';

/**
 * @class Politico
 */
class politicOffice{

/**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static getAllOffices(req, res) {
    return res.status(200).json({
      status: 200,
      message: "All political office retrieved successfully",
      data: db
    })
  }

  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static getAnOffice  (req, res) {
    const id = parseInt(req.params.id, 10);
    db.map((data) => {
      if (data.id === id) {
        return res.status(200).json({
          success: 'true',
          message: 'office retrieved successfully',
          data,
        });
      } 
  });

   return res.status(404).send({
     success: 'false',
     message: 'office does not exist',
    });
  }

  
  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static createOffice (req, res){
    if (!req.body.type.trim() === "") {
      return res.status(400).json({
        status: 400,
        message: 'type is required'
      });
    } else if (!req.body.name.trim() ==="") {
      return res.status(400).json({
        status: 400,
        message: 'name is required'
      });
    }
    const data = {
      id: db.length + 1,
      type: req.body.type,
      name: req.body.name
    }
    db.push(data);
    return res.status(201).json({
      status: 201,
      message: 'data added successfully',
      data
    })
  }
}

export default politicOffice;