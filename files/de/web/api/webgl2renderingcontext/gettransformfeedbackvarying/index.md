---
title: "WebGL2RenderingContext: Methode getTransformFeedbackVarying()"
short-title: getTransformFeedbackVarying()
slug: Web/API/WebGL2RenderingContext/getTransformFeedbackVarying
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getTransformFeedbackVarying()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) liefert Informationen über variierende Variablen aus {{domxref("WebGLTransformFeedback")}} Puffern.

## Syntax

```js-nolint
getTransformFeedbackVarying(program, index)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}.
- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index der variierenden Variablen angibt, deren Informationen abgerufen werden sollen.

### Rückgabewert

Ein {{domxref("WebGLActiveInfo")}}-Objekt.

## Beispiele

```js
activeInfo = gl.getTransformFeedbackVarying(program, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLTransformFeedback")}}
