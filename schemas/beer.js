import icon from "react-icons/lib/go/beer";

export default {
  name: "beer",
  title: "Beers",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "E.g.: Pliny the Elder"
    },
    {
      name: "brewery",
      title: "Brewery",
      type: "reference",
      to: [{ type: "brewery" }],
      description: "E.g.: Pliny the Elder"
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100
      }
    }
  ],
  preview: {
    select: { title: "name" }
  }
};
