import { createTRPCRouter, publicProcedure } from '../server/trpc';


const users = [
  {id: 1, firstName: "Troy", lastName: "Polamalu", email: "43@steelers.com"},
  {id: 2, firstName: "Esteban", lastName: "Sanchez", email: "esteban@mail.com"},
  {id: 3, firstName: "Kevin", lastName: "Hart", email: "kevin@hart.com"},
]

export const userRouter = createTRPCRouter({
  findMany: publicProcedure.query(async () => {
    return Promise.resolve(users)
  })
})