const model = require("../model/crudModel");


module.exports = {
	index:(request,response)=>{
		model.getData((err,result)=>{
			this.laporan = result;
			response.render('index',{data:this.laporan}); 
			// response.send(result[0]['nama'])
		})	
	},

	insert:(request,response)=>{
		model.pushData(request.body,(err,result)=>{
			response.redirect('http://localhost:3010/crud/home')
		})
	},


	update:(request,response)=>{
		model.updateData(request.body,(err,result)=>{
			response.redirect('http://localhost:3010/crud/home')
		})
	},

	destroy:(request,response)=>{
		model.destroyData(request.params.id,(err,result)=>{
			response.redirect('http://localhost:3010/crud/home')
		})
	}




}