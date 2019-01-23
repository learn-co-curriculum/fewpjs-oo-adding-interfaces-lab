class Genre {
  constructor( title ) {
    this._title = title
  }

  get title() {
    return this._title
  }
}

class Info {
  constructor( title, date ) {
    this._title = title
    this._date = date
  }

  get title() {
    return this._title
  }

  get date() {
    return this._date
  }
}

class Creator {
  constructor( name ) {
    this._name = name
  }

  get name() {
    return this._name
  }
}

class Author extends Creator {
  static definition() {
    return "A creator of books, stories and other written media"
  }
}

class Director extends Creator {
  static definition() {
    return "A creator of movies, shows and other film based media"
  }
}

class Artist extends Creator {
  static definition() {
    return "A creator of music and artwork"
  }
}

class Media {
  constructor( creator, genre, info ) {
    this._creator = creator
    this._genre = genre
    this._info = info
  }

  get creator() {
    return this._creator
  }

  get genre() {
    return this._genre
  }

  get info() {
    return this._info
  }
}

class Book extends Media {
  static definition() {
    return "A written work consisting of pages bound together inside a cover"
  }
}

class Movie extends Media {
  static definition() {
    return "A motion picture"
  }
}

class Album extends Media {
  static definition() {
    return "A collection of recordings compiled together"
  }
}

class Catalog {
  constructor( mediaCollection = [] ) {
    this._mediaCollection = mediaCollection
  }

  set mediaCollection( newCollection ) {
    this._mediaCollection = newCollection
  }

  get mediaCollection() {
    return this._mediaCollection
  }

}

class CatalogInterface {
  set catalog( catalog ) {
    this._catalog = catalog
  }

  get catalog() {
    return this._catalog
  }

  get creators() {
    return [ ...new Set( this.catalog.mediaCollection.map( media => media.creator ) ) ]
  }

  get genres() {
    return [ ...new Set( this.catalog.mediaCollection.map( media => media.genre ) ) ]
  }

  get titles() {
    return [ ...new Set( this.catalog.mediaCollection.map( media => media.info.title ) ) ]
  }
}




class Search {
  set catalog( catalog ) {
    this._catalog = catalog
  }

  get catalog() {
    return this._catalog
  }
}

class SearchByCreator extends Search {
  find( string ) {
    return this.catalog.mediaCollection.filter( media => media.creator.name.toLowerCase().includes( string.toLowerCase() ) )
  }
}

class SearchByGenre extends Search {
  find( string ) {
    return this.catalog.mediaCollection.filter( media => media.genre.title.toLowerCase().includes( string.toLowerCase() ) )
  }
}

class SearchByTitle extends Search {
  find( string ) {
    return this.catalog.mediaCollection.filter( media => media.info.title.toLowerCase().includes( string.toLowerCase() ) )
  }
}



class SearchInterface {
  set searchType( searchType ) {
    this._searchType = searchType
  }

  get searchType() {
    return this._searchType
  }

  query( string ) {
    if ( typeof this.searchType.find === 'function' ) {
      return this.searchType.find( string )
    } else {
      throw 'Error: Invalid search type'
    }
  }
}