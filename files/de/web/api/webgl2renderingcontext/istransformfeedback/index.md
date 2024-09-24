---
title: "WebGL2RenderingContext: isTransformFeedback() Methode"
short-title: isTransformFeedback()
slug: Web/API/WebGL2RenderingContext/isTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.isTransformFeedback()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück,
wenn das übergebene Objekt ein gültiges {{domxref("WebGLTransformFeedback")}}-Objekt ist.

## Syntax

```js-nolint
isTransformFeedback(transformFeedback)
```

### Parameter

- `transformFeedback`
  - : Ein zu testendes {{domxref("WebGLTransformFeedback")}}-Objekt.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob das gegebene Objekt ein gültiges
{{domxref("WebGLTransformFeedback")}}-Objekt (`true`) ist oder nicht
(`false`).

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein.
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

- {{domxref("WebGLTransformFeedback")}}
