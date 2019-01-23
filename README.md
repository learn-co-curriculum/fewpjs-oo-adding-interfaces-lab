# Adding Interfaces Lab

## Learning Goals

- Practice creating interface classes

## Introduction

In the previous lab, we created a library catalog with search functionality. At
the end though, we were left with a `Library` class with many responsibilities.
The class contained three different search methods, along with serving up
information about the library and some additional methods for getting all
authors or genres.

In this lab, we're going to redesign and expand our library catalog system. Most
modern libraries don't just contain books - they also have movies and music, all
contained within the library's catalog.

To adhere to the single responsibility principle, we also need to rethink the
structure of the application.

We're going to be building _two_ interface classes for this lab - one that
handles the three different types of searches and another that retrieves
information such as _all_ genres or titles.

## Instructions

Use the tests to build out each class, starting from the most basic classes.

#### Genre

- has a `title` getter that returns the `_title` property

#### Info

- has a private `_title` property
- has a private `_date` property
- has a `title` getter that returns `this._title`
- has a `date` getter that returns `this._date`

#### Author

- has a private `_name` property
- has a `name` getter that returns `this._name`

#### Director

- has a private `_name` property
- has a `name` getter that returns `this._name`

#### Artist

- has a private `_name` property
- has a `name` getter that returns `this._name`

#### Book

- has a private `_creator` property
- has a private `_genre` property
- has a private `_info` property
- has an `creator` getter that returns `this._creator`
- has a `genre` getter that returns `this._genre`
- has an `info getter that returns`this.\_info`

#### Movie

- has a private `_creator` property
- has a private `_genre` property
- has a private `_info` property
- has an `creator` getter that returns `this._creator`
- has a `genre` getter that returns `this._genre`
- has an `info getter that returns`this.\_info`

#### Album

- has a private `_creator` property
- has a private `_genre` property
- has a private `_info` property
- has an `creator` getter that returns `this._creator`
- has a `genre` getter that returns `this._genre`
- has an `info getter that returns`this.\_info`

#### Catalog

- has a private `_mediaCollection` property
- has an `mediaCollection` getter that returns `this._mediaCollection`
- has an `mediaCollection` setter that reassigns the `\_mediaCollection``

#### CatalogInterface

- has a `catalog` getter that returns `this._catalog`
- has a `creators` getter that returns all unique author, artist and musician instances in the catalog
- has a `genres` getter that returns all unique genre instances in the catalog
- has a `titles` getter that returns the titles of all book, movis and ablum instances in the catalog

#### SearchByCreator

- has a `catalog` getter that returns `this._catalog`
- has a `find()` method that takes in a String and returns all catalog items with a matching title

#### SearchByGenre

- has a `catalog` getter that returns `this._catalog`
- has a `find()` method that takes in a String and returns all catalog items with a matching title

#### SearchByTitle

- has a `catalog` getter that returns `this._catalog`
- has a `find()` method that takes in a String and returns all catalog items with a matching title

#### SearchInterface

- has a `searchType` getter that returns `this._searchType`
- has a `query()` method that uses any `find()` method belonging to the `searchType`

## Conclusion

With the `CatalogInterface` and `SearchInterface` classes, we're able to
separate out the responsibility of retrieving information from the actual
classes that _have_ that information. These interfaces provide a way for a
user, or even a different part of the application, to interact with our data
in a controlled way.
