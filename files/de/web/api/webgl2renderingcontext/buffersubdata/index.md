---
title: "WebGL2RenderingContext: Methode bufferSubData()"
short-title: bufferSubData()
slug: Web/API/WebGL2RenderingContext/bufferSubData
l10n:
  sourceCommit: dccadcf38199191d7e26cd2e060e40bb86259efa
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.bufferSubData()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) aktualisiert einen Teil des Datenspeichers eines Pufferobjekts.

## Syntax

```js-nolint
bufferSubData(target, dstByteOffset, srcData)
bufferSubData(target, dstByteOffset, srcData, srcOffset)
bufferSubData(target, dstByteOffset, srcData, srcOffset, length)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (target) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z. B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbwerte.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transformations-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zur Speicherung von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.

- `dstByteOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Offset in Bytes angibt, ab dem der Datenaustausch beginnt.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das ein {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}
    darstellt und in den Datenspeicher kopiert wird.
- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Element-Index-Offset angibt, ab dem das Lesen des Puffers beginnt.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), standardmäßig 0, wobei 0 bedeutet, dass `bufferSubData` die Länge berechnen soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn die Daten über das Ende des Puffers geschrieben würden oder wenn `data` `null` ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht einer der erlaubten Enums ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
