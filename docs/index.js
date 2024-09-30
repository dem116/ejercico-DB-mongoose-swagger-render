const basicInfo = require('./basicInfo');
const components = require('./components');
const tasks = require('./tasks');

module.exports = {
  openapi: '3.0.3', 
  info: basicInfo,   
  components: components, 
  paths: tasks.paths  
};
