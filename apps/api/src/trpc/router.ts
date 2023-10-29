import { UserSchema } from "common/schemas/user.schema";
import { publicResource, router } from ".";
import { USerServices } from "../services/user.service";

const userServices = new USerServices();

export const appRouter = router({
  getUsers: publicResource.query(async ()=>{
   return userServices.getUsers()
  }),

  createUser: publicResource.input(UserSchema).mutation(async (opts) => {
    const { input } = opts;
    const user = await userServices.createUser(input);
    return user
  }),
});

export type AppRouter = typeof appRouter;
