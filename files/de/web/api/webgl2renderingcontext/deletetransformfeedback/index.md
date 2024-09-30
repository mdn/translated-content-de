---
title: "WebGL2RenderingContext: deleteTransformFeedback() Methode"
short-title: deleteTransformFeedback()
slug: Web/API/WebGL2RenderingContext/deleteTransformFeedback
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.deleteTransformFeedback()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback) Objekt.

## Syntax

```js-nolint
deleteTransformFeedback(transformFeedback)
```

### Parameter

- `transformFeedback`
  - : Ein [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback) Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLTransformFeedback` Objekte sind in WebGL 1 nicht verfügbar.

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
