---
title: "WebGL2RenderingContext: bufferSubData() Methode"
short-title: bufferSubData()
slug: Web/API/WebGL2RenderingContext/bufferSubData
l10n:
  sourceCommit: 35f5a02397245ab1fd778500da125883f5512b13
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bufferSubData()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) aktualisiert einen Teil eines Pufferobjekt-Datenspeichers.

## Syntax

```js-nolint
bufferSubData(target, dstByteOffset, srcData)
bufferSubData(target, dstByteOffset, srcData, srcOffset)
bufferSubData(target, dstByteOffset, srcData, srcOffset, length)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B.
        Vertex-Koordinaten, Textur-Koordinatendaten oder Vertex-Farbwerte.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transformationsfeedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zur Speicherung von Uniformblöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer für Pixelübertragungsoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer für Pixelübertragungsoperationen.

- `dstByteOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das einen Versatz in Bytes angibt, an dem die Datenersetzung
    beginnen wird.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("DataView")}} oder ein {{jsxref("TypedArray")}},
    das in den Datenspeicher kopiert wird.
- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Versatz angibt, an dem das Lesen
    des Puffers beginnt.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der standardmäßig 0 ist, wobei 0 bedeutet, dass `bufferSubData` die Länge berechnen sollte.

### Rückgabewert

Keinen ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn die Daten über das Ende des Puffers hinaus geschrieben würden oder wenn `data` `null` ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht eines der erlaubten Enums ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
