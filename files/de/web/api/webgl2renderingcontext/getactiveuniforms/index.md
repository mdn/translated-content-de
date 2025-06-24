---
title: "WebGL2RenderingContext: getActiveUniforms()-Methode"
short-title: getActiveUniforms()
slug: Web/API/WebGL2RenderingContext/getActiveUniforms
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.getActiveUniforms()`** der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft Informationen über
aktive Uniforms innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.

## Syntax

```js-nolint
getActiveUniforms(program, uniformIndices, pname)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das die aktiven Uniforms enthält.
- `uniformIndices`
  - : Ein {{jsxref("Array")}} von [`GLuint`](/de/docs/Web/API/WebGL_API/Types), das die Indizes der abzufragenden
    aktiven Uniforms angibt.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche Informationen abgerufen werden sollen. Mögliche Werte:
    - `gl.UNIFORM_TYPE`
      - : Gibt ein {{jsxref("Array")}} von
        [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die [Typen der Uniforms](/de/docs/Web/API/WebGLRenderingContext/getUniform#return_value) angibt.
    - `gl.UNIFORM_SIZE`
      - : Gibt ein {{jsxref("Array")}} von
        [`GLuint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Größen der Uniforms angibt.
    - `gl.UNIFORM_BLOCK_INDEX`
      - : Gibt ein {{jsxref("Array")}} von
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Blockindizes der Uniforms angibt.
    - `gl.UNIFORM_OFFSET`
      - : Gibt ein {{jsxref("Array")}} von
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Uniform-Buffer-Offsets angibt.
    - `gl.UNIFORM_ARRAY_STRIDE`
      - : Gibt ein {{jsxref("Array")}} von
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Abstände zwischen den Elementen angibt.
    - `gl.UNIFORM_MATRIX_STRIDE`
      - : Gibt ein {{jsxref("Array")}} von
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Abstände zwischen den Spalten einer spaltenmajoren
        oder zeilenmajoren Matrix angibt.
    - `gl.UNIFORM_IS_ROW_MAJOR`
      - : Gibt ein {{jsxref("Array")}} von
        [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, das angibt, ob jedes der Uniforms eine zeilenmajore
        Matrix ist oder nicht.

### Rückgabewert

Hängt davon ab, welche Information mit dem Parameter `pname` angefordert wird.

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

- [`WebGL2RenderingContext.getActiveUniformBlockParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter)
