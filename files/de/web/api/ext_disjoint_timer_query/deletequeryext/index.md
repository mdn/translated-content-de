---
title: "EXT_disjoint_timer_query: Methode deleteQueryEXT()"
short-title: deleteQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/deleteQueryEXT
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`EXT_disjoint_timer_query.deleteQueryEXT()`** der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.

## Syntax

```js-nolint
deleteQueryEXT(query)
```

### Parameter

- `query`
  - : Das zu löschende [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.

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
