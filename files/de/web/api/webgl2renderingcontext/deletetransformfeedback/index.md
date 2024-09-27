---
title: "WebGL2RenderingContext: Methode deleteTransformFeedback()"
short-title: deleteTransformFeedback()
slug: Web/API/WebGL2RenderingContext/deleteTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.deleteTransformFeedback()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt.

## Syntax

```js-nolint
deleteTransformFeedback(transformFeedback)
```

### Parameter

- `transformFeedback`
  - : Ein zu löschendes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLTransformFeedback`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const transformFeedback = gl.createTransformFeedback();

// …

gl.deleteTransformFeedback(transformFeedback);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
