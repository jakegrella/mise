import type { CollectionConfig } from 'payload'

export const Concepts: CollectionConfig = {
  slug: 'concepts',
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
      name: 'group',
      type: 'relationship',
      relationTo: 'groups',
      hasMany: false, // a concept can only belong to one group
      required: true, // a concept must belong to a group
    },
    {
      name: 'locations',
      type: 'join',
      collection: 'locations',
      on: 'concept',
    },
  ],
}
