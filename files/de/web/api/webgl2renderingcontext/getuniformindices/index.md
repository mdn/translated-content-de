---
title: "WebGL2RenderingContext: getUniformIndices() Methode"
short-title: getUniformIndices()
slug: Web/API/WebGL2RenderingContext/getUniformIndices
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getUniformIndices()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft die Indizes einer Reihe von Uniforms innerhalb eines {{domxref("WebGLProgram")}} ab.

## Syntax

```js-nolint
getUniformIndices(program, uniformNames)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das Uniforms enthält, deren Indizes abgefragt werden sollen.
- `uniformNames`
  - : Ein {{jsxref("Array")}} von Strings, die die Namen der abzufragenden Uniforms spezifizieren.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("WebGL_API/Types", "GLuint")}}, das die Uniform-Indizes enthält.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
