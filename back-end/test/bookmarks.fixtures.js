function makeBookmarksArray() {
  return [
    {
      id: 1,
      bookmark_title: 'Task One',
      bookmark_url: 'http://google.com',
      bookmark_desc: 'This is only a test',
      bookmark_rating: 4
    },
    {
      id: 2,
      bookmark_title: 'Airtable',
      bookmark_url: 'http://airtable.com',
      bookmark_desc: 'A better spreadsheet',
      bookmark_rating: 4
    },
  ];
}

module.exports = {
  makeBookmarksArray,
}