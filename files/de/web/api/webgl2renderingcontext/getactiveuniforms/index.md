---
title: "WebGL2RenderingContext: Methode getActiveUniforms()"
short-title: getActiveUniforms()
slug: Web/API/WebGL2RenderingContext/getActiveUniforms
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getActiveUniforms()`**-Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft Informationen über aktive Uniforms innerhalb eines {{domxref("WebGLProgram")}} ab.

## Syntax

```js-nolint
getActiveUniforms(program, uniformIndices, pname)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das die aktiven Uniforms enthält.
- `uniformIndices`
  - : Ein {{jsxref("Array")}} von {{domxref("WebGL_API/Types", "GLuint")}}, die die Indizes der abzufragenden aktiven Uniforms spezifizieren.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, welche Informationen abgefragt werden sollen. Mögliche Werte:

    - `gl.UNIFORM_TYPE`
      - : Gibt ein {{jsxref("Array")}} von
        {{domxref("WebGL_API/Types", "GLenum")}} zurück, das die [Typen der Uniforms](/de/docs/Web/API/WebGLRenderingContext/getUniform#return_value) angibt.
    - `gl.UNIFORM_SIZE`
      - : Gibt ein {{jsxref("Array")}} von
        {{domxref("WebGL_API/Types", "GLuint")}} zurück, das die Größen der Uniforms angibt.
    - `gl.UNIFORM_BLOCK_INDEX`
      - : Gibt ein {{jsxref("Array")}} von
        {{domxref("WebGL_API/Types", "GLint")}} zurück, das die Blockindices der Uniforms angibt.
    - `gl.UNIFORM_OFFSET`
      - : Gibt ein {{jsxref("Array")}} von
        {{domxref("WebGL_API/Types", "GLint")}} zurück, das die Buffer-Offsets der Uniforms angibt.
    - `gl.UNIFORM_ARRAY_STRIDE`
      - : Gibt ein {{jsxref("Array")}} von
        {{domxref("WebGL_API/Types", "GLint")}} zurück, das die Abstände zwischen den Elementen angibt.
    - `gl.UNIFORM_MATRIX_STRIDE`
      - : Gibt ein {{jsxref("Array")}} von
        {{domxref("WebGL_API/Types", "GLint")}} zurück, das die Abstände zwischen Spalten einer Spalten-Major-
        oder Zeilen-Major-Matrix angibt.
    - `gl.UNIFORM_IS_ROW_MAJOR`
      - : Gibt ein {{jsxref("Array")}} von
        {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das angibt, ob jede der Uniforms eine Zeilen-Major-
        Matrix ist oder nicht.

### Rückgabewert

Hängt davon ab, welche Informationen mit dem `pname`-Parameter angefordert werden.

## Beispiele

```js
const uniformIndices = gl.getUniformIndices(program, [
  "UBORed",
  "UBOGreen",
  "UBOBlue",
]);
const uniformOffsets = gl.getActiveUniforms(
  program,
  uniformIndices,
  gl.UNIFORM_OFFSET,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.getActiveUniformBlockParameter()")}}
