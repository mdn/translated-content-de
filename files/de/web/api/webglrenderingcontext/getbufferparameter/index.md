---
title: "WebGLRenderingContext: getBufferParameter() Methode"
short-title: getBufferParameter()
slug: Web/API/WebGLRenderingContext/getBufferParameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getBufferParameter()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) liefert Informationen über den
Buffer.

## Syntax

```js-nolint
getBufferParameter(target, pname)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Zielpufferobjekt angibt. Mögliche Werte:
    - `gl.ARRAY_BUFFER`
      - : Puffer enthält Vertex-Attribute, wie z.B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer wird für Element-Indizes verwendet.

    Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext)
    stehen zusätzlich die folgenden Werte zur Verfügung:
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zum Speichern von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransferoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransferoperationen verwendet wird.

- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die abzufragende Information spezifiziert. Mögliche Werte:
    - `gl.BUFFER_SIZE`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Größe
        des Puffers in Bytes angibt.
    - `gl.BUFFER_USAGE`
      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das das
        Nutzungsmuster des Puffers angibt. Einer der folgenden Werte:
        - `gl.STATIC_DRAW`
        - `gl.DYNAMIC_DRAW`
        - `gl.STREAM_DRAW`

        Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext)
        stehen zusätzlich die folgenden Werte zur Verfügung:
        - `gl.STATIC_READ`
        - `gl.DYNAMIC_READ`
        - `gl.STREAM_READ`
        - `gl.STATIC_COPY`
        - `gl.DYNAMIC_COPY`
        - `gl.STREAM_COPY`

### Rückgabewert

Hängt von der angeforderten Information ab (wie durch `pname` angegeben). Entweder ein
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
