---
title: "WebGL2RenderingContext: invalidateSubFramebuffer()-Methode"
short-title: invalidateSubFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateSubFramebuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.invalidateSubFramebuffer()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) ungültig erklärt Teile der Inhalte von Anhängen in einem Framebuffer.

## Syntax

```js-nolint
invalidateSubFramebuffer(target, attachments, x, y, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferdaten für Farb-, Alpha-, Tiefen- und Schablonenpuffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachments`

  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die zu invalidierenden Anhangspunkte angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Invalidiert einen der Farb-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`
      - : Invalidiert den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`
      - : Invalidiert den Schablonenpuffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Invalidiert sowohl den Tiefen- als auch den Schablonenpuffer des Framebuffers.

- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den linken Ursprung des zu invalidierenden Pixelrechtecks angibt.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den unteren Ursprung des zu invalidierenden Pixelrechtecks angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite des zu invalidierenden Pixelrechtecks angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe des zu invalidierenden Pixelrechtecks angibt.

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
