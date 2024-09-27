---
title: "WebGLRenderingContext: Methode bindFramebuffer()"
short-title: bindFramebuffer()
slug: Web/API/WebGLRenderingContext/bindFramebuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.bindFramebuffer()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) bindet den angegebenen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) an das spezifizierte Ziel oder, wenn das `framebuffer`-Argument null ist, den standardmäßigen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), der mit dem Canvas-Rendering-Kontext verbunden ist.

## Syntax

```js-nolint
bindFramebuffer(target, framebuffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) spezifiziert. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferspeicher für Farb-, Alpha-, Tiefen- und Schablonenpuffer, die sowohl als Ziel für das Zeichnen als auch als Quelle zum Lesen verwendet werden (siehe unten).

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Wird als Ziel für Zeichenoperationen wie `gl.draw*`, `gl.clear*` und `gl.blitFramebuffer` verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen wie `gl.readPixels` und `gl.blitFramebuffer` verwendet.

- `framebuffer`
  - : Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt, das gebunden werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), um das mit dem Rendering-Kontext verbundene [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt zu binden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` nicht `gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER` oder `gl.READ_FRAMEBUFFER` ist.

## Beispiele

### Binden eines Framebuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();

gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
```

### Aktuelle Bindungen abrufen

Um die aktuelle Framebuffer-Bindung zu überprüfen, fragen Sie die `FRAMEBUFFER_BINDING`-Konstante ab.

```js
gl.getParameter(gl.FRAMEBUFFER_BINDING);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
