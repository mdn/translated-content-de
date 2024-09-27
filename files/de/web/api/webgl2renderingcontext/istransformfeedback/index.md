---
title: "WebGL2RenderingContext: Methode isTransformFeedback()"
short-title: isTransformFeedback()
slug: Web/API/WebGL2RenderingContext/isTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.isTransformFeedback()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück,
wenn das übergebene Objekt ein gültiges [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt ist.

## Syntax

```js-nolint
isTransformFeedback(transformFeedback)
```

### Parameter

- `transformFeedback`
  - : Ein [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt, das getestet werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das gegebene Objekt ein gültiges
[`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt (`true`) ist oder nicht
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
