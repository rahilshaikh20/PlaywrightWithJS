// @ts-check
import { test, expect } from '@playwright/test';
import { request } from 'http';
const {URI,name} = require('../test-data/Constants')

var userID;

test('TC005_1: API testing GET Request' , async ({ request }) => {

  //GET Request
  const response = await request.get(URI+'?page=2');
  console.log(await response.json());  
  console.log('!!!! ...Status Code for GET is: ', await response.status())
  expect (response.status()).toBe(200);

})
test('TC005_2: API testing POST Request' , async ({ request }) => {

  //POST Request
  const response = await request.post(URI,
    {data:{ "name": name, //getting value from constant
    "job": "Automation Lead" //Hardcoded 
    },
    headers:{
      "Accept":"application/json",
      "x-api-key": "reqres-free-v1"
    }
    }
  );
  console.log(await response.json());  
  console.log('!!!! ...Status Code for POST is: ',await response.status())
  expect (response.status()).toBe(201);
  //Get the ID for Post and Delete
 var resp = await response.json()
 userID = resp.id;
 console.log('!!!! ...ID generated is: ',userID)

})
test('TC005_3: API testing PUT Request' , async ({ request }) => {

  //PUT Request
  const response = await request.put(URI+'/'+userID,
    {data:{ 
    "name": name, //getting value from constant
    "job": "Automation Lead" //Hardcoded 
  },
    headers:{
      "Accept":"application/json",
      "x-api-key": "reqres-free-v1"
    }
    }

  );
  console.log(await response.json());  
  console.log('!!!! ...Status Code for PUT is: ',await response.status())
  expect (response.status()).toBe(200) 
  console.log('!!!! ...ID generated is: ',userID)
})
test('TC005_4: API testing DELETE Request' , async ({ request }) => {

  //DELETE Request
  const response = await request.put(URI+'/'+userID,
    {data:{ 
    "name": "Rahil Shaikh",
    "job": "Automation Lead"},
    headers:{
      "Accept":"application/json",
      "x-api-key": "reqres-free-v1"
    }
    }

  );
  console.log(await response.json());  
  console.log('!!!! ...Status Code for DELETE is: ',await response.status())
  
})
;