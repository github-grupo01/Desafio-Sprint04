const EmployeeService = require('../service/EmployeeService');

class EmployeeController {

	async create(req, res) {
		try {
			const result = await EmployeeService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json({
				message: 'Bad Request', 
				details: [{ 
					message: error.message 
				}] 
			});
		}
	}

	async listAll(req, res) {
		try {
			const result = await EmployeeService.listAll(req.query);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	async getById(req, res) {
		try {
			const result = await EmployeeService.getById(req.params.id);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({
				message: 'Bad Request', 
				details: [{ 
					message: error.message 
				}] 
			});
		}

	}

	async updateEmployee(req, res) {
		try {
			const result = await EmployeeService.update(req.params.id, req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({
				message: 'Bad Request', 
				details: [{ 
					message: error.message 
				}] 
			});
		}
	
	}

	async deleteEmployee(req, res) {
		try {
			const result = await EmployeeService.delete(req.params.id);
			return res.status(204).json(result);
		} catch (error) {
			return res.status(400).json({
				message: 'Bad Request', 
				details: [{ 
					message: error.message 
				}] 
			});
		}

	}
}

module.exports = new EmployeeController ();
