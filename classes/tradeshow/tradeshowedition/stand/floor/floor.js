class Floor extends Stand{

}

class Kepervloer extends Floor{

  constructor(project) {
    super();
  }

  materialRequired(formula){
    // Kepers buitenkant stand
      // Omtrek van de stand
        // Bepalen wat voor vorm een stand heeft
  }

  laborHours(formula){

    var kepersFasen = formula.formule.c.vloersoorten.kepervloer.bestandsdelen.kepervloer.bestandsdelen.kepers.fasen;
    console.log(kepersFasen);
    const entries = Object.entries(kepersFasen);
    console.log(entries);

    var resjjj = jmespath.search(kepersFasen, "*.werkzaamheden.*.duur")
    console.log(resjjj);

    return true;
  }
}

class Plint extends Floor{

  lenght(stand) {
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

class Tape extends Floor{
  quantity(stand){
    return stand.sideAbLength*stand.sideDaLength
  }
}
