describe( "index.html", () => {
  describe( "Genre", () => {
    let pop
    let fiction
    let rock
    let science

    before( () => {
      pop = new Genre( "pop" )
      fiction = new Genre( "fiction" )
      rock = new Genre( "rock" )
      science = new Genre( "science" )
    } )

    it( "has a `title` getter that returns the `_title` property", () => {
      expect( pop.title ).to.equal( "pop" )
      expect( pop._title ).to.equal( "pop" )
      expect( fiction.title ).to.equal( "fiction" )
      expect( fiction._title ).to.equal( "fiction" )
    } )


  } )

  describe( "Info", () => {
    let title
    let date
    let publisher
    let info
    before( () => {
      title = "Sutree"
      date = '1979'
      info = new Info( title, date )
    } )

    it( "has a private `_title` property", () => {
      expect( info._title ).to.equal( "Sutree" )
    } )

    it( "has a private `_date` property", () => {
      expect( info._date ).to.equal( "1979" )
    } )


    it( "has a `title` getter that returns `this._title`", () => {
      expect( info.title ).to.equal( "Sutree" )
    } )

    it( "has a `date` getter that returns `this._date`", () => {
      expect( info.date ).to.equal( "1979" )
    } )

  } )

  describe( "Author", () => {
    let cormac
    before( () => {
      cormac = new Artist( "Cormac McCarthy" )
    } )


    it( "has a private `_name` property", () => {
      expect( cormac._name ).to.equal( "Cormac McCarthy" )
    } )

    it( "has a `name` getter that returns `this._name`", () => {
      expect( cormac.name ).to.equal( "Cormac McCarthy" )
    } )
  } )

  describe( "Director", () => {
    let james
    before( () => {
      james = new Artist( "James Cameron" )
    } )


    it( "has a private `_name` property", () => {
      expect( james._name ).to.equal( "James Cameron" )
    } )

    it( "has a `name` getter that returns `this._name`", () => {
      expect( james.name ).to.equal( "James Cameron" )
    } )
  } )

  describe( "Artist", () => {
    let elvis
    before( () => {
      elvis = new Artist( "Elvis Presley" )
    } )


    it( "has a private `_name` property", () => {
      expect( elvis._name ).to.equal( "Elvis Presley" )
    } )

    it( "has a `name` getter that returns `this._name`", () => {
      expect( elvis.name ).to.equal( "Elvis Presley" )
    } )
  } )

  describe( "Book", () => {
    let cormac
    let genre
    let info
    let book
    before( () => {
      cormac = new Artist( "Cormac McCarthyy" )
      genre = new Genre( "Fiction" )
      info = new Info( "No Country For Old Men", "2005" )
      book = new Book( cormac, genre, info )
    } )

    it( "has a private `_creator` property", () => {
      expect( book._creator ).to.eql( cormac )
    } )
    it( "has a private `_genre` property", () => {
      expect( book._genre ).to.eql( genre )
    } )
    it( "has a private `_info` property", () => {
      expect( book._info ).to.eql( info )
    } )

    it( "has an `creator` getter that returns `this._creator`", () => {
      expect( book.creator ).to.eql( cormac )
    } )
    it( "has a `genre` getter that returns `this._genre`", () => {
      expect( book.genre ).to.eql( genre )
    } )
    it( "has an `info getter that returns `this._info`", () => {
      expect( book.info ).to.eql( info )
    } )
  } )

  describe( "Movie", () => {
    let james
    let genre
    let info
    let movie

    before( () => {
      james = new Director( "James Cameron" )
      genre = new Genre( "Historical Fiction" )
      info = new Info( "Titanic", "1997" )
      movie = new Movie( james, genre, info )
    } )

    it( "has a private `_creator` property", () => {
      expect( movie._creator ).to.eql( james )
    } )

    it( "has a private `_genre` property", () => {
      expect( movie._genre ).to.eql( genre )
    } )
    it( "has a private `_info` property", () => {
      expect( movie._info ).to.eql( info )
    } )

    it( "has an `creator` getter that returns `this._creator`", () => {
      expect( movie.creator ).to.eql( james )
    } )
    it( "has a `genre` getter that returns `this._genre`", () => {
      expect( movie.genre ).to.eql( genre )
    } )
    it( "has an `info getter that returns `this._info`", () => {
      expect( movie.info ).to.eql( info )
    } )
  } )

  describe( "Album", () => {
    let elvis
    let genre
    let info
    let album
    before( () => {
      elvis = new Artist( "Elvis Presley" )
      genre = new Genre( "Rock" )
      info = new Info( "Moody Blue", "1977" )
      album = new Album( elvis, genre, info )
    } )

    it( "has a private `_creator` property", () => {
      expect( album._creator ).to.eql( elvis )
    } )
    it( "has a private `_genre` property", () => {
      expect( album._genre ).to.eql( genre )
    } )
    it( "has a private `_info` property", () => {
      expect( album._info ).to.eql( info )
    } )

    it( "has an `creator` getter that returns `this._creator`", () => {
      expect( album.creator ).to.eql( elvis )
    } )
    it( "has a `genre` getter that returns `this._genre`", () => {
      expect( album.genre ).to.eql( genre )
    } )
    it( "has an `info getter that returns `this._info`", () => {
      expect( album.info ).to.eql( info )
    } )
  } )

  describe( "Catalog", () => {
    let info
    let info2
    let info3
    let cormac
    let elvis
    let james
    let fiction
    let rock
    let catalog
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      elvis = new Artist( "Elvis Presley" )
      james = new Artist( "James Cameron" )

      fiction = new Genre( "Fiction" )
      rock = new Genre( "Rock" )

      info = new Info( "All The Pretty Horses", "1992" )
      info2 = new Info( "Moody Blue", "1977" )
      info3 = new Info( "Titanic", "1997" )
      book = new Book( cormac, fiction, info )
      album = new Album( elvis, rock, info2 )
      movie = new Movie( james, fiction, info3 )
      catalog = new Catalog( [ book, album ] )
    } )

    it( "has a private `_mediaCollection` property", () => {
      expect( catalog._mediaCollection ).to.eql( [ book, album ] )
    } )

    it( "has an `mediaCollection` getter that returns `this._mediaCollection`", () => {
      expect( catalog.mediaCollection ).to.eql( [ book, album ] )
    } )

    it( "has an `mediaCollection` setter that reassigns the `_mediaCollection``", () => {
      catalog.mediaCollection = [ book, album, movie ]
      expect( catalog.mediaCollection ).to.eql( [ book, album, movie ] )
    } )
  } )

  describe( "CatalogInterface", () => {
    let info
    let info2
    let info3
    let cormac
    let elvis
    let james
    let fiction
    let rock
    let catalog
    let catalogInterface
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      elvis = new Artist( "Elvis Presley" )
      james = new Artist( "James Cameron" )

      fiction = new Genre( "Fiction" )
      rock = new Genre( "Rock" )

      info = new Info( "All The Pretty Horses", "1992" )
      info2 = new Info( "Moody Blue", "1977" )
      info3 = new Info( "Titanic", "1997" )
      book = new Book( cormac, fiction, info )
      album = new Album( elvis, rock, info2 )
      movie = new Movie( james, fiction, info3 )
      catalog = new Catalog( [ book, album, movie ] )
      catalogInterface = new CatalogInterface()
      catalogInterface.catalog = catalog
    } )

    it( "has a `catalog` getter that returns `this._catalog`", () => {
      expect( catalogInterface.catalog ).to.eql( catalog )
    } )

    it( "has a `creators` getter that returns all unique author, artist and musician instances in the catalog", () => {
      expect( catalogInterface.creators ).to.eql( [ cormac, elvis, james ] )
    } )

    it( "has a `genres` getter that returns all unique genre instances in the catalog", () => {
      expect( catalogInterface.genres ).to.eql( [ fiction, rock ] )
    } )

    it( "has a `titles` getter that returns the titles of all book, movis and ablum instances in the catalog", () => {
      expect( catalogInterface.titles ).to.eql( [ "All The Pretty Horses", "Moody Blue", "Titanic" ] )
    } )

  } )

  describe( "SearchByCreator", () => {
    let info
    let info2
    let info3
    let cormac
    let elvis
    let james
    let fiction
    let rock
    let catalog
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      elvis = new Artist( "Elvis Presley" )
      james = new Artist( "James Cameron" )

      fiction = new Genre( "Fiction" )
      rock = new Genre( "Rock" )

      info = new Info( "All The Pretty Horses", "1992" )
      info2 = new Info( "Moody Blue", "1977" )
      info3 = new Info( "Titanic", "1997" )
      book = new Book( cormac, fiction, info )
      album = new Album( elvis, rock, info2 )
      movie = new Movie( james, fiction, info3 )
      catalog = new Catalog( [ book, album, movie ] )
      searchByCreator = new SearchByCreator()
      searchByCreator.catalog = catalog
    } )

    it( "has a `catalog` getter that returns `this._catalog`", () => {
      expect( searchByCreator.catalog ).to.eql( catalog )
    } )

    it( "has a `find()` method that takes in a String and returns all catalog items with a matching title", () => {
      expect( searchByCreator.find( "Elvis" ) ).to.eql( [ album ] )
      expect( searchByCreator.find( "a" ) ).to.eql( [ book, movie ] )
      expect( searchByCreator.find( "es" ) ).to.eql( [ album, movie ] )
    } )
  } )

  describe( "SearchByGenre", () => {
    let info
    let info2
    let info3
    let cormac
    let elvis
    let james
    let fiction
    let rock
    let catalog
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      elvis = new Artist( "Elvis Presley" )
      james = new Artist( "James Cameron" )

      fiction = new Genre( "Fiction" )
      rock = new Genre( "Rock" )

      info = new Info( "All The Pretty Horses", "1992" )
      info2 = new Info( "Moody Blue", "1977" )
      info3 = new Info( "Titanic", "1997" )
      book = new Book( cormac, fiction, info )
      album = new Album( elvis, rock, info2 )
      movie = new Movie( james, fiction, info3 )
      catalog = new Catalog( [ book, album, movie ] )
      searchByGenre = new SearchByGenre()
      searchByGenre.catalog = catalog
    } )

    it( "has a `catalog` getter that returns `this._catalog`", () => {
      expect( searchByGenre.catalog ).to.eql( catalog )
    } )

    it( "has a `find()` method that takes in a String and returns all catalog items with a matching title", () => {
      expect( searchByGenre.find( "fiction" ) ).to.eql( [ book, movie ] )
      expect( searchByGenre.find( "roc" ) ).to.eql( [ album ] )
      expect( searchByGenre.find( "o" ) ).to.eql( [ book, album, movie ] )
    } )
  } )

  describe( "SearchByTitle", () => {
    let info
    let info2
    let info3
    let cormac
    let elvis
    let james
    let fiction
    let rock
    let catalog
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      elvis = new Artist( "Elvis Presley" )
      james = new Artist( "James Cameron" )

      fiction = new Genre( "Fiction" )
      rock = new Genre( "Rock" )

      info = new Info( "All The Pretty Horses", "1992" )
      info2 = new Info( "Moody Blue", "1977" )
      info3 = new Info( "Titanic", "1997" )
      book = new Book( cormac, fiction, info )
      album = new Album( elvis, rock, info2 )
      movie = new Movie( james, fiction, info3 )
      catalog = new Catalog( [ book, album, movie ] )
      searchByTitle = new SearchByTitle()
      searchByTitle.catalog = catalog
    } )

    it( "has a `catalog` getter that returns `this._catalog`", () => {
      expect( searchByTitle.catalog ).to.eql( catalog )
    } )

    it( "has a `find()` method that takes in a String and returns all catalog items with a matching title", () => {
      expect( searchByTitle.find( "Moody Blue" ) ).to.eql( [ album ] )
      expect( searchByTitle.find( "e" ) ).to.eql( [ book, album ] )
      expect( searchByTitle.find( "a" ) ).to.eql( [ book, movie ] )
    } )
  } )

  describe( "SearchInterface", () => {
    let info
    let info2
    let info3
    let cormac
    let elvis
    let james
    let fiction
    let rock
    let catalog
    let searchByCreator
    let searchByGenre
    let searchByTitle
    let searchInterface

    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      elvis = new Artist( "Elvis Presley" )
      james = new Artist( "James Cameron" )

      fiction = new Genre( "Fiction" )
      rock = new Genre( "Rock" )

      info = new Info( "All The Pretty Horses", "1992" )
      info2 = new Info( "Moody Blue", "1977" )
      info3 = new Info( "Titanic", "1997" )
      book = new Book( cormac, fiction, info )
      album = new Album( elvis, rock, info2 )
      movie = new Movie( james, fiction, info3 )
      catalog = new Catalog( [ book, album, movie ] )
      searchByCreator = new SearchByCreator()
      searchByCreator.catalog = catalog
      searchByGenre = new SearchByGenre()
      searchByGenre.catalog = catalog
      searchByTitle = new SearchByTitle()
      searchByTitle.catalog = catalog
      searchInterface = new SearchInterface()
    } )

    it( "has a `searchType` getter that returns `this._searchType`", () => {
      searchInterface.searchType = searchByTitle
      expect( searchInterface.searchType ).to.eql( searchByTitle )
      searchInterface.searchType = searchByGenre
      expect( searchInterface.searchType ).to.eql( searchByGenre )
    } )

    it( "has a `query()` method that uses any `find()` method belonging to the `searchType`", () => {
      searchInterface.searchType = searchByGenre
      expect( searchInterface.query( "rock" ) ).to.eql( [ album ] )
      searchInterface.searchType = searchByTitle
      expect( searchInterface.query( "t" ) ).to.eql( [ book, movie ] )
    } )
  } )
} )