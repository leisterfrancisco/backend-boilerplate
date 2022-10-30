import { Request } from '@hapi/hapi'

export interface IUser {
  id: string
  username: string
  name: string
  lastname: string
  dateOfBirth: string
}

export interface IUserRequest extends Request {
  payload: {
    input: {
      user: IUser
    }
  }
}
