---
title: "WebGLRenderingContext: getBufferParameter() Methode"
short-title: getBufferParameter()
slug: Web/API/WebGLRenderingContext/getBufferParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getBufferParameter()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über den Puffer zurück.

## Syntax

```js-nolint
getBufferParameter(target, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Zielpufferobjekt angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : Puffer, der für Elementindizes verwendet wird.

    Bei Verwendung eines [WebGL 2 Kontext](/de/docs/Web/API/WebGL2RenderingContext)
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer für das Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer für das Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die abzufragenden Informationen angibt. Mögliche Werte:

    - `gl.BUFFER_SIZE`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Größe des Puffers in Bytes angibt.
    - `gl.BUFFER_USAGE`

      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Nutzungsmuster des Puffers angibt. Einer der folgenden Werte:

        - `gl.STATIC_DRAW`
        - `gl.DYNAMIC_DRAW`
        - `gl.STREAM_DRAW`

        Bei Verwendung eines [WebGL 2 Kontext](/de/docs/Web/API/WebGL2RenderingContext)
        sind zusätzlich die folgenden Werte verfügbar:

        - `gl.STATIC_READ`
        - `gl.DYNAMIC_READ`
        - `gl.STREAM_READ`
        - `gl.STATIC_COPY`
        - `gl.DYNAMIC_COPY`
        - `gl.STREAM_COPY`

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie mit `pname` spezifiziert). Entweder ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) oder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types).

## Beispiele

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
