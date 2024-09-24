---
title: "WebGL2RenderingContext: Methode copyBufferSubData()"
short-title: copyBufferSubData()
slug: Web/API/WebGL2RenderingContext/copyBufferSubData
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.copyBufferSubData()`**-Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) kopiert einen Teil der Daten eines
Buffers in einen anderen Buffer.

## Syntax

```js-nolint
copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size)
```

### Parameter

- `readTarget`, `writeTarget`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindepunkt (Ziel) angibt, von dessen Datenspeicher
    gelesen oder geschrieben werden soll. Mögliche Werte:

    - `gl.ARRAY_BUFFER`: Buffer, der Vertex-Attribute enthält, wie z.B.
      Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbendaten.
    - `gl.ELEMENT_ARRAY_BUFFER`: Buffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`: Buffer zum Kopieren von einem Pufferobjekt zu
      einem anderen (speziell für Kopiervorgänge vorgesehen).
    - `gl.COPY_WRITE_BUFFER`: Buffer zum Kopieren von einem Pufferobjekt zu
      einem anderen (speziell für Kopiervorgänge vorgesehen).
    - `gl.TRANSFORM_FEEDBACK_BUFFER`: Buffer für Transform-Feedback-
      Vorgänge.
    - `gl.UNIFORM_BUFFER`: Buffer, der zum Speichern von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`: Buffer, der für Pixelübertragungsvorgänge verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`: Buffer, der für Pixelübertragungsvorgänge verwendet wird.

- `readOffset`, `writeOffset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, das den Byte-Offset angibt, von dem aus gestartet werden soll
    zu lesen oder zu schreiben.
- `size`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}} in Bytes, das die Größe der Daten angibt, die von
    `readTarget` zu `writeTarget` kopiert werden sollen.

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

- {{domxref("WebGLRenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}
