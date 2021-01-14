import React, { useState, Component, ReactNode } from 'react';
import { IProps } from './TodosPage';
import { Grid, TextField, Select, MenuItem, Button } from '@material-ui/core';
import { Buttons } from 'components/Buttons';
import { i18n } from 'utils/lib/i18n';
import { MainWrapper } from 'components/MainWrapper';
import cra from 'assets/images/cra.png';

type Todo = {
  text: string;
  complete: boolean;
}

interface TodoListItemProps {
  todo: Todo
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <div style={{ flexDirection: 'row' }}>
      <input type="checkbox" checked={todo.complete} />
      <input type="checkbox" checked={true} />
      <input type="checkbox" checked={false} />
      <strong>{todo.text}</strong>
    </div>
  )
}

const todos: Array<Todo> = [
  { text: 'Walk Dog', complete: true },
  { text: 'Code an app', complete: false },
  { text: 'Learn TypeScript', complete: false },
]

export class TodosPage extends Component<IProps> {
  public render(): ReactNode {
    return (
      <MainWrapper>
        <div className="home">
          <Grid container spacing={3}>
            <Grid item xs={12} className="text-center">
              <TodoListItem todo={{ text: 'gogogo', complete: true }}></TodoListItem>
            </Grid>
          </Grid>
        </div>
      </MainWrapper>
    );
  }
}
