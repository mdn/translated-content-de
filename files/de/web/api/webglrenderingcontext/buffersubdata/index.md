---
title: "WebGLRenderingContext: Methode bufferSubData()"
short-title: bufferSubData()
slug: Web/API/WebGLRenderingContext/bufferSubData
l10n:
  sourceCommit: dccadcf38199191d7e26cd2e060e40bb86259efa
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bufferSubData()`** Methode des
[WebGL API](/de/docs/Web/API/WebGL_API) aktualisiert einen Teil des Datenspeichers eines Pufferobjekts.

## Syntax

```js-nolint
bufferSubData(target, offset)
bufferSubData(target, offset, srcData)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B.
        Vertex-Koordinaten, Texturkoordinaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : Puffer, der für Element-Indizes verwendet wird.

    Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext)
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.

- `dstByteOffset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der ein Offset in Bytes angibt, bei dem die Datenersetzung
    beginnen soll.
- `srcData` {{optional_inline}}
  - : Eine {{jsxref("TypedArray")}} oder eine {{jsxref("DataView")}}, die eine {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}
    ansieht und in den Datenspeicher kopiert wird.
- `srcOffset`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Offset angibt, ab dem der Puffer
    gelesen werden soll.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der standardmäßig 0 ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE` Fehler wird geworfen, wenn die Daten über das Ende des Puffers hinaus geschrieben würden oder wenn `data` `null` ist.
- Ein `gl.INVALID_ENUM` Fehler wird geworfen, wenn `target` nicht eines der erlaubten Enums ist.

## Beispiele

### Verwendung von `bufferSubData`

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
const data = new Float32Array([1, 2, 3, 4]);
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
gl.bufferSubData(gl.ARRAY_BUFFER, 512, data);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.bufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferSubData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
