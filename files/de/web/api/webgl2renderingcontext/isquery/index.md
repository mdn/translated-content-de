---
title: "WebGL2RenderingContext: isQuery() Methode"
short-title: isQuery()
slug: Web/API/WebGL2RenderingContext/isQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.isQuery()`** Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt ist.

## Syntax

```js-nolint
isQuery(query)
```

### Parameter

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt zum Testen.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob das gegebene Objekt ein gültiges [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt ist (`true`) oder nicht (`false`).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLQuery` Objekte sind in WebGL 1 nicht verfügbar.

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
