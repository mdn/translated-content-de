---
title: "WebGLRenderingContext: Methode getBufferParameter()"
short-title: getBufferParameter()
slug: Web/API/WebGLRenderingContext/getBufferParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getBufferParameter()`** Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) gibt Informationen über den
Puffer zurück.

## Syntax

```js-nolint
getBufferParameter(target, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Zielpufferobjekt angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z. B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : Puffer, der für Element-Indizes verwendet wird.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}}
    stehen zusätzlich folgende Werte zur Verfügung:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixel-Transfer-Operationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixel-Transfer-Operationen verwendet wird.

- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die abzufragenden Informationen angibt. Mögliche Werte:

    - `gl.BUFFER_SIZE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Größe
        des Puffers in Bytes angibt.
    - `gl.BUFFER_USAGE`

      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das das
        Nutzungsmuster des Puffers angibt. Einer der folgenden Werte:

        - `gl.STATIC_DRAW`
        - `gl.DYNAMIC_DRAW`
        - `gl.STREAM_DRAW`

        Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}}
        stehen zusätzlich folgende Werte zur Verfügung:

        - `gl.STATIC_READ`
        - `gl.DYNAMIC_READ`
        - `gl.STREAM_READ`
        - `gl.STATIC_COPY`
        - `gl.DYNAMIC_COPY`
        - `gl.STREAM_COPY`

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie mit `pname` angegeben). Entweder ein
[`GLint`](/de/docs/Web/API/WebGL_API/Types) oder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types).

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
