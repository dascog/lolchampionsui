export class LolChampion {
  id: number;
  difficulty: string;
  name: string;
  role: string;
  imageUrl: string;
  dateCreated: Date;

  constructor() {
    this.id = 0;
    this.difficulty = "";
    this.name="";
    this.role="";
    this.imageUrl="";
    this.dateCreated = new Date();
  }
}
