function makeBookmarksArray() {
  return [
    {
      id: 1,
      bookmark_title: 'Task One',
      bookmark_url: 'http://google.com',
      bookmark_desc: 'This is card one',
      bookmark_rating: 4
    },
  ];
}

module.exports = {
  makeBookmarksArray,
}