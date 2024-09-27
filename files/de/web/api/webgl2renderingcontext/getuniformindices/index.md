---
title: "WebGL2RenderingContext: Methode getUniformIndices()"
short-title: getUniformIndices()
slug: Web/API/WebGL2RenderingContext/getUniformIndices
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **Methode `WebGL2RenderingContext.getUniformIndices()`** der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft die Indizes einer
Anzahl von Uniforms innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.

## Syntax

```js-nolint
getUniformIndices(program, uniformNames)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das Uniforms enthält, deren Indizes abgefragt werden sollen.
- `uniformNames`
  - : Ein {{jsxref("Array")}} von Zeichenfolgen, die die Namen der
    abzufragenden Uniforms angeben.

### Rückgabewert

Ein {{jsxref("Array")}} von [`GLuint`](/de/docs/Web/API/WebGL_API/Types), das die Uniform-Indizes enthält.

## Beispiele

```js
const uniformIndices = gl.getUniformIndices(program, [
  "UBORed",
  "UBOGreen",
  "UBOBlue",
]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.getUniformBlockIndex()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex)
