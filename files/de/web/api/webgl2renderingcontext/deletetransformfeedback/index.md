---
title: "WebGL2RenderingContext: Methode deleteTransformFeedback()"
short-title: deleteTransformFeedback()
slug: Web/API/WebGL2RenderingContext/deleteTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.deleteTransformFeedback()`** des [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes {{domxref("WebGLTransformFeedback")}}-Objekt.

## Syntax

```js-nolint
deleteTransformFeedback(transformFeedback)
```

### Parameter

- `transformFeedback`
  - : Ein zu löschendes {{domxref("WebGLTransformFeedback")}}-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein.
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

- {{domxref("WebGLTransformFeedback")}}
