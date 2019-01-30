import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageCompensateComponent } from './compensate.component';

describe('ManageCompensateComponent', () => {
  let component: ManageCompensateComponent;
  let fixture: ComponentFixture<ManageCompensateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompensateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompensateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
