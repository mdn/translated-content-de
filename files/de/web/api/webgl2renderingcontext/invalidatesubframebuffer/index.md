---
title: "WebGL2RenderingContext: Methode invalidateSubFramebuffer()"
short-title: invalidateSubFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateSubFramebuffer
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.invalidateSubFramebuffer()`** des [WebGL 2 API](/de/docs/Web/API/WebGL_API) invalidiert Teile des Inhalts von Anhängen in einem Framebuffer.

## Syntax

```js-nolint
invalidateSubFramebuffer(target, attachments, x, y, width, height)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindepunkt (target) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Sammlung von Datenpufferspeichern für Farb-, Alpha-, Tiefen- und Stencil-Puffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Lesevorgänge verwendet.

- `attachments`

  - : Ein {{jsxref("Array")}} von {{domxref("WebGL_API/Types", "GLenum")}}, das die zu invalidierenden Befestigungspunkte angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Invalidiert einen der Farb-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`
      - : Invalidiert den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`
      - : Invalidiert den Stencil-Puffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Invalidiert sowohl den Tiefen- als auch den Stencil-Puffer des Framebuffers.

- `x`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den linken Ursprung des Pixelrechtecks angibt, das invalidiert werden soll.
- `y`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den unteren Ursprung des Pixelrechtecks angibt, das invalidiert werden soll.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Breite des Pixelrechtecks angibt, das invalidiert werden soll.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der die Höhe des Pixelrechtecks angibt, das invalidiert werden soll.

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

- {{domxref("WebGL2RenderingContext.invalidateFramebuffer()")}}
