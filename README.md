# TPI Demo · Productos

Workspace Angular 22 que pertenece al equipo Productos. La aplicación bajo `src/` funciona como sandbox; `projects/productos-lib` es el paquete publicable.

- Componentes standalone con `OnPush`.
- Estado encapsulado en `ProductosStore`.
- Rutas públicas exportadas desde `public-api.ts`.
- Publicación automática a `@mercadofabio/productos-lib` mediante GitHub Packages.

Al llegar un cambio a `main`, el workflow compila, publica la librería y notifica a `tpi-demo-shell`.

La librería obtiene los datos desde `http://localhost:8081/api/productos` a través del BFF compartido.

```bash
npm start
npx ng build productos-lib
```
