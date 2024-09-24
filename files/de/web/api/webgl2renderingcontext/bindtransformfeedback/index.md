---
title: "WebGL2RenderingContext: Methode bindTransformFeedback()"
short-title: bindTransformFeedback()
slug: Web/API/WebGL2RenderingContext/bindTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.bindTransformFeedback()`** des [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet ein übergebenes {{domxref("WebGLTransformFeedback")}}-Objekt an den aktuellen GL-Zustand.

## Syntax

```js-nolint
bindTransformFeedback(target, transformFeedback)
```

### Parameter

- `target`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel (den Bindungspunkt) angibt. Muss `gl.TRANSFORM_FEEDBACK` sein.
- `transformFeedback`
  - : Ein {{domxref("WebGLTransformFeedback")}}-Objekt, das gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLTransformFeedback")}}
