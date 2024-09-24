---
title: "WebGL2RenderingContext: transformFeedbackVaryings()-Methode"
short-title: transformFeedbackVaryings()
slug: Web/API/WebGL2RenderingContext/transformFeedbackVaryings
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.transformFeedbackVaryings()`**
Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) legt fest, welche Werte in {{domxref("WebGLTransformFeedback")}}-Puffern aufgezeichnet werden sollen.

## Syntax

```js-nolint
transformFeedbackVaryings(program, varyings, bufferMode)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}.
- `varyings`
  - : Ein {{jsxref("Array")}} von Strings, die die Namen der zu verwendenden varyings-Variablen angeben.
- `bufferMode`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Modus angibt, der beim Erfassen der varyings-Variablen verwendet wird. Entweder `gl.INTERLEAVED_ATTRIBS` oder
    `gl.SEPARATE_ATTRIBS`.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGLTransformFeedback")}}
