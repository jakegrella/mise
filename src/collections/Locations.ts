import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
  },
  auth: false,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: false,
    },
    {
      name: 'address',
      type: 'text',
      required: false,
      unique: false,
    },
    {
      name: 'concept',
      type: 'relationship',
      relationTo: 'concepts',
      hasMany: false,
      required: true, // a location must belong to a concept
    },
  ],
}
