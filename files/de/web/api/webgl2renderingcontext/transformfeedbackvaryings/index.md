---
title: "WebGL2RenderingContext: Methode transformFeedbackVaryings()"
short-title: transformFeedbackVaryings()
slug: Web/API/WebGL2RenderingContext/transformFeedbackVaryings
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.transformFeedbackVaryings()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) legt fest, welche Werte in [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback) Puffern aufgezeichnet werden sollen.

## Syntax

```js-nolint
transformFeedbackVaryings(program, varyings, bufferMode)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram).
- `varyings`
  - : Ein {{jsxref("Array")}} von Zeichenfolgen, die die Namen der zu verwendenden varianten Variablen angeben.
- `bufferMode`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Modus angibt, der beim Erfassen der varianten Variablen verwendet werden soll. Entweder `gl.INTERLEAVED_ATTRIBS` oder `gl.SEPARATE_ATTRIBS`.

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
