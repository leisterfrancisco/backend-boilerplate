import { gql } from 'graphql-request'
import hasura from '../../utils/core/hasura.core'
import { IUser } from './interfaces'

export const add = async (user: IUser) => {
  const { dateOfBirth, ...userData } = user
  const mutation = gql`
    mutation ($user: user_insert_input!) {
      insert_user_one(
        object: $user
        on_conflict: { constraint: user_pkey, update_columns: [username, name] }
      ) {
        id
      }
    }
  `
  const { insert_user_one: data } = await hasura.request(mutation, {
    user: { ...userData, date_of_birth: dateOfBirth }
  })

  return data
}
