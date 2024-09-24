---
title: "WebGLRenderingContext: bindBuffer()-Methode"
short-title: bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindBuffer()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) bindet einen gegebenen {{domxref("WebGLBuffer")}} an ein Ziel.

## Syntax

```js-nolint
bindBuffer(target, buffer)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbwerte.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Element-Indizes verwendet wird.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer für Pixel-Übertragungsoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer für Pixel-Übertragungsoperationen.

- `buffer`
  - : Ein zu bindender {{domxref("WebGLBuffer")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Es kann nur ein Ziel an einen gegebenen {{domxref("WebGLBuffer")}} gebunden werden. Ein Versuch, den Puffer an ein anderes Ziel zu binden, wirft einen `INVALID_OPERATION`-Fehler und die aktuelle Pufferbindung bleibt unverändert.

Ein {{domxref("WebGLBuffer")}}, der mit {{domxref("WebGLRenderingContext.deleteBuffer()", "deleteBuffer")}} zur Löschung markiert wurde, kann nicht (erneut) gebunden werden. Ein Versuch, dies zu tun, erzeugt einen `INVALID_OPERATION`-Fehler, und die aktuelle Bindung bleibt unberührt.

## Beispiele

### Binden eines Puffers an ein Ziel

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### Abrufen der aktuellen Bindungen

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

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Andere Puffer: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
