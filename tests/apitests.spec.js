import { test, expect } from '@playwright/test';
test('Get API Request-Single User ', async({request}) =>{
    const baseURL='https://reqres.in'
    const callstring='/api/users/2'
    const response = await request.get((baseURL).concat(callstring))
    expect(response.status()).toBe(200);
    console.log(await response.json());
}) 

test('Get API Request-User Not found ', async({request}) =>{
    const response = await request.get('https://reqres.in/api/users/26')
    expect(response.status()).toBe(404);
    console.log(await response.json());
}) 

test('Get API Request-All Users', async({request}) =>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    expect(response.status()).toBe(200);
    console.log(await response.json());
})

test('Get API Request-List<RESOURCE> ', async({request}) =>{
    const response = await request.get('https://reqres.in/api/unknown')
    expect(response.status()).toBe(200);
    console.log(await response.json());
})