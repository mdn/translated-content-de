---
title: "WebGL2RenderingContext: isTransformFeedback() Methode"
short-title: isTransformFeedback()
slug: Web/API/WebGL2RenderingContext/isTransformFeedback
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.isTransformFeedback()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück,
wenn das übergebene Objekt ein gültiges [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt ist.

## Syntax

```js-nolint
isTransformFeedback(transformFeedback)
```

### Parameter

- `transformFeedback`
  - : Ein zu testendes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das gegebene Objekt ein gültiges
[`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt ist (`true`) oder nicht
(`false`).

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
