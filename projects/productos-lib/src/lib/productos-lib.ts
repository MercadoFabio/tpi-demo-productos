import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

export interface Producto {
  readonly codigo: string;
  readonly nombre: string;
  readonly stock: number;
}

@Injectable({ providedIn: 'root' })
export class ProductosStore {
  private readonly http = inject(HttpClient);
  readonly productos = toSignal(
    this.http.get<readonly Producto[]>('http://localhost:8081/api/productos'),
    { initialValue: [] },
  );
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'demo-productos-listado',
  template: `
    <section aria-labelledby="productos-title">
      <p class="eyebrow">Feature library · Equipo Productos</p>
      <h1 id="productos-title">Productos</h1>
      <p>Dominio autónomo, distribuido como paquete NPM y cargado bajo demanda.</p>
      <table>
        <thead><tr><th>Código</th><th>Producto</th><th>Stock</th></tr></thead>
        <tbody>
          @for (producto of store.productos(); track producto.codigo) {
            <tr><td>{{ producto.codigo }}</td><td>{{ producto.nombre }}</td><td>{{ producto.stock }}</td></tr>
          }
        </tbody>
      </table>
    </section>
  `,
  styles: `
    .eyebrow { color: #075985; font-size: .8rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
    table { background: white; border-collapse: collapse; margin-block-start: 1rem; max-inline-size: 42rem; width: 100%; }
    td, th { border: 1px solid #d9e2ec; padding: .75rem; text-align: start; } th { background: #f0f9ff; }
  `,
})
export class ProductosListadoComponent {
  readonly store = inject(ProductosStore);
}
