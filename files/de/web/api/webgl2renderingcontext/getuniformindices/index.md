---
title: "WebGL2RenderingContext: getUniformIndices() Methode"
short-title: getUniformIndices()
slug: Web/API/WebGL2RenderingContext/getUniformIndices
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getUniformIndices()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft die Indizes einer Anzahl von Uniforms innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.

## Syntax

```js-nolint
getUniformIndices(program, uniformNames)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das Uniforms enthält, deren Indizes abgefragt werden sollen.
- `uniformNames`
  - : Ein {{jsxref("Array")}} von Strings, das die Namen der abzufragenden Uniforms spezifiziert.

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
