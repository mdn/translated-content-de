---
title: "WebGL2RenderingContext: invalidateFramebuffer() Methode"
short-title: invalidateFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateFramebuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.invalidateFramebuffer()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) ungültigt die Inhalte von Anhängen in einem Framebuffer.

## Syntax

```js-nolint
invalidateFramebuffer(target, attachments)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferspeicherdaten von Farb-, Alpha-, Tiefen- und Stencil-Puffern, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachments`

  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Anhangspunkte angibt, die ungültig gemacht werden sollen. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Macht einen der Farbpuffer des Framebuffers ungültig.
    - `gl.DEPTH_ATTACHMENT`
      - : Macht den Tiefenpuffer des Framebuffers ungültig.
    - `gl.STENCIL_ATTACHMENT`
      - : Macht den Stencil-Puffer des Framebuffers ungültig.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Macht sowohl den Tiefen- als auch den Stencil-Puffer des Framebuffers ungültig.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
