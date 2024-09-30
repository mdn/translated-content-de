---
title: "WebGL2RenderingContext: beginTransformFeedback()-Methode"
short-title: beginTransformFeedback()
slug: Web/API/WebGL2RenderingContext/beginTransformFeedback
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.beginTransformFeedback()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) startet eine Transform-Feedback-Operation.

## Syntax

```js-nolint
beginTransformFeedback(primitiveMode)
```

### Parameter

- `primitiveMode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Ausgabetyp der Primitiven spezifiziert, die in die Buffer-Objekte aufgezeichnet werden, die für das Transform-Feedback gebunden sind. Mögliche Werte:

    - `gl.POINTS`
    - `gl.LINES`
    - `gl.TRIANGLES`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
