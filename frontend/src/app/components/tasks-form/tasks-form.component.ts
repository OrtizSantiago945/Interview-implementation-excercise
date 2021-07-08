import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

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
    console.log(this.open_folder);
  }


  getFolderTasks(){
    this.taskService.getByFolder(this.open_folder.id).subscribe( res =>{

      this.tasks = res as Task[];
      console.log("All tasks: ", this.tasks);

    },
    err => console.error(err));
  }

  completeTask(task : Task){
    this.taskService.updateStatus(task.id, !task.completed).subscribe( res =>{
      console.log(res);
      this.getFolderTasks();

    }, err => console.error(err));
  }

  addTask(){
    if(this.newTask.description != ''){
      this.newTask.folder_id = this.open_folder.id;

      this.taskService.add(this.newTask).subscribe( res =>{
        console.log(res);
        this.getFolderTasks();

      }, err => console.error(err));

    }else{
      console.log("Write something!");
    }
  }

  removeTask(task : Task){
    this.taskService.delete(task.id).subscribe( res =>{
      console.log(res);
      this.getFolderTasks();

    }, err => console.error(err));
  }

  goBack(){
    this.closeFolderEvent.emit(null);
  }

}
