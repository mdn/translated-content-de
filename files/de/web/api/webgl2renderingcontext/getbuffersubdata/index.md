---
title: "WebGL2RenderingContext: getBufferSubData()-Methode"
short-title: getBufferSubData()
slug: Web/API/WebGL2RenderingContext/getBufferSubData
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getBufferSubData()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) liest Daten von einem Puffer-Bindungspunkt und schreibt sie in ein {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}.

## Syntax

```js-nolint
getBufferSubData(target, srcByteOffset, dstData)
getBufferSubData(target, srcByteOffset, dstData, dstOffset)
getBufferSubData(target, srcByteOffset, dstData, dstOffset, length)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbwerte.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zur Speicherung von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer für Pixeltransfer-Operationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer für Pixeltransfer-Operationen.

- `srcByteOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das den Byte-Offset angibt, ab dem mit dem Lesen aus dem Puffer begonnen werden soll.
- `dstData`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, in das die Daten kopiert werden sollen. Wenn `dstData` ein {{jsxref("DataView")}} ist, dann werden `dstOffset` und `length` in Bytes interpretiert, ansonsten wird der Elementtyp von `dstData` verwendet.
- `dstOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Offset angibt, ab dem in `dstData` geschrieben werden soll.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu kopierenden Elemente angibt. Wenn dieser Wert 0 ist oder nicht angegeben wird, kopiert `getBufferSubData` bis zum Ende von `dstData`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `INVALID_VALUE` Fehler wird erzeugt, wenn:

- `offset` + `returnedData.byteLength` über das Ende des Puffers hinausgehen würde
- `returnedData` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist
- `offset` kleiner als null ist.

Ein `INVALID_OPERATION` Fehler wird erzeugt, wenn:

- Null auf `target` gebunden ist
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
