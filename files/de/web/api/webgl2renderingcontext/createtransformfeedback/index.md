---
title: "WebGL2RenderingContext: createTransformFeedback() Methode"
short-title: createTransformFeedback()
slug: Web/API/WebGL2RenderingContext/createTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.createTransformFeedback()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekte.

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
