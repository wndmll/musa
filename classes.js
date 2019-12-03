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

/*
    this.customer = customer;
    this.tradeshow = tradeshow;
    this.SideAbOpen = ab;
    this.SideBcOpen = bc;
    this.SideCdOpen = cd;
    this.SideDaOpen = da;
    this.SideAbLength = abL;
    this.SideDaLength = daL;

    var openSides;

    openSides = this.SideAbOpen + this.SideBcOpen + this.SideCdOpen + this.SideDaOpen;

    if ( openSides == 4 ) {
      this.type = 'Eiland';
    } else if ( openSides == 3 ) {
      this.type = 'Kop';
    } else if ( openSides == 2 ) {
      this.type = 'Hoek';
    } else if ( openSides == 1 ) {
      this.type = 'Rij';
    }
*/
  }
}


class Plint{

  static lenght(stand) {

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

    return this.lenght;

  }

}
