---
title: "WebGL2RenderingContext: endTransformFeedback()-Methode"
short-title: endTransformFeedback()
slug: Web/API/WebGL2RenderingContext/endTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.endTransformFeedback()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) beendet eine Transform-Feedback-Operation.

## Syntax

```js-nolint
endTransformFeedback()
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
gl.drawArrays(gl.TRIANGLES, 0, 3);
gl.endTransformFeedback();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
