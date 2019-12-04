class Tradeshow {
/*
  properties:
    name
    interval
    website
*/
}

class TradeshowEdition extends Tradeshow {
  /*
    properties:
      startDate
      endDate
      startSetupDate
  */
  constructor() {
    super();
  }
}

class Stand extends TradeshowEdition {

  constructor(project) {
    super();
  }

  standType(stand){

    console.log("Hi from inside standType " + JSON.stringify(stand));

    var openSides;

    openSides = stand.sideAbOpen + stand.sideBcOpen + stand.sideCdOpen + stand.sideDaOpen;

    if ( openSides == 4 ) {
      this.type = 'Eiland';
    } else if ( openSides == 3 ) {
      this.type = 'Kop';
    } else if ( openSides == 2 ) {
      this.type = 'Hoek';
    } else if ( openSides == 1 ) {
      this.type = 'Rij';
    } else {
      this.type = 'Onbepaald';
    }

    console.log("Hi from inside this.type " + this.type);

    return this.type;

  }

}

class Floor{

}

class Plint extends Floor{

  lenght(stand) {

    console.log("Hi from inside Plint");
    console.log("Hi from inside Plint " + JSON.stringify(stand));

    this.lenght = 0;

    if ( stand.sideAbOpen == 1 ) {
      this.lenght = this.lenght + stand.sideAbLength;
    }
    if ( stand.sideBcOpen == 1 ) {
      this.lenght = this.lenght + stand.sideDaLength;
    }
    if ( stand.sideCdOpen == 1 ) {
      this.lenght = this.lenght + stand.sideAbLength;
    }
    if ( stand.sideDaOpen == 1 ) {
      this.lenght = this.lenght + stand.sideDaLength;
    }

    console.log("Hi from inside Plint this.lenght " + this.lenght);

    return this.lenght;

  }

}

class Tape extends Floor{

  quantity(stand){
    return stand.sideAbLength*stand.sideDaLength
  }

}
