import { Server } from '@hapi/hapi'

import * as serverRoute from './server.route'
import * as userRoute from './user.route'

const routes = (server: Server) => {
  serverRoute.routes(server)
  userRoute.routes(server)
}

export default routes
