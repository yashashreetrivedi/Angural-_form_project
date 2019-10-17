import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingFromComponent } from './user-setting-from.component';

describe('UserSettingFromComponent', () => {
  let component: UserSettingFromComponent;
  let fixture: ComponentFixture<UserSettingFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
