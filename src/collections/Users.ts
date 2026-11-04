import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: false, // two users could have the same name
    },
    {
      name: 'group',
      type: 'relationship',
      relationTo: 'groups',
      hasMany: false, // a user can only belong to one group
      required: true, // a user must belong to a group
    },
  ],
}
