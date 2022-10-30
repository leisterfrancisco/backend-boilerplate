import { Server, Request, ResponseToolkit } from '@hapi/hapi'
import Joi from 'joi'

import { IUserRequest } from '../models/user/interfaces'
import { userService } from '../services'

export const routes = (server: Server) => {
  server.route({
    method: 'POST',
    path: '/create-user',
    handler: async (request: IUserRequest) => {
      const res = await userService.create(request.payload.input.user)

      return {
        data: 'data'
      }
    },
    options: {
      validate: {
        payload: Joi.object({
          input: Joi.object({
            user: Joi.object().required()
          }).required()
        }).options({ stripUnknown: true })
      }
    }
  })
}
