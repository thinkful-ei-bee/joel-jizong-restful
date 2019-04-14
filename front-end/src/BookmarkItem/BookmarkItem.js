import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import BookmarksContext from '../BookmarksContext';
import config from '../config';
import './BookmarkItem.css';

function deleteBookmarkRequest(bookmarkId, cb) {
  fetch(config.API_ENDPOINT + `/${bookmarkId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'authorization': `bearer ${config.API_KEY}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(data => {
      cb(bookmarkId)
    })
    .catch(error => {
      console.error(error)
    })
}

export default function BookmarkItem(props) {
  return (
    <BookmarksContext.Consumer>
      {(context) => (
        <li className='BookmarkItem'>
          <div className='BookmarkItem__row'>
            <h3 className='BookmarkItem__title'>
              <a
                href={props.bookmark_url}
                target='_blank'
                rel='noopener noreferrer'>
                {props.bookmark_title}
              </a>
            </h3>
            <Rating value={props.bookmark_rating} />
          </div>
          <p className='BookmarkItem__description'>
            {props.bookmark_desc}
          </p>
          <div className='BookmarkItem__buttons'>
            <Link to={`/edit/${props.id}`}>
              Edit
            </Link>
            {' '}
            <button
              className='BookmarkItem__description'
              onClick={() =>
                deleteBookmarkRequest(props.id, context.deleteBookmark)
              }
            >
              Delete
            </button>
          </div>
        </li>
      )}
    </BookmarksContext.Consumer>
  )
}

BookmarkItem.defaultProps = {
  onClickDelete: () => {},
}

BookmarkItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  bookmark_title: PropTypes.string.isRequired,
  bookmark_url: PropTypes.string.isRequired,
  bookmark_desc: PropTypes.string,
  bookmark_rating: PropTypes.number.isRequired,
  onClickDelete: PropTypes.func,
}
