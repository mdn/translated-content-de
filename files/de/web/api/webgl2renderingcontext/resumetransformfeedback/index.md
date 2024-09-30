---
title: "WebGL2RenderingContext: resumeTransformFeedback()-Methode"
short-title: resumeTransformFeedback()
slug: Web/API/WebGL2RenderingContext/resumeTransformFeedback
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.resumeTransformFeedback()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) setzt einen Transform-Feedback-Vorgang fort.

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

- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
