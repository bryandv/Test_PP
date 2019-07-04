import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSpelerComponent } from './get-speler.component';

describe('GetSpelerComponent', () => {
  let component: GetSpelerComponent;
  let fixture: ComponentFixture<GetSpelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSpelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSpelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
