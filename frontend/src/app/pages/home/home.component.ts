import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/folder';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeFolder : Folder = null;

  constructor() { }

  ngOnInit(): void {
  }

}
