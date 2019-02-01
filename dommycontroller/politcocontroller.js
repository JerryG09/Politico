import db from '../dommy/db/politicodb';

/**
 * @class Politico
 */
class Politico {
  
  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static createParty (req, res){
    let name = req.body.name;
    let hqAddress = req.body.hqAddress;
    if (!name.trim() === "") {
      return res.status(400).json({
        status: 400,
        message: 'name is required'
      });
    } else if (!hqAddress.trim() === "") {
      return res.status(400).json({
        status: 400,
        message: 'hqAddress is required'
      });
    } else if (!req.body.logourl) {
      return res.status(400).json({
        status: 400,
        message: 'logourl is required'
      });
    }
    const data = {
      id: db.length + 1,
      name: req.body.name,
      hqAddress: req.body.hqAddress
    }
   
    db.push(data);
    return res.status(201).json({
      success: 'true',
      message: 'data added successfully',
      data
    })
  }
  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static getallparty (req,res) {
        return res.status(200).json({
          status:200,
          data:db 
    })
  } 

  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static getAParty(req, res) {
    const id = parseInt(req.params.id)
    db.map((data) => {
      if (data.id === id) {
        return res.status(200).json({
          status: 200,
          message: "Party retrieved successfully",
          data
        })
      }
    })
    return res.status(404).json({
      status: 404,
      message: "Party does not exist"
    })
  }


  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static deleteParty(req, res){
    const id = parseInt(req.params.id);
    db.map((data, index) => {
      if (data.id === id) {
        db.splice(index, 1);
        return res.status(200).json({
          success: 'true',
          message: 'Party deleted successfuly',
        });
      }
    });

    return res.status(404).json({
      success: 'false',
      message: 'Party not found',
    })
  }

  /**
   * @param {*} req 
   * @param {*} res
   * @returns {*} json 
   */
  static updateParty(req, res){
    const id = parseInt(req.params.id, 10);
    let dataFound;
    let itemIndex;
    db.map((data, index) => {
      if (data.id === id) {
        dataFound = data;
        itemIndex = index;
      }
    });

    if (!dataFound) {
      return res.status(404).json({
        success: 'false',
        message: 'Party not found',
      });
    }

    if (!req.body.name) {
      return res.status(400).json({
        success: 'false',
        message: 'name is required',
      });
    } else if (!req.body.logourl) {
      return res.status(400).json({
        success: 'false',
        message: 'logourl is required',
      });
    }

    const updatedParty = {
      id: dataFound.id,
      title: req.body.name || dataFound.title,
      logourl: req.body.logourl || dataFound.logourl,
    };

    db.splice(itemIndex, 1, updatedParty);

    return res.status(201).json({
      success: 'true',
      message: 'Party edited successfully',
      updatedParty,
    })
  }
}  


export default Politico;