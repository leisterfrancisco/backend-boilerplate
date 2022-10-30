import { userModel } from '../models'

export const create = async (user: userModel.interaces.IUser) => {
  return await userModel.queries.add(user)
}
