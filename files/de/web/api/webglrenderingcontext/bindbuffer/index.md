---
title: "WebGLRenderingContext: bindBuffer()-Methode"
short-title: bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bindBuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet ein gegebenes [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an ein Ziel.

## Syntax

```js-nolint
bindBuffer(target, buffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindepunkt (das Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbendaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Element-Indizes verwendet wird.

    Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der für das Speichern von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.

- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der gebunden werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Nur ein Ziel kann an ein gegebenes [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) gebunden werden. Ein Versuch, den Puffer an ein anderes Ziel zu binden, führt zu einem `INVALID_OPERATION` Fehler und die aktuelle Pufferbindung bleibt unverändert.

Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), das zur Löschung mit [`deleteBuffer`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer) markiert wurde, kann nicht (erneut) gebunden werden. Ein Versuch, dies zu tun, erzeugt einen `INVALID_OPERATION` Fehler, und die aktuelle Bindung bleibt unberührt.

## Beispiele

### Einen Puffer an ein Ziel binden

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### Aktuelle Bindungen abrufen

Um die aktuellen Pufferbindungen zu überprüfen, fragen Sie die Konstanten `ARRAY_BUFFER_BINDING`
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
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
