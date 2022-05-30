import { Meta, Story } from '@storybook/react';
import { Default } from '.';

export default {
  title: 'Model/Page',
  component: Default,
  args: {
    children: 'Um texto qualquer',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ }}>
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    children: { type: 'string' }
  },
} as Meta;

export const DefaultPage = (args) => {
  return (
    <>
      <Default {...args} />
    </>
  );
};
