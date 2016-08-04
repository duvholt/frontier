import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleGroup from '../components/ArticleGroup';
import ArticleContainer from '../containers/ArticleContainer';

class ArticleGroupContainer extends Component {
  render() {
    return (
      <ArticleGroup>
        {
          this.props.articles.map((article, i) => (
            <div key={ i } className="Article-wrapper">
              <ArticleContainer { ...article } />
            </div>
          ))
        }
      </ArticleGroup>
    );
  }
}

const mapStateToProps = ({ articles, articleGroups }, { id }) => {
  return {
    articles: articleGroups[id].map(articleId => articles[articleId])
  };
}

export default connect(mapStateToProps)(ArticleGroupContainer);
