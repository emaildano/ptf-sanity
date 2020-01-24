import icon from 'react-icons/lib/md/store'

export default {
  name: 'location',
  title: 'Locations',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'E.g.: Monk\'s Café'
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
    },
    {
      name: 'onTap',
      title: 'On Tap',
      type: 'array',
      of: [{type: 'beerInfo'}]
    },
    {
      name: 'onTapNitro',
      title: 'On Tap (Nitro)',
      type: 'array',
      of: [{type: 'beerInfo'}]
    },
    {
      name: 'onTapCask',
      title: 'On Tap (Cask)',
      type: 'array',
      of: [{type: 'beerInfo'}]
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
}
