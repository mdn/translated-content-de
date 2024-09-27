---
title: "WebGL2RenderingContext: copyBufferSubData()-Methode"
short-title: copyBufferSubData()
slug: Web/API/WebGL2RenderingContext/copyBufferSubData
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.copyBufferSubData()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) kopiert einen Teil der Daten eines Puffers in einen anderen Puffer.

## Syntax

```js-nolint
copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size)
```

### Parameter

- `readTarget`, `writeTarget`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindepunkt (Ziel) angibt, aus dessen Datenspeicher gelesen oder geschrieben werden soll. Mögliche Werte:

    - `gl.ARRAY_BUFFER`: Puffer, der Vertex-Attribute enthält, wie z.B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`: Puffer für Elementindizes.
    - `gl.COPY_READ_BUFFER`: Puffer zum Kopieren von einem Pufferobjekt zum anderen (speziell für Kopieroperationen bereitgestellt).
    - `gl.COPY_WRITE_BUFFER`: Puffer zum Kopieren von einem Pufferobjekt zum anderen (speziell für Kopieroperationen bereitgestellt).
    - `gl.TRANSFORM_FEEDBACK_BUFFER`: Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`: Puffer, der für das Speichern von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`: Puffer für Pixelübertragungsoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`: Puffer für Pixelübertragungsoperationen.

- `readOffset`, `writeOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der den Byte-Offset angibt, von dem aus das Lesen oder Schreiben im Puffer begonnen werden soll.
- `size`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types) in Bytes, der die Größe der Daten angibt, die von `readTarget` zu `writeTarget` kopiert werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const srcBuffer = gl.createBuffer();
const dstBuffer = gl.createBuffer();

const data = new Float32Array(vertices);
const length = vertices.length * 4;

gl.bindBuffer(gl.ARRAY_BUFFER, srcBuffer);
gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
gl.bindBuffer(gl.COPY_READ_BUFFER, srcBuffer);

gl.bindBuffer(gl.ARRAY_BUFFER, dstBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(length), gl.STATIC_DRAW);

gl.copyBufferSubData(gl.COPY_READ_BUFFER, gl.ARRAY_BUFFER, 0, 0, length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter)
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)
