---
title: "WebGL2RenderingContext: isQuery() Methode"
short-title: isQuery()
slug: Web/API/WebGL2RenderingContext/isQuery
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.isQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt ist.

## Syntax

```js-nolint
isQuery(query)
```

### Parameter

- `query`
  - : Ein zu testendes [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das gegebene Objekt ein gültiges [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt ist (`true`) oder nicht (`false`).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const query = gl.createQuery();

// …

gl.isQuery(query);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
