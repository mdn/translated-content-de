---
title: "WebGLRenderingContext: bindBuffer()-Methode"
short-title: bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.bindBuffer()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) bindet einen angegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an ein Ziel.

## Syntax

```js-nolint
bindBuffer(target, buffer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (das Ziel) angibt. Mögliche Werte:
    - `gl.ARRAY_BUFFER`
      - : Puffer mit Vertex-Attributen wie Vertex-Koordinaten, Texturkoordinaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer für Elementindizes.

    Bei Verwendung eines [WebGL-2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zum Speichern von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer für Pixelübertragungsoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer für Pixelübertragungsoperationen.

- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der gebunden werden soll, oder `null`, um das derzeit an das angegebene Ziel gebundene Objekt zu lösen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) kann nur an ein einziges Ziel gebunden werden. Der Versuch, den Puffer an ein anderes Ziel zu binden, löst einen `INVALID_OPERATION`-Fehler aus; die aktuelle Pufferbindung bleibt unverändert.

Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der mit [`deleteBuffer`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer) zum Löschen markiert wurde, kann nicht (erneut) gebunden werden. Ein entsprechender Versuch erzeugt einen `INVALID_OPERATION`-Fehler; die aktuelle Bindung bleibt unverändert.

## Beispiele

### Einen Puffer an ein Ziel binden

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### Aktuelle Bindungen abrufen

Um die aktuellen Pufferbindungen zu überprüfen, fragen Sie die Konstanten `ARRAY_BUFFER_BINDING` und `ELEMENT_ARRAY_BUFFER_BINDING` ab.

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
