---
title: "WebGLRenderingContext: bindFramebuffer()-Methode"
short-title: bindFramebuffer()
slug: Web/API/WebGLRenderingContext/bindFramebuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bindFramebuffer()`**-Methode des [WebGL-API](/de/docs/Web/API/WebGL_API) bindet den angegebenen Zielpunkt an die bereitgestellte [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), oder, wenn das `framebuffer`-Argument null ist, den standardmäßigen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), der mit dem Canvas-Rendering-Kontext verbunden ist.

## Syntax

```js-nolint
bindFramebuffer(target, framebuffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) spezifiziert. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Datenspeicher für eine Sammlung von Farb-, Alpha-, Tiefen- und Stencil-Puffern, die sowohl als Ziel für Zeichnungen als auch als Quelle für das Lesen verwendet werden (siehe unten).

    Wenn ein [WebGL 2-Kontext](/de/docs/Web/API/WebGL2RenderingContext) verwendet wird, sind zusätzlich folgende Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Wird als Ziel für Zeichenoperationen wie `gl.draw*`, `gl.clear*` und `gl.blitFramebuffer` verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen wie `gl.readPixels` und `gl.blitFramebuffer` verwendet.

- `framebuffer`
  - : Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt zum Binden, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zum Binden des mit dem Rendering-Kontext verbundenen [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht `gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER` oder `gl.READ_FRAMEBUFFER` ist.

## Beispiele

### Einen Framebuffer binden

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
