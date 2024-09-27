---
title: "WebGL2RenderingContext: invalidateFramebuffer() Methode"
short-title: invalidateFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateFramebuffer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.invalidateFramebuffer()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) invalidiert den Inhalt
von Anhängen in einem Framebuffer.

## Syntax

```js-nolint
invalidateFramebuffer(target, attachments)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Sammlung von Buffer-Datenspeichern von Farb-, Alpha-, Tiefen- und Stencil-Buffern, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachments`

  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Anhangspunkte angibt, die invalidiert werden sollen. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Invalidiert einen der Farb-Buffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`
      - : Invalidiert den Tiefen-Buffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`
      - : Invalidiert den Stencil-Buffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Invalidiert sowohl den Tiefen- als auch den Stencil-Buffer des Framebuffers.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.invalidateFramebuffer(gl.READ_FRAMEBUFFER, [
  gl.COLOR_ATTACHMENT0,
  gl.COLOR_ATTACHMENT1,
]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.invalidateSubFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer)
