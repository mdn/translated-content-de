---
title: "WebGL2RenderingContext: beginTransformFeedback() Methode"
short-title: beginTransformFeedback()
slug: Web/API/WebGL2RenderingContext/beginTransformFeedback
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.beginTransformFeedback()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) startet eine Transform-Feedback-Operation.

## Syntax

```js-nolint
beginTransformFeedback(primitiveMode)
```

### Parameter

- `primitiveMode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Ausgabetyp der Primitiven angibt, die in die für Transform Feedback gebundenen Pufferobjekte aufgezeichnet werden. Mögliche Werte:
    - `gl.POINTS`
    - `gl.LINES`
    - `gl.TRIANGLES`

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
const transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
gl.beginTransformFeedback(gl.TRIANGLES);
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
