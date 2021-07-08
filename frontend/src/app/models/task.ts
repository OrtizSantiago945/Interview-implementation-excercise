
export class Task {
  id : number;
  folder_id : number;
  description : string;
  completed : boolean;
  updated_at : Date;

  constructor(folder_id : number, description : string){
    this.description = description;
    this.folder_id = folder_id;
    this.completed = false;
  }
}
