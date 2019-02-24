import React from 'react';
import moment from 'moment';

const SearchResults = props => {
  const { results } = props;

  const items =
    results.items &&
    results.items.map(item => {
      const htmlUrl = item.html_url.split('/');
      const userName = htmlUrl[3];
      const repoName = htmlUrl[4];

      return (
        <div className='result' key={item.id}>
          <div>
            {/* Title with hyperlink */}
            <a href={item.html_url} target='_blank' rel='noopener noreferrer'>
              {item.title}
            </a>
          </div>

          <p>
            {/* First 300 characters of body */}
            {item.body.length === 0 ? '(no text)' : item.body.substr(0, 300)}
            {item.body.length > 300 ? '...' : null}
          </p>

          {/* User and Repo name */}
          <div>{userName + '/' + repoName}</div>

          {/* How long ago created */}
          <div>{moment(item.created_at).fromNow()}</div>

          {/* Some issues have an array of labels */}
          <div>
            {item.labels.map(label => {
              const labelColor = '#' + label.color;
              return (
                <span key={label.id} style={{ color: labelColor }}>
                  {label.name}
                </span>
              );
            })}
          </div>

          <br />
          <br />
        </div>
      );
    });

  return <div className='results'>{items}</div>;
};

export default SearchResults;
