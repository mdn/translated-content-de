---
title: "EXT_disjoint_timer_query: Methode queryCounterEXT()"
short-title: queryCounterEXT()
slug: Web/API/EXT_disjoint_timer_query/queryCounterEXT
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`EXT_disjoint_timer_query.queryCounterEXT()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) zeichnet die aktuelle Zeit im zugehörigen Query-Objekt auf.

## Syntax

```js-nolint
queryCounterEXT(query, target)
```

### Parameter

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, in dem die aktuelle Zeit aufgezeichnet werden soll.
- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel der Zeitabfrage angibt. Muss `ext.TIMESTAMP_EXT` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const startQuery = ext.createQueryEXT();
const endQuery = ext.createQueryEXT();
ext.queryCounterEXT(startQuery, ext.TIMESTAMP_EXT);

// …

ext.queryCounterEXT(endQuery, ext.TIMESTAMP_EXT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
