---
title: "WebGL2RenderingContext: Methode resumeTransformFeedback()"
short-title: resumeTransformFeedback()
slug: Web/API/WebGL2RenderingContext/resumeTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.resumeTransformFeedback()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) setzt eine transform feedback-Operation fort.

## Syntax

```js-nolint
resumeTransformFeedback()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
gl.beginTransformFeedback(gl.TRIANGLES);
gl.pauseTransformFeedback();
//…
gl.resumeTransformFeedback();
gl.drawArrays(gl.TRIANGLES, 0, 3);
gl.endTransformFeedback();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLTransformFeedback")}}
