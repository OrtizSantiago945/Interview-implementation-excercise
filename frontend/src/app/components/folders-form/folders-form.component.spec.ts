import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersFormComponent } from './folders-form.component';

describe('FoldersFormComponent', () => {
  let component: FoldersFormComponent;
  let fixture: ComponentFixture<FoldersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
