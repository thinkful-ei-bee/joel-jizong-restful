DROP TABLE IF EXISTS bookmarks;
CREATE TABLE bookmarks (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  bookmark_title TEXT NOT NULL,
  bookmark_url TEXT NOT NULL,
  bookmark_desc TEXT,
  bookmark_rating INT
);