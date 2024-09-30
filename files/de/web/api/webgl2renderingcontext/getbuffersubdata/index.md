---
title: "WebGL2RenderingContext: getBufferSubData()-Methode"
short-title: getBufferSubData()
slug: Web/API/WebGL2RenderingContext/getBufferSubData
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getBufferSubData()`**-Methode des
[WebGL 2 API](/de/docs/Web/API/WebGL_API) liest Daten von einem Buffer-Bindepunkt und schreibt sie in einen {{jsxref("ArrayBuffer")}} oder
{{jsxref("SharedArrayBuffer")}}.

## Syntax

```js-nolint
getBufferSubData(target, srcByteOffset, dstData)
getBufferSubData(target, srcByteOffset, dstData, dstOffset)
getBufferSubData(target, srcByteOffset, dstData, dstOffset, length)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindepunkt (target) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Buffer, der Vertex-Attribute enthält, wie z. B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Buffer, der für Element-Indizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Buffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Buffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Buffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Buffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Buffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Buffer, der für Pixelübertragungsoperationen verwendet wird.

- `srcByteOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der den Byte-Offset angibt, ab dem aus dem Buffer gelesen werden soll.
- `dstData`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, in das die Daten kopiert werden. Wenn `dstData` ein
    {{jsxref("DataView")}} ist, werden `dstOffset` und `length` in Bytes interpretiert, andernfalls wird der Elementtyp von `dstData` verwendet.
- `dstOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Offset angibt, ab dem in `dstData` geschrieben werden soll.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu kopierenden Elemente angibt. Wenn dies 0 ist oder nicht angegeben wird, kopiert `getBufferSubData` bis zum Ende von `dstData`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `INVALID_VALUE`-Fehler wird generiert, wenn:

- `offset` + `returnedData.byteLength` über das Ende des Buffers hinausgehen würde.
- `returnedData` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist.
- `offset` kleiner als null ist.

Ein `INVALID_OPERATION`-Fehler wird generiert, wenn:

- null an `target` gebunden ist.
- `target` `TRANSFORM_FEEDBACK_BUFFER` ist und ein Transform-Feedback-Objekt derzeit aktiv ist.

## Beispiele

```js
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

const arrBuffer = new ArrayBuffer(
  vertices.length * Float32Array.BYTES_PER_ELEMENT,
);
gl.getBufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(arrBuffer));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter)
- [`WebGL2RenderingContext.copyBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/copyBufferSubData)
