import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Packages } from './packages.component';

describe('Packages', () => {
  let component: Packages;
  let fixture: ComponentFixture<Packages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Packages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Packages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
