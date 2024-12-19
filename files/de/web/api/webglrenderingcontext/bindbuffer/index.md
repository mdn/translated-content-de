---
title: "WebGLRenderingContext: bindBuffer() Methode"
short-title: bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bindBuffer()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet ein gegebenes
[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an ein Ziel.

## Syntax

```js-nolint
bindBuffer(target, buffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (target) spezifiziert. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Buffer, der Vertex-Attribute enthält, wie z.B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbwerte.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Buffer, der für Elementindizes verwendet wird.

    Bei der Verwendung eines [WebGL 2 Kontext](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Buffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.COPY_WRITE_BUFFER`
      - : Buffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Buffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Buffer zur Speicherung von Uniformblöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Buffer für Pixeltransfers.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Buffer für Pixeltransfers.

- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) zum Binden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Nur ein Ziel kann an ein gegebenes [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) gebunden werden. Ein Versuch, den Puffer an ein anderes Ziel zu binden, löst einen `INVALID_OPERATION` Fehler aus, und die aktuelle Pufferbindung bleibt unverändert.

Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), das mit
[`deleteBuffer`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer) zur Löschung markiert wurde, kann nicht (wieder) gebunden werden. Ein Versuch, dies zu tun, erzeugt einen `INVALID_OPERATION` Fehler, und die aktuelle Bindung bleibt unberührt.

## Beispiele

### Binden eines Buffers an ein Ziel

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### Aktuelle Bindungen abrufen

Um die aktuellen Pufferbindungen zu überprüfen, können Sie die Konstanten `ARRAY_BUFFER_BINDING` und `ELEMENT_ARRAY_BUFFER_BINDING` abfragen.

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
- Weitere Buffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
