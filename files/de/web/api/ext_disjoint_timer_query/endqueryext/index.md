---
title: "EXT_disjoint_timer_query: endQueryEXT()-Methode"
short-title: endQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/endQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.endQueryEXT()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) beendet eine Timer-Abfrage.

## Syntax

```js-nolint
endQueryEXT(target)
```

### Parameter

- `target`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel der Zeitabfrage angibt. Muss
    `ext.TIME_ELAPSED_EXT` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryEXT();
ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);

// …

ext.endQueryEXT(ext.TIME_ELAPSED_EXT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
