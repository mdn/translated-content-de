---
title: "EXT_disjoint_timer_query: isQueryEXT() Methode"
short-title: isQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/isQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.isQueryEXT()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein {{domxref("WebGLQuery")}} Objekt ist.

## Syntax

```js-nolint
isQueryEXT(query)
```

### Parameter

- `query`
  - : Ein {{domxref("WebGLQuery")}} Objekt, das getestet werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob das gegebene Objekt ein
{{domxref("WebGLQuery")}} Objekt (`true`) ist oder nicht
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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
