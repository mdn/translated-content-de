---
title: "WebGL2RenderingContext: bufferSubData() Methode"
short-title: bufferSubData()
slug: Web/API/WebGL2RenderingContext/bufferSubData
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.bufferSubData()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) aktualisiert einen Teil des Datenspeichers eines Pufferobjekts.

## Syntax

```js-nolint
bufferSubData(target, dstByteOffset, srcData)
bufferSubData(target, dstByteOffset, srcData, srcOffset)
bufferSubData(target, dstByteOffset, srcData, srcOffset, length)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Scheitelpunktattribute enthält, wie z.B.
        Scheitelpunktkoordinaten, Texturkoordinatendaten oder Scheitelpunktfarbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `dstByteOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Versatz in Bytes angibt, ab dem der Datenaustausch beginnen soll.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("DataView")}} oder ein {{jsxref("TypedArray")}}, das in den Datenspeicher kopiert wird.
- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Versatz angibt, ab dem das Lesen des Puffers beginnt.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der standardmäßig 0 ist, wobei 0 bedeutet, dass `bufferSubData` die Länge berechnen soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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
