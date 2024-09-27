---
title: "WebGLRenderingContext: bindBuffer()-Methode"
short-title: bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindBuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet einen gegebenen
[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an ein Ziel.

## Syntax

```js-nolint
bindBuffer(target, buffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) spezifiziert. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Buffer, der Vertex-Attribute enthält, wie z.B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Buffer, der für Element-Indizes verwendet wird.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontextes", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Buffer zum Kopieren von einem Buffer-Objekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Buffer zum Kopieren von einem Buffer-Objekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Buffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Buffer, der für die Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Buffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Buffer, der für Pixelübertragungsoperationen verwendet wird.

- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Es kann nur ein Ziel an einen gegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) gebunden werden. Ein Versuch, den Buffer an ein anderes Ziel zu binden, löst einen `INVALID_OPERATION`-Fehler aus und die aktuelle Buffer-Bindung bleibt unverändert.

Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der zur Löschung mit
[`deleteBuffer`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer) markiert wurde, kann nicht (erneut) gebunden werden. Ein Versuch dies zu tun, erzeugt einen `INVALID_OPERATION`-Fehler, und die aktuelle Bindung bleibt unberührt.

## Beispiele

### Einen Buffer an ein Ziel binden

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### Aktuelle Bindungen abfragen

Um die aktuellen Buffer-Bindungen zu überprüfen, fragen Sie die Konstanten `ARRAY_BUFFER_BINDING`
und `ELEMENT_ARRAY_BUFFER_BINDING` ab.

```js
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
- Andere Buffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
