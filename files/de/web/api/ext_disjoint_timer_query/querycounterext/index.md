---
title: "EXT_disjoint_timer_query: queryCounterEXT()-Methode"
short-title: queryCounterEXT()
slug: Web/API/EXT_disjoint_timer_query/queryCounterEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.queryCounterEXT()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) zeichnet die aktuelle Zeit in das entsprechende Abfrageobjekt auf.

## Syntax

```js-nolint
queryCounterEXT(query, target)
```

### Parameter

- `query`
  - : Ein {{domxref("WebGLQuery")}}-Objekt, für das die aktuelle Zeit aufgezeichnet werden soll.
- `target`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Ziel der Zeitabfrage angibt. Muss `ext.TIMESTAMP_EXT` sein.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
