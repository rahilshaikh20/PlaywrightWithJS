import test = require("@playwright/test");
import constants = require("../utils/Constants"); //Will import everything from Constants. Access using var.value
import uri_val from '../utils/Constants'; //Will import everything from Constants. Access using var.value
const {Age} = require("../utils/Constants"); //Will import only Age from Constants

test('Practice TC', async({page})=>{

  console.log('Name is: ',constants.name)
  console.log('Email is:', constants.email)
  console.log('URI is:', uri_val.URI)
  console.log('Age is: ',Age)

})