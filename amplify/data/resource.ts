import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Post: a.model({
    title: a.string(),
    content: a.string(),
    author: a.string(),
  }).authorization(
    allow => allow.owner()
  ),
  
  Booking: a.model({
    date: a.string(), // Store as ISO string
    time: a.string(),
    message: a.string(),
    status: a.enum(['pending', 'confirmed', 'cancelled']),
    userName: a.string(),
  }).authorization(
    allow => allow.owner()
  ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
