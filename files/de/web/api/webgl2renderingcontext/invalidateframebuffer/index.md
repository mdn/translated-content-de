---
title: "WebGL2RenderingContext: invalidateFramebuffer() Methode"
short-title: invalidateFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateFramebuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.invalidateFramebuffer()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) invalidiert den Inhalt
von Anhängen in einem Framebuffer.

## Syntax

```js-nolint
invalidateFramebuffer(target, attachments)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindepunkt (Ziel) angibt. Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferdaten für Farbtiefe, Alpha,
        und Stencil-Puffern, die zur Erstellung eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachments`
  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Anhangspunkte angibt, die
    invalidiert werden sollen. Mögliche Werte:
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Invalidiert einen der Farbpuffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`
      - : Invalidiert den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`
      - : Invalidiert den Stencil-Puffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Invalidiert sowohl den Tiefen- als auch den Stencil-Puffer des Framebuffers.

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
