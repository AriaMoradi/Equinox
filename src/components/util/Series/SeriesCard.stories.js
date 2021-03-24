import StorybookWrapper from "../../../stories/Wrapper.vue";
import StorybookContainer from "../../../stories/Container.vue";
import SeriesCard from "./SeriesCard.vue";

export default {
  title: "App/Info",
  component: SeriesCard,
};

const Template = (args) => ({
  components: {
    SeriesCard,
    StorybookWrapper,
    StorybookContainer,
  },
  setup() {
    return { args };
  },
  template: `
  <storybook-wrapper>
    <storybook-container :width="\`$\{args.width}px\`">
    <series-card :small="args.small" :large="args.large" />
    </storybook-container>
  </storybook-wrapper>
  `,
});

export const SeriesCardHorizontal = Template.bind({});
SeriesCardHorizontal.args = {
  small: true,
  width: 300,
};

export const SeriesCardLarge = Template.bind({});
SeriesCardLarge.args = {
  large: true,
  width: 180,
};
