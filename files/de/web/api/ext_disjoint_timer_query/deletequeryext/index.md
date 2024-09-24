---
title: "EXT_disjoint_timer_query: deleteQueryEXT()-Methode"
short-title: deleteQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/deleteQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.deleteQueryEXT()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes {{domxref("WebGLQuery")}}-Objekt.

## Syntax

```js-nolint
deleteQueryEXT(query)
```

### Parameter

- `query`
  - : Ein {{domxref("WebGLQuery")}}-Objekt, das gelöscht werden soll.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
