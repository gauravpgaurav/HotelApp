module.exports = function(Hotel) {

  Hotel.findByCityId = function (cityid, callback) {

    Hotel.find({where: {cityid :cityid}},function (error,result) {

      if(error) {
        return callback(error);
      }

      else if (result){
        return callback(null,result);
      }
    })
  }


  Hotel.remoteMethod('findByCityId',{

    isStatic : true,
    accepts:[{

      arg: 'cityid',
      type: 'string',
      description: 'Unique Id of every city',
      required: true,
      http: {source: 'path'}

    }],
    returns:[
      {
        description: 'Hotel Found Successfully',
        type: 'Object',
        arg: 'Hotel',
        root: true
      }
    ],
    http:{verb: 'get', path: '/byCityId/:cityid'},
    description:'Gets all hotels corresponding to the City Id'
  })
};
