---
title: "EXT_disjoint_timer_query: deleteQueryEXT() Methode"
short-title: deleteQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/deleteQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.deleteQueryEXT()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes
[`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.

## Syntax

```js-nolint
deleteQueryEXT(query)
```

### Parameter

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryEXT();

// …

ext.deleteQueryEXT(query);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
