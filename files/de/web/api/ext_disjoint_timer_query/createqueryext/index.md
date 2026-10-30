---
title: "EXT_disjoint_timer_query: Methode createQueryEXT()"
short-title: createQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/createQueryEXT
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`EXT_disjoint_timer_query.createQueryEXT()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekte, die die Zeit erfassen, die benötigt wird, um eine Reihe von GL-Befehlen vollständig auszuführen.

## Syntax

```js-nolint
createQueryEXT()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryExt();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
