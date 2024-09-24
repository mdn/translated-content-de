---
title: "WebGL2RenderingContext: Methode bufferSubData()"
short-title: bufferSubData()
slug: Web/API/WebGL2RenderingContext/bufferSubData
l10n:
  sourceCommit: 35f5a02397245ab1fd778500da125883f5512b13
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bufferSubData()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) aktualisiert einen Teil des Datenbereichs eines Pufferobjekts.

## Syntax

```js-nolint
bufferSubData(target, dstByteOffset, srcData)
bufferSubData(target, dstByteOffset, srcData, srcOffset)
bufferSubData(target, dstByteOffset, srcData, srcOffset, length)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindepunkt (Target) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B.
        Vertex-Koordinaten, Textur-Koordinatendaten oder Vertex-Farbendaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Element-Indizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zum Speichern von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `dstByteOffset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der einen Offset in Bytes angibt, an dem der Datenaustausch
    beginnen wird.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("DataView")}}, oder ein {{jsxref("TypedArray")}},
    das in den Datenspeicher kopiert wird.
- `srcOffset` {{optional_inline}}
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, das den Elementindex-Offset angibt, ab dem der Puffer gelesen werden soll.
- `length` {{optional_inline}}
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der standardmäßig 0 ist, wobei 0 bedeutet, dass `bufferSubData` die Länge berechnen soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn die Daten über das Ende des Puffers hinaus geschrieben würden oder wenn `data` `null` ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht einer der erlaubten Enums ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferData()")}}
- Andere Puffer: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
