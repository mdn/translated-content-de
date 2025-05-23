---
title: "WebGL2RenderingContext: resumeTransformFeedback()-Methode"
short-title: resumeTransformFeedback()
slug: Web/API/WebGL2RenderingContext/resumeTransformFeedback
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.resumeTransformFeedback()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) setzt eine Transform-Feedback-Operation fort.

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
// …
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
