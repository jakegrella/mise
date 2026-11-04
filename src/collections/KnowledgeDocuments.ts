import type { CollectionConfig } from 'payload'

export const KnowledgeDocuments: CollectionConfig = {
  slug: 'knowledge-documents',
  fields: [
    {
      name: 'group',
      type: 'relationship',
      relationTo: 'groups',
      hasMany: false, // a knowledge document can only belong to one group
      required: true, // a knowledge document must belong to a group
    },
  ],
}
