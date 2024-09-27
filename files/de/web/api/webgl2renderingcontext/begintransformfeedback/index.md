---
title: "WebGL2RenderingContext: beginTransformFeedback()-Methode"
short-title: beginTransformFeedback()
slug: Web/API/WebGL2RenderingContext/beginTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.beginTransformFeedback()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) startet eine Transform-Feedback-Operation.

## Syntax

```js-nolint
beginTransformFeedback(primitiveMode)
```

### Parameter

- `primitiveMode`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Ausgabetyp der Primitive angibt, die in die Pufferobjekte aufgezeichnet werden, die für das Transform-Feedback gebunden sind. Mögliche Werte:

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
