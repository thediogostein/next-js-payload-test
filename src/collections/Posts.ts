import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'publishedAt', 'status'] },
  access: {
    read: ({ req }) => req.user ? true : { status: { equals: 'published' } },
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true, admin: { description: 'Used in the URL, e.g. /posts/my-first-post' } },
    { name: 'excerpt', type: 'textarea', required: true },
    { name: 'content', type: 'richText', required: true },
    { name: 'publishedAt', type: 'date', required: true, admin: { date: { pickerAppearance: 'dayAndTime' } } },
    { name: 'status', type: 'select', defaultValue: 'draft', required: true, options: [{ label: 'Draft', value: 'draft' }, { label: 'Published', value: 'published' }] },
  ],
}
