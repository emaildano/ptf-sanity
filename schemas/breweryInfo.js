export default {
  name: "breweryInfo",
  title: "Brewery Info",
  type: "object",
  fields: [
    {
      name: "brewery",
      title: "Brewery",
      type: "reference",
      to: [{ type: "brewery" }]
    }
  ],
  preview: {
    select: {
      name: "brewery.name"
    },
    prepare(selection) {
      const { name } = selection;
      return {
        title: name
      };
    }
  }
};
