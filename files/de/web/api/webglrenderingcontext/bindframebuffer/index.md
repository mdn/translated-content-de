---
title: "WebGLRenderingContext: bindFramebuffer()-Methode"
short-title: bindFramebuffer()
slug: Web/API/WebGLRenderingContext/bindFramebuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bindFramebuffer()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) bindet an das angegebene Ziel das bereitgestellte [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer). Ist das `framebuffer`-Argument null, wird das Standard-[`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) gebunden, das mit dem Canvas-Rendering-Kontext verknüpft ist.

## Syntax

```js-nolint
bindFramebuffer(target, framebuffer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Sammlungspufferdaten für Farb-, Alpha-, Tiefen- und Stencil-Puffer, die sowohl als Ziel für das Zeichnen als auch als Quelle für das Lesen verwendet werden (siehe unten).

    Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich folgende Werte zur Verfügung:
    - `gl.DRAW_FRAMEBUFFER`
      - : Wird als Ziel für Zeichenoperationen wie `gl.draw*`, `gl.clear*` und `gl.blitFramebuffer` verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen wie `gl.readPixels` und `gl.blitFramebuffer` verwendet.

- `framebuffer`
  - : Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt, das gebunden werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für die Bindung des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts, das mit dem Rendering-Kontext verknüpft ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht
`gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER` oder
`gl.READ_FRAMEBUFFER` ist.

## Beispiele

### Ein Framebuffer binden

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
