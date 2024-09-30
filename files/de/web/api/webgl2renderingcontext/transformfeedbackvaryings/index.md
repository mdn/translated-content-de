---
title: "WebGL2RenderingContext: transformFeedbackVaryings() Methode"
short-title: transformFeedbackVaryings()
slug: Web/API/WebGL2RenderingContext/transformFeedbackVaryings
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.transformFeedbackVaryings()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) legt Werte fest, die in [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Puffern aufgezeichnet werden sollen.

## Syntax

```js-nolint
transformFeedbackVaryings(program, varyings, bufferMode)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram).
- `varyings`
  - : Ein {{jsxref("Array")}} von Strings, das die Namen der zu verwendenden varyings angibt.
- `bufferMode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Modus angibt, der beim Erfassen der varyings verwendet werden soll. Entweder `gl.INTERLEAVED_ATTRIBS` oder `gl.SEPARATE_ATTRIBS`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const transformFeedback = gl.createTransformFeedback();
gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
const transformFeedbackOutputs = ["gl_Position", "anotherOutput"];

gl.transformFeedbackVaryings(
  shaderProg,
  transformFeedbackOutputs,
  gl.INTERLEAVED_ATTRIBS,
);
gl.linkProgram(shaderProg);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
