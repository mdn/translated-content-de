---
title: "WebGL2RenderingContext: bufferSubData() Methode"
short-title: bufferSubData()
slug: Web/API/WebGL2RenderingContext/bufferSubData
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.bufferSubData()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) aktualisiert einen Teil des Datenspeichers eines Pufferobjekts.

## Syntax

```js-nolint
bufferSubData(target, dstByteOffset, srcData)
bufferSubData(target, dstByteOffset, srcData, srcOffset)
bufferSubData(target, dstByteOffset, srcData, srcOffset, length)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindepunkt (Ziel) angibt. Mögliche Werte:
    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbwerte.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer für das Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer für das Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der für die Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `dstByteOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Versatz in Bytes angibt, an dem der Datenaustausch
    beginnen wird.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das einen {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}
    ansieht, der in den Datenspeicher kopiert wird.
- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindexversatz angibt, ab dem der Puffer
    gelesen werden soll.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) mit der Voreinstellung 0, wobei 0 bedeutet, dass `bufferSubData` die Länge berechnen soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn die Daten über
  das Ende des Puffers hinaus geschrieben würden oder wenn `data` `null` ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht einer der
  erlaubten Enums ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
