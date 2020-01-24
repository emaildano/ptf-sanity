export default {
  name: "beerInfo",
  title: "Beer Info",
  type: "object",
  fields: [
    {
      name: "beer",
      title: "Beer",
      type: "reference",
      to: [{ type: "beer" }]
    }
  ],
  preview: {
    select: {
      name: "beer.name"
    },
    prepare(selection) {
      const { name } = selection;
      return {
        title: name
      };
    }
  }
};
