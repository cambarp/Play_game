import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPartidoComponent } from './resultados-partido.component';

describe('ResultadosPartidoComponent', () => {
  let component: ResultadosPartidoComponent;
  let fixture: ComponentFixture<ResultadosPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosPartidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadosPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
