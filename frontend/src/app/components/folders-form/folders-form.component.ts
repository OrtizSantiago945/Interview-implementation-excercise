import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { FoldersService } from 'src/app/services/folders.service';

@Component({
  selector: 'app-folders-form',
  templateUrl: './folders-form.component.html',
  styleUrls: ['./folders-form.component.css']
})
export class FoldersFormComponent implements OnInit {

  @Output() openFolderEvent = new EventEmitter();

  allFolders : Folder[];
  newFolder = new Folder('');

  constructor(private folderService : FoldersService) {}

  ngOnInit(): void {
    this.getAllFolders();
  }

  viewItems(folder : Folder) : void {
    this.openFolderEvent.emit(folder);
  }

  getAllFolders(){
    this.folderService.getAll().subscribe( res =>{

      this.allFolders = res as Folder[];
      console.log("My folders: ", this.allFolders);

    },
    err => console.error(err));
  }

  addFolder(){
    if(this.newFolder.name != ''){

      this.folderService.add(this.newFolder).subscribe( res =>{
        console.log(res);
        this.getAllFolders();

      }, err => console.error(err));

    }else{
      console.log("Write something!");
    }
  }

  removeFolder(folder : Folder){
    this.folderService.delete(folder.id).subscribe( res =>{
      console.log(res);
      this.getAllFolders();
      
    }, err => console.error(err));
  }

}
