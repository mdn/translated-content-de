---
title: "EXT_disjoint_timer_query: beginQueryEXT() Methode"
short-title: beginQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/beginQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.beginQueryEXT()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) startet eine Zeitmessungsanfrage.

## Syntax

```js-nolint
beginQueryEXT(target, query)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel der Zeitmessungsanfrage angibt. Muss `ext.TIME_ELAPSED_EXT` sein.
- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt, für das die Zeitmessung gestartet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryEXT();
ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
