---
title: "EXT_disjoint_timer_query: queryCounterEXT() Methode"
short-title: queryCounterEXT()
slug: Web/API/EXT_disjoint_timer_query/queryCounterEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.queryCounterEXT()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) zeichnet die aktuelle Zeit im
entsprechenden Abfrageobjekt auf.

## Syntax

```js-nolint
queryCounterEXT(query, target)
```

### Parameter

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt, für das die aktuelle Zeit aufgezeichnet werden soll.
- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Zeitabfrage angibt. Muss
    `ext.TIMESTAMP_EXT` sein.

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
