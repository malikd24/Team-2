import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBarComponent } from './modify-bar.component';

describe('ModifyBarComponent', () => {
  let component: ModifyBarComponent;
  let fixture: ComponentFixture<ModifyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
