---
title: "WebGL2RenderingContext: Methode getActiveUniformBlockParameter()"
short-title: getActiveUniformBlockParameter()
slug: Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die Methode
**`WebGL2RenderingContext.getActiveUniformBlockParameter()`**
des [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft Informationen über einen aktiven Uniform-Block innerhalb eines {{domxref("WebGLProgram")}} ab.

## Syntax

```js-nolint
getActiveUniformBlockParameter(program, uniformBlockIndex, pname)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das den aktiven Uniform-Block enthält.
- `uniformBlockIndex`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, das den Index des aktiven Uniform-Blocks innerhalb des
    Programms angibt.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das angibt, welche Information abgefragt werden soll. Mögliche Werte:

    - `gl.UNIFORM_BLOCK_BINDING`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLuint")}} zurück,
        das den Uniform-Puffer-Bindungspunkt angibt.
    - `gl.UNIFORM_BLOCK_DATA_SIZE`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLuint")}} zurück,
        das die minimale Gesamtgröße des Pufferobjekts angibt.
    - `gl.UNIFORM_BLOCK_ACTIVE_UNIFORMS`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLuint")}} zurück,
        das die Anzahl der aktiven Uniforms im Uniform-Block angibt.
    - `gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`
      - : Gibt ein
        {{jsxref("Uint32Array")}} zurück, das die Liste der aktiven Uniforms im Uniform-Block angibt.
    - `gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`
      - : Gibt ein
        {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das angibt, ob der Uniform-Block vom
        Vertex-Shader referenziert wird.
    - `gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER`
      - : Gibt ein
        {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das angibt, ob der Uniform-Block vom
        Fragment-Shader referenziert wird.

### Rückgabewert

Hängt davon ab, welche Information mit dem Parameter `pname` angefordert wird. Wenn ein
Fehler auftritt, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

## Beispiele

```js
const blockSize = gl.getActiveUniformBlockParameter(
  program,
  blockIndex,
  gl.UNIFORM_BLOCK_DATA_SIZE,
);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGL2RenderingContext.getActiveUniforms()")}}
