var Code = require('../models/code');

/**
 * [Saves user code]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
module.exports.save = function (req, res) {
	var code = new Code(req.body);

	var query 	= {"author" : code.author};
	var update 	= {"code" : code.code};
	var options = {new: true};

	Code.findOneAndUpdate(query, update, options, function(err, results) {
  		if (results === null ) {
    		/* Insert Code */
    		code.save(function (err, result){
    			res.json(result);
    		});
  		} else {

  			return res.json(results);
  		}
	});
}

/**
 * [Load user code]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
module.exports.load = function (req, res) {
	var code = new Code(req.body);
	Code.find({"author" : code.author}, function(err, results){
		console.log(results);
		res.json(results);
	});
}