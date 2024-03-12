import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadorEquiposComponent } from './marcador-equipos.component';

describe('MarcadorEquiposComponent', () => {
  let component: MarcadorEquiposComponent;
  let fixture: ComponentFixture<MarcadorEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcadorEquiposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcadorEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
