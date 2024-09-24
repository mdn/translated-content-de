---
title: "WebGLRenderingContext: getBufferParameter()-Methode"
short-title: getBufferParameter()
slug: Web/API/WebGLRenderingContext/getBufferParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getBufferParameter()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über den
Puffer zurück.

## Syntax

```js-nolint
getBufferParameter(target, pname)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Ziel des Pufferobjekts angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`

      - : Puffer, der für Elementindizes verwendet wird.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}}
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zum Speichern von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixel-Transfer-Operationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixel-Transfer-Operationen verwendet wird.

- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die abzufragende Information angibt. Mögliche Werte:

    - `gl.BUFFER_SIZE`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLint")}} zurück, das die Größe
        des Puffers in Bytes angibt.
    - `gl.BUFFER_USAGE`

      - : Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das das
        Verwendungsmuster des Puffers angibt. Einer der folgenden Werte:

        - `gl.STATIC_DRAW`
        - `gl.DYNAMIC_DRAW`
        - `gl.STREAM_DRAW`

        Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}}
        sind zusätzlich die folgenden Werte verfügbar:

        - `gl.STATIC_READ`
        - `gl.DYNAMIC_READ`
        - `gl.STREAM_READ`
        - `gl.STATIC_COPY`
        - `gl.DYNAMIC_COPY`
        - `gl.STREAM_COPY`

### Rückgabewert

Abhängig von den angeforderten Informationen (wie mit `pname` angegeben). Entweder ein
{{domxref("WebGL_API/Types", "GLint")}} oder ein {{domxref("WebGL_API/Types", "GLenum")}}.

## Beispiele

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferData()")}}
- Andere Puffer: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
