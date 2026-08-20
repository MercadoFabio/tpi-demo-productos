import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosLib } from './productos-lib';

describe('ProductosLib', () => {
  let component: ProductosLib;
  let fixture: ComponentFixture<ProductosLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosLib],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
