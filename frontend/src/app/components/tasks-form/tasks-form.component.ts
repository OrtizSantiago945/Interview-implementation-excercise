import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {

  @Input('folder') open_folder : Folder = null;
  @Output() closeFolderEvent = new EventEmitter();

  tasks : Task[];
  newTask : Task = new Task(0, '');

  constructor(private taskService : TasksService) {}

  ngOnInit(): void {
    this.getFolderTasks();
  }


  getFolderTasks(){
    this.taskService.getByFolder(this.open_folder.id).subscribe( res =>{
      this.tasks = res as Task[];
    },
    err => console.error(err));
  }

  completeTask(task : Task){
    this.taskService.updateStatus(task.id, !task.completed).subscribe( res =>{
      console.log(res);
      this.getFolderTasks();

      if (task.completed == false) {
        Swal.fire({
          text: 'Completed!',
          icon: 'success',
          showConfirmButton: false,
          toast: true,
          position: 'bottom',
          timer: 1500
        })
      }

    }, err => console.error(err));
  }

  addTask(){
    if(this.newTask.description != ''){
      this.newTask.folder_id = this.open_folder.id;

      this.taskService.add(this.newTask).subscribe( res =>{
        console.log(res);
        this.newTask.description = '';
        this.getFolderTasks();
        Swal.fire({
          text: 'Task created!',
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

  editTask(task : Task){
    Swal.fire({
      title: 'Editing "'+task.description+'"',
      input: 'text',
      inputPlaceholder: 'Type something here',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#2c3e50',
      preConfirm: (text) => {
         try {
            if(!text || text == ''){
              throw new Error();
            }
            task.description = text;
            console.log(task);
            return text;
        } catch (error) {
          Swal.showValidationMessage(
            `Type something!`
          )
        }
      },
    }).then((result) => {

      if (result.isConfirmed) {
        this.taskService.updateField(task.id, task.description).subscribe( res =>{

          console.log(res);
          this.getFolderTasks();
          Swal.fire({
            text: 'Task updated!',
            icon: 'success',
            showConfirmButton: false,
            toast: true,
            position: 'bottom',
            timer: 1500
          })

        }, err => console.error(err));

      }
    })
  }

  removeTask(task : Task){
    this.taskService.delete(task.id).subscribe( res =>{
      console.log(res);
      this.getFolderTasks();
      Swal.fire({
        text: 'Task removed!',
        icon: 'success',
        showConfirmButton: false,
        toast: true,
        position: 'bottom',
        timer: 1500
      })

    }, err => console.error(err));
  }

  goBack(){
    this.closeFolderEvent.emit(null);
  }

}
