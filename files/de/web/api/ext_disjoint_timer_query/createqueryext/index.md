---
title: "EXT_disjoint_timer_query: createQueryEXT() Methode"
short-title: createQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/createQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.createQueryEXT()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert
[`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekte, die die Zeit messen, die benötigt wird, um ein Set von GL-Befehlen vollständig auszuführen.

## Syntax

```js-nolint
createQueryEXT()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt.

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
