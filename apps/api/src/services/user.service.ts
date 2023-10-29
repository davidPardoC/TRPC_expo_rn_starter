import { UserSchema } from 'common/schemas/user.schema'
import { z } from 'zod'

type User = z.infer<typeof UserSchema>
const users:User[] = []
 
export class USerServices{
    createUser(user: User){
        users.push(user)
        return user
    }

    getUsers():User[]{
        return users
    }
}