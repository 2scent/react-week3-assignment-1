import { fireEvent, render } from '@testing-library/react';

import List from './List';
import tasksDefault from './tasks';

describe('List', () => {
  const handleClick = jest.fn();

  const renderList = (tasksValue) => render((
    <List
      tasks={tasksValue}
      onClickDelete={handleClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when tasks is exists', () => {
    it('renders tasks', () => {
      const tasks = tasksDefault;
      const { container, getAllByRole } = renderList(tasks);

      expect(getAllByRole('listitem')).toHaveLength(tasks.length);
      tasks.forEach((it) => {
        expect(container).toHaveTextContent(it.title);
      });
    });
  });

  context('when tasks is empty', () => {
    it('renders empty message', () => {
      const tasks = [];
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('when clicking the button', () => {
    it('call handleClick', () => {
      const tasks = tasksDefault;
      const { getAllByText } = renderList(tasks);

      expect(handleClick).not.toBeCalled();
      fireEvent.click(getAllByText('완료')[0]);
      expect(handleClick).toBeCalled();
    });
  });
});
