import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwebComponent } from './testweb.component';

describe('TestwebComponent', () => {
  let component: TestwebComponent;
  let fixture: ComponentFixture<TestwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
