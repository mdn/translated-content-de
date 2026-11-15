---
title: "WebGL2RenderingContext: Methode isTransformFeedback()"
short-title: isTransformFeedback()
slug: Web/API/WebGL2RenderingContext/isTransformFeedback
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.isTransformFeedback()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt ist.

## Syntax

```js-nolint
isTransformFeedback(transformFeedback)
```

### Parameter

- `transformFeedback`
  - : Ein [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt, das geprüft werden soll. Wird `null` übergeben, gibt die Methode `false` zurück.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob das übergebene Objekt ein gültiges [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt ist (`true`) oder nicht (`false`).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLTransformFeedback`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const transformFeedback = gl.createTransformFeedback();

// …

gl.isTransformFeedback(transformFeedback);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
