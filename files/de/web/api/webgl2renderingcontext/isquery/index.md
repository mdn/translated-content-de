---
title: "WebGL2RenderingContext: Methode isQuery()"
short-title: isQuery()
slug: Web/API/WebGL2RenderingContext/isQuery
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.isQuery()`** der [WebGL-2-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt ist.

## Syntax

```js-nolint
isQuery(query)
```

### Parameter

- `query`
  - : Ein zu prüfendes [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt. Wird `null` übergeben, gibt die Methode `false` zurück.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob das übergebene Objekt ein gültiges [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt ist (`true`) oder nicht (`false`).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

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
