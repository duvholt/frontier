import React, { Component } from 'react';
import Handlebar from '../components/Handlebar';
import * as Actions from '../actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const DEFAULT_ALIGNMENT = 'left';

class HandlebarContainer extends Component {
  constructor(props) {
    super(props);

    this.newArticleGroup = this.newArticleGroup.bind(this);
    this.deleteArticleGroup = this.deleteArticleGroup.bind(this);
  }

  deleteArticleGroup() {
    const { actions, groupId } = this.props;
    actions.deleteArticleGroup(groupId);
  }

  newArticleGroup() {
    const { actions, index } = this.props;
    actions.newArticleGroup(9, index, DEFAULT_ALIGNMENT); // newId, index of this articleGroup, align
  }

  render(){
    return (
      <Handlebar
        deleteArticleGroup={ this.deleteArticleGroup }
        newArticleGroup={ this.newArticleGroup }
      />
    )
  }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = (state, props) => ({
  index: state.groupOrder.indexOf(props.groupId)
});

export default connect(mapStateToProps, mapDispatchToProps)(HandlebarContainer)
