---
title: "WebGL2RenderingContext: invalidateFramebuffer()-Methode"
short-title: invalidateFramebuffer()
slug: Web/API/WebGL2RenderingContext/invalidateFramebuffer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.invalidateFramebuffer()`**-Methode
der [WebGL 2 API](/de/docs/Web/API/WebGL_API) invalidiert die Inhalte
von Attachments in einem Framebuffer.

## Syntax

```js-nolint
invalidateFramebuffer(target, attachments)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindepunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`
      - : Sammlung von Puffer-Datenlagern für Farb-, Alpha-,
        Tiefen- und Schablonenpuffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachments`

  - : Ein {{jsxref("Array")}} von {{domxref("WebGL_API/Types", "GLenum")}}, der die Attachment-Punkte angibt, die
    invalidiert werden sollen. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Invalidiert einen der Farbpuffer
        des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`
      - : Invalidiert den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`
      - : Invalidiert den Schablonenpuffer
        des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`
      - : Invalidiert sowohl den Tiefen- als auch den Schablonenpuffer
        des Framebuffers.

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

- {{domxref("WebGL2RenderingContext.invalidateSubFramebuffer()")}}
