---
title: "WebGL2RenderingContext: Methode createTransformFeedback()"
short-title: createTransformFeedback()
slug: Web/API/WebGL2RenderingContext/createTransformFeedback
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.createTransformFeedback()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekte.

## Syntax

```js-nolint
createTransformFeedback()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt.

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLTransformFeedback`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const transformFeedback = gl.createTransformFeedback();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
