---
title: "WebGL2RenderingContext: Methode getBufferSubData()"
short-title: getBufferSubData()
slug: Web/API/WebGL2RenderingContext/getBufferSubData
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getBufferSubData()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) liest Daten von einem Pufferbindungspunkt und schreibt sie in ein {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}.

## Syntax

```js-nolint
getBufferSubData(target, srcByteOffset, dstData)
getBufferSubData(target, srcByteOffset, dstData, dstOffset)
getBufferSubData(target, srcByteOffset, dstData, dstOffset, length)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) spezifiziert. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B.
        Vertexkoordinaten, Texturkoordinatendaten oder Vertexfarbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt
        zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt
        zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transformations-Feedback
        Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zur Speicherung von Uniformblöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.

- `srcByteOffset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, das den Byte-Offset angibt, ab dem das Lesen
    aus dem Puffer begonnen wird.
- `dstData`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, in das die Daten kopiert werden. Wenn `dstData` eine
    {{jsxref("DataView")}} ist, werden `dstOffset` und `length` in Bytes interpretiert, andernfalls wird der Elementtyp von `dstData` verwendet.
- `dstOffset` {{optional_inline}}
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, das den Elementindex-Offset angibt, ab dem in
    `dstData` geschrieben wird.
- `length` {{optional_inline}}
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, das die Anzahl der zu kopierenden Elemente angibt. Wenn dies 0 ist oder
    nicht angegeben, kopiert `getBufferSubData` bis zum Ende von
    `dstData`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `INVALID_VALUE`-Fehler wird ausgelöst, wenn:

- `offset` + `returnedData.byteLength` über das
  Ende des Puffers hinausreichen würde
- `returnedData` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist
- `offset` kleiner als null ist.

Ein `INVALID_OPERATION`-Fehler wird ausgelöst, wenn:

- null an `target` gebunden ist
- `target` ein `TRANSFORM_FEEDBACK_BUFFER` ist und ein beliebiges Transformations-Feedback-
  Objekt derzeit aktiv ist.

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

- {{domxref("WebGLRenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
- {{domxref("WebGL2RenderingContext.copyBufferSubData()")}}
