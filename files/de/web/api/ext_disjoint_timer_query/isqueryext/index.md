---
title: "EXT_disjoint_timer_query: isQueryEXT() Methode"
short-title: isQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/isQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.isQueryEXT()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das
übergebene Objekt ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt ist.

## Syntax

```js-nolint
isQueryEXT(query)
```

### Parameter

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, das überprüft werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das gegebene Objekt ein
[`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt ist (`true`) oder nicht
(`false`).

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryEXT();

// …

ext.isQueryEXT(query);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
