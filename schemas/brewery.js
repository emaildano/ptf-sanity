import icon from 'react-icons/lib/fa/truck'

export default {
  name: 'brewery',
  title: 'Breweries',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent'
    },
  ],
  preview: {
    select: {
      title: 'name'
    },
  }
}
