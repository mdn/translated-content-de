---
title: "WebGL2RenderingContext: invalidateSubFramebuffer() Methode"
short-title: invalidateSubFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateSubFramebuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.invalidateSubFramebuffer()`** Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) invalidiert Teile des Inhalts von Anhängen in einem Framebuffer.

## Syntax

```js-nolint
invalidateSubFramebuffer(target, attachments, x, y, width, height)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Sammlung von Puffer-Datenspeichern für Farb-, Alpha-, Tiefen- und Schablonenpuffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachments`
  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Anhangspunkte angibt, die invalidiert werden sollen. Mögliche Werte:
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Invalidiert einen der Farbe-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`
      - : Invalidiert den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`
      - : Invalidiert den Schablonenpuffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Invalidiert sowohl den Tiefen- als auch den Schablonenpuffer des Framebuffers.

- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die linke Herkunft des Pixelrechtecks angibt, das invalidiert werden soll.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die untere Herkunft des Pixelrechtecks angibt, das invalidiert werden soll.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite des zu invalidierenden Pixelrechtecks angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe des zu invalidierenden Pixelrechtecks angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.invalidateSubFramebuffer(
  gl.READ_FRAMEBUFFER,
  [gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1],
  0,
  0,
  256,
  256,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.invalidateFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer)
