---
title: "WebGL2RenderingContext: Methode deleteQuery()"
short-title: deleteQuery()
slug: Web/API/WebGL2RenderingContext/deleteQuery
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.deleteQuery()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.

## Syntax

```js-nolint
deleteQuery(query)
```

### Parameter

- `query`
  - : Das zu löschende [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt. Die Übergabe von `null` bewirkt nichts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const query = gl.createQuery();

// …

gl.deleteQuery(query);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
