import {mock, mockAxios} from '../mocks'
import Data from '../mocks/food/food.json'
mock.onGet("/foods").reply(200, {
    users: Data,
  });
  
  export  const foodApi = mockAxios.get("/foods")