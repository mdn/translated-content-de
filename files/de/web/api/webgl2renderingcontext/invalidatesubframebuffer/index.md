---
title: "WebGL2RenderingContext: invalidateSubFramebuffer()-Methode"
short-title: invalidateSubFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateSubFramebuffer
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.invalidateSubFramebuffer()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) invalidiert Teile der Inhalte von Attachments in einem Framebuffer.

## Syntax

```js-nolint
invalidateSubFramebuffer(target, attachments, x, y, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindepunkt (Target) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferspeicher für Farbe, Alpha, Tiefe und Stencil-Puffer, die zur Darstellung eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachments`

  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die zu invalidierenden Attachment-Punkte angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Invalidiert einen der Farb-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`
      - : Invalidiert den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`
      - : Invalidiert den Stencil-Puffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Invalidiert sowohl den Tiefen- als auch den Stencil-Puffer des Framebuffers.

- `x`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den linken Ursprung des zu invalidierenden Pixel-Rechtecks angibt.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den unteren Ursprung des zu invalidierenden Pixel-Rechtecks angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite des zu invalidierenden Pixel-Rechtecks angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe des zu invalidierenden Pixel-Rechtecks angibt.

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
