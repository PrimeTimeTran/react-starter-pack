import { connect } from 'react-redux';

import { TodosPage as TodosPageComponent } from './TodosPage.component';

type IMappedProps = ReturnType<typeof mapStateToProps>;
type IDispatchedProps = typeof mapDispatchToProps;

export type IInjectedProps = IMappedProps & IDispatchedProps;

export type IProps = IInjectedProps;

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export const TodosPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosPageComponent);
