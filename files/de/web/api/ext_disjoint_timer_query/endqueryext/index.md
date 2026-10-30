---
title: "EXT_disjoint_timer_query: Methode endQueryEXT()"
short-title: endQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/endQueryEXT
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`EXT_disjoint_timer_query.endQueryEXT()`** der [WebGL API](/de/docs/Web/API/WebGL_API) beendet eine Zeitmessabfrage.

## Syntax

```js-nolint
endQueryEXT(target)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Zeitmessabfrage angibt. Der Wert muss `ext.TIME_ELAPSED_EXT` sein.

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

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
