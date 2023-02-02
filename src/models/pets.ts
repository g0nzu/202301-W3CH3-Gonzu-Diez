export type petsStructure = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class PetMaker implements petsStructure {
  public id: string;
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(
    public name: string,
    public breed: string,
    public isAdopted: boolean,
    public owner: string
  ) {
    this.id = PetMaker.generateId();
    this.name = name;
    this.breed = breed;
    this.isAdopted = isAdopted;
    this.owner = owner;
  }
}
