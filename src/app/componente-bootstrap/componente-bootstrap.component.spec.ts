import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBootstrapComponent } from './componente-bootstrap.component';

describe('ComponenteBootstrapComponent', () => {
  let component: ComponenteBootstrapComponent;
  let fixture: ComponentFixture<ComponenteBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
