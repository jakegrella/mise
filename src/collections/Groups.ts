import type { CollectionConfig } from 'payload'

export const Groups: CollectionConfig = {
  slug: 'groups',
  admin: {
    useAsTitle: 'name',
  },
  auth: false,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: false, // two companies could have the same name
    },
    {
      name: 'users',
      type: 'join',
      collection: 'users',
      on: 'group',
    },
    {
      name: 'concepts',
      type: 'join',
      collection: 'concepts',
      on: 'group',
    },
  ],
}
