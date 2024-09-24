---
title: "WebGLRenderingContext: Methode bufferSubData()"
short-title: bufferSubData()
slug: Web/API/WebGLRenderingContext/bufferSubData
l10n:
  sourceCommit: 3cd9e1f8280992b00230dcd680518ae2ef7a8f86
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bufferSubData()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) aktualisiert einen Teil des Datenspeichers eines Pufferobjekts.

## Syntax

```js-nolint
bufferSubData(target, offset)
bufferSubData(target, offset, srcData)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Ziel) angibt. Mögliche Werte sind:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : Puffer, der für Elementindices verwendet wird.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}},
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zur Speicherung von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer zur Durchführung von Pixelübertragungsoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer zur Durchführung von Pixelübertragungsoperationen.

- `dstByteOffset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, das den Offset in Bytes angibt, ab dem der Datenaustausch
    beginnen soll.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("DataView")}} oder ein {{jsxref("TypedArray")}},
    das in den Datenspeicher kopiert wird.
- `srcOffset`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Elementindex-Offset angibt, ab dem der Puffer
    gelesen werden soll.
- `length` {{optional_inline}}
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, standardmäßig 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn die Daten über das Ende des Puffers hinaus geschrieben würden
  oder wenn `data` `null` ist.
- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` nicht einer der
  erlaubten Enums ist.

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

- {{domxref("WebGL2RenderingContext.bufferSubData()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferData()")}}
- Andere Puffer: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
