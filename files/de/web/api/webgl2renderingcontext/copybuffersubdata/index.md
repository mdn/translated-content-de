---
title: "WebGL2RenderingContext: Methode copyBufferSubData()"
short-title: copyBufferSubData()
slug: Web/API/WebGL2RenderingContext/copyBufferSubData
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.copyBufferSubData()`** Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) kopiert einen Teil der Daten eines
Buffers in einen anderen Buffer.

## Syntax

```js-nolint
copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size)
```

### Parameter

- `readTarget`, `writeTarget`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt, von dessen Datenspeicher
    gelesen oder geschrieben werden soll. Mögliche Werte:

    - `gl.ARRAY_BUFFER`: Buffer, der Vertex-Attribute enthält, wie z. B.
      Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbendaten.
    - `gl.ELEMENT_ARRAY_BUFFER`: Buffer, der für Element-Indizes verwendet wird.
    - `gl.COPY_READ_BUFFER`: Buffer zum Kopieren von einem Pufferobjekt zu
      einem anderen (speziell für Kopiervorgänge bereitgestellt).
    - `gl.COPY_WRITE_BUFFER`: Buffer zum Kopieren von einem Pufferobjekt zu
      einem anderen (speziell für Kopiervorgänge bereitgestellt).
    - `gl.TRANSFORM_FEEDBACK_BUFFER`: Buffer für Transform-Feedback-
      Operationen.
    - `gl.UNIFORM_BUFFER`: Buffer zum Speichern von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`: Buffer für Pixel-Transfer-Operationen.
    - `gl.PIXEL_UNPACK_BUFFER`: Buffer für Pixel-Transfer-Operationen.

- `readOffset`, `writeOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der den Byte-Offset angibt, ab dem mit dem Lesen
    oder Schreiben im Buffer begonnen werden soll.
- `size`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types) in Bytes, der die Größe der Daten angibt, die von
    `readTarget` zu `writeTarget` kopiert werden sollen.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
