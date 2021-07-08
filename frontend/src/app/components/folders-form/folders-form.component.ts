import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { FoldersService } from 'src/app/services/folders.service';
import Swal from 'sweetalert2';

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

    },
    err => console.error(err));
  }

  addFolder(){
    if(this.newFolder.name != ''){

      this.folderService.add(this.newFolder).subscribe( res =>{
        console.log(res);
        this.newFolder.name = '';
        this.getAllFolders();

        Swal.fire({
          text: 'Folder created!',
          icon: 'success',
          showConfirmButton: false,
          toast: true,
          position: 'bottom',
          timer: 1500
        })

      }, err => console.error(err));

    }else{
      Swal.fire({
        text: 'Write something!',
        icon: 'error',
        showConfirmButton: false,
        toast: true,
        position: 'bottom',
        timer: 1500
      })
    }
  }

  removeFolder(folder : Folder){
    this.folderService.delete(folder.id).subscribe( res =>{
      console.log(res);
      this.getAllFolders();
      Swal.fire({
        text: 'Folder removed!',
        icon: 'success',
        showConfirmButton: false,
        toast: true,
        position: 'bottom',
        timer: 1500
      })

    }, err => console.error(err));
  }

}
