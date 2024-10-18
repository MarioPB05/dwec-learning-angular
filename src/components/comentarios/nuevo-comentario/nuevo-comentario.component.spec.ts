import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComentarioComponent } from './nuevo-comentario.component';

describe('NuevoComentarioComponent', () => {
  let component: NuevoComentarioComponent;
  let fixture: ComponentFixture<NuevoComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoComentarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
