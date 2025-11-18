---
title: "WebGL2RenderingContext: getBufferSubData() Methode"
short-title: getBufferSubData()
slug: Web/API/WebGL2RenderingContext/getBufferSubData
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getBufferSubData()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) liest Daten von einem Pufferbindungspunkt und schreibt sie in einen {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}.

## Syntax

```js-nolint
getBufferSubData(target, srcByteOffset, dstData)
getBufferSubData(target, srcByteOffset, dstData, dstOffset)
getBufferSubData(target, srcByteOffset, dstData, dstOffset, length)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) spezifiziert. Mögliche Werte:
    - `gl.ARRAY_BUFFER`
      - : Puffer, der Scheitelpunktattribute enthält, wie zum Beispiel Scheitelpunktkoordinaten, Texturkoordinatendaten oder Scheitelpunktfarbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zum Speichern von Uniformblöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransferoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransferoperationen verwendet wird.

- `srcByteOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das den Byteversatz angibt, von dem aus mit dem Lesen aus dem Puffer begonnen wird.
- `dstData`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, in das die Daten kopiert werden. Wenn `dstData` ein {{jsxref("DataView")}} ist, werden `dstOffset` und `length` in Bytes interpretiert, ansonsten wird der Elementtyp von `dstData` verwendet.
- `dstOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Versatz angibt, an dem begonnen wird, in `dstData` zu schreiben.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu kopierenden Elemente angibt. Wenn dieser Wert 0 ist oder nicht angegeben wird, kopiert `getBufferSubData` bis zum Ende von `dstData`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `INVALID_VALUE`-Fehler wird generiert, wenn:

- `offset` + `returnedData.byteLength` über das Ende des Puffers hinausgehen würde
- `returnedData` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist
- `offset` kleiner als null ist.

Ein `INVALID_OPERATION`-Fehler wird generiert, wenn:

- null an `target` gebunden ist
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
