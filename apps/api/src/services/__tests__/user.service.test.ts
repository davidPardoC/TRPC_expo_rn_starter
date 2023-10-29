import { USerServices } from "../user.service"
describe("User Service", ()=>{
    it("Should cerate user",async()=>{
        const userServices = new USerServices()
        const user = {email:'test-email', password:'test-password'}
        await userServices.createUser(user)
        expect(await userServices.getUsers().length).toEqual(1)
    })
})