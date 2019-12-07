class Stand extends TradeshowEdition {
  
  constructor(project) {
    super();
  }

  standShape(stand){

    // Bepalen wat voor vorm een stand heeft

      // Rechthoek
        if ( (stand.sideAbLength == stand.sideCdLength ) && ( stand.sideBcLength == stand.sideDaLength ) ){
          this.shape = 'Rectangle';
        } else {
          this.shape = 'Divergent';
        }

      // Anders
        // Combinatie van rechthoeken komt in standbouw nog wel eens voor
        // Meerdere stands op één beurs komt nog wel eens voor. Of bijvoorbeeld stand dan gangpad en dan weer stand
        // Driehoek heeft altijd drie zijden, maar komt in standbouw zelden voor.
        // Cirkel heeft 'een zijde'? Maar komt in standbouw nooit voor

    return this.shape;

  }

  standType(stand){

    if ( this.standShape(stand) == 'Rectangle' ) {

      var openSides;
      openSides = stand.sideAbOpen + stand.sideBcOpen + stand.sideCdOpen + stand.sideDaOpen;
      if ( openSides == 4 ) {
        this.type = 'Island';
      } else if ( openSides == 3 ) {
        this.type = 'Peninsula';
      } else if ( openSides == 2 ) {
        this.type = 'Corner';
      } else if ( openSides == 1 ) {
        this.type = 'Inline';
      } else {
        this.type = 'Onbepaald';
      }
      return this.type;
    } else {
      return false
    }
  }

}
