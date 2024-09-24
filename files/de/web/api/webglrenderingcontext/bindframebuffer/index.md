---
title: "WebGLRenderingContext: bindFramebuffer() Methode"
short-title: bindFramebuffer()
slug: Web/API/WebGLRenderingContext/bindFramebuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindFramebuffer()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) bindet das angegebene Ziel an das bereitgestellte {{domxref("WebGLFramebuffer")}}, oder, wenn das `framebuffer`-Argument null ist, an das standardmäßige {{domxref("WebGLFramebuffer")}}, das mit dem Canvas-Rendering-Kontext verbunden ist.

## Syntax

```js-nolint
bindFramebuffer(target, framebuffer)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferdatenspeichern für Farb-, Alpha-, Tiefen- und Stencil-Puffer, die sowohl als Ziel für das Zeichnen als auch als Quelle zum Lesen verwendet werden (siehe unten).

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}}
    sind zusätzlich folgende Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Wird als Ziel für Zeichenoperationen wie `gl.draw*`, `gl.clear*` und `gl.blitFramebuffer` verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen wie `gl.readPixels` und `gl.blitFramebuffer` verwendet.

- `framebuffer`
  - : Ein {{domxref("WebGLFramebuffer")}}-Objekt zum Binden oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zum Binden des {{domxref("HTMLCanvasElement")}} oder des {{domxref("OffscreenCanvas")}}-Objekts, das mit dem Rendering-Kontext verbunden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` nicht
`gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER` oder
`gl.READ_FRAMEBUFFER` ist.

## Beispiele

### Binden eines Framebuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();

gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
```

### Aktuelle Bindungen abrufen

Um die aktuelle Framebuffer-Bindung zu überprüfen, fragen Sie die `FRAMEBUFFER_BINDING` Konstante ab.

```js
gl.getParameter(gl.FRAMEBUFFER_BINDING);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
