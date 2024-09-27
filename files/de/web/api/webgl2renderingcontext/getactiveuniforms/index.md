---
title: "WebGL2RenderingContext: getActiveUniforms()-Methode"
short-title: getActiveUniforms()
slug: Web/API/WebGL2RenderingContext/getActiveUniforms
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getActiveUniforms()`**-Methode der
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
  - : Ein(e) {{jsxref("Array")}} von [`GLuint`](/de/docs/Web/API/WebGL_API/Types), die die Indizes der zu abfragenden aktiven
    Uniforms angibt.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche Informationen abgefragt werden sollen. Mögliche Werte:

    - `gl.UNIFORM_TYPE`
      - : Gibt ein(e) {{jsxref("Array")}} von
        [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die [Typen der Uniforms](/de/docs/Web/API/WebGLRenderingContext/getUniform#return_value) angibt.
    - `gl.UNIFORM_SIZE`
      - : Gibt ein(e) {{jsxref("Array")}} von
        [`GLuint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Größen der Uniforms angibt.
    - `gl.UNIFORM_BLOCK_INDEX`
      - : Gibt ein(e) {{jsxref("Array")}} von
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Block-Indizes der Uniforms angibt.
    - `gl.UNIFORM_OFFSET`
      - : Gibt ein(e) {{jsxref("Array")}} von
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Uniform-Buffer-Offsets angibt.
    - `gl.UNIFORM_ARRAY_STRIDE`
      - : Gibt ein(e) {{jsxref("Array")}} von
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Schritte zwischen den Elementen angibt.
    - `gl.UNIFORM_MATRIX_STRIDE`
      - : Gibt ein(e) {{jsxref("Array")}} von
        [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Schritte zwischen den Spalten einer spaltenweise
        oder zeilenweise Matrix angibt.
    - `gl.UNIFORM_IS_ROW_MAJOR`
      - : Gibt ein(e) {{jsxref("Array")}} von
        [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, das angibt, ob jede der Uniforms eine zeilenweise
        Matrix ist oder nicht.

### Rückgabewert

Hängt von den angeforderten Informationen mit dem `pname`-Parameter ab.

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
