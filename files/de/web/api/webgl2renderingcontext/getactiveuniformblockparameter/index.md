---
title: "WebGL2RenderingContext: Methode getActiveUniformBlockParameter()"
short-title: getActiveUniformBlockParameter()
slug: Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die
**`WebGL2RenderingContext.getActiveUniformBlockParameter()`**
Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) ruft Informationen über einen aktiven Uniform-Block innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.

## Syntax

```js-nolint
getActiveUniformBlockParameter(program, uniformBlockIndex, pname)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das den aktiven Uniform-Block enthält.
- `uniformBlockIndex`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) zur Angabe des Index des aktiven Uniform-Blocks innerhalb des Programms.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche Information abgefragt werden soll. Mögliche Werte:

    - `gl.UNIFORM_BLOCK_BINDING`
      - : Gibt ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Uniform-Pufferbindungspunkt angibt.
    - `gl.UNIFORM_BLOCK_DATA_SIZE`
      - : Gibt ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die minimale Gesamtgröße des Pufferobjekts angibt.
    - `gl.UNIFORM_BLOCK_ACTIVE_UNIFORMS`
      - : Gibt ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Anzahl der aktiven Uniforms im Uniform-Block angibt.
    - `gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`
      - : Gibt ein
        {{jsxref("Uint32Array")}} zurück, das die Liste der aktiven Uniforms im Uniform-Block angibt.
    - `gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`
      - : Gibt ein
        [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der angibt, ob der Uniform-Block vom Vertex-Shader referenziert wird.
    - `gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER`
      - : Gibt ein
        [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der angibt, ob der Uniform-Block vom Fragment-Shader referenziert wird.

### Rückgabewert

Hängt davon ab, welche Information mit dem Parameter `pname` angefordert wird. Wenn ein Fehler auftritt, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.getActiveUniforms()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniforms)
