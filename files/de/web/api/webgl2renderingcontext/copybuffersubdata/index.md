---
title: "WebGL2RenderingContext: copyBufferSubData() Methode"
short-title: copyBufferSubData()
slug: Web/API/WebGL2RenderingContext/copyBufferSubData
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.copyBufferSubData()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) kopiert einen Teil der Daten eines Puffers in einen anderen Puffer.

## Syntax

```js-nolint
copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size)
```

### Parameter

- `readTarget`, `writeTarget`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Target) spezifiziert, von dessen Datenspeicher gelesen oder in den geschrieben werden soll. Mögliche Werte:
    - `gl.ARRAY_BUFFER`: Puffer, der Vertex-Attribute enthält, wie zum Beispiel Vertex-Koordinaten, Texturkoordinaten-Daten oder Vertex-Farb-Daten.
    - `gl.ELEMENT_ARRAY_BUFFER`: Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`: Puffer zum Kopieren von einem Pufferobjekt in ein anderes (speziell für Kopieroperationen bereitgestellt).
    - `gl.COPY_WRITE_BUFFER`: Puffer zum Kopieren von einem Pufferobjekt in ein anderes (speziell für Kopieroperationen bereitgestellt).
    - `gl.TRANSFORM_FEEDBACK_BUFFER`: Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`: Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`: Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`: Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `readOffset`, `writeOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das den Byte-Offset spezifiziert, ab dem im Puffer gelesen oder geschrieben werden soll.
- `size`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types) in Bytes, der die Größe der zu kopierenden Daten vom `readTarget` zum `writeTarget` spezifiziert.

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
