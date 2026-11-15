---
title: "WebGL2RenderingContext: Methode deleteTransformFeedback()"
short-title: deleteTransformFeedback()
slug: Web/API/WebGL2RenderingContext/deleteTransformFeedback
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.deleteTransformFeedback()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt.

## Syntax

```js-nolint
deleteTransformFeedback(transformFeedback)
```

### Parameter

- `transformFeedback`
  - : Ein [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt, das gelöscht werden soll. Die Übergabe von `null` bewirkt nichts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLTransformFeedback`-Objekte sind in WebGL 1 nicht verfügbar.

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
