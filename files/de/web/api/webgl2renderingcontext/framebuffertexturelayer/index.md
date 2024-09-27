---
title: "WebGL2RenderingContext: framebufferTextureLayer() Methode"
short-title: framebufferTextureLayer()
slug: Web/API/WebGL2RenderingContext/framebufferTextureLayer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.framebufferTextureLayer()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet eine einzelne Schicht einer Textur an einen `framebuffer`.

Diese Methode ähnelt [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D), jedoch wird nur eine bestimmte einzelne Schicht des Textur-Levels an den Anhangspunkt gebunden.

## Syntax

```js-nolint
framebufferTextureLayer(target, attachment, texture, level, layer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Target) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`: Sammlung von Pufferdatenspeichern der Farb-, Alpha-,
      Tiefen- und Schablonenpuffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`: Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`: Wird als Quelle für Leseoperationen verwendet.

- `attachment`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Anhangspunkt für die
    `texture` angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`: Hängt die Textur an einen der
      Farb-Puffer des Framebuffers an.
    - `gl.DEPTH_ATTACHMENT`: Hängt die Textur an den Tiefenpuffer
      des Framebuffers an.
    - `gl.STENCIL_ATTACHMENT`: Hängt die Textur an den Schablonenpuffer
      des Framebuffers an.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Schablonenpuffer.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) Objekt, dessen Bild angehängt werden soll.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Mipmap-Ebene des Texturbildes angibt, das angehängt werden soll.
- `layer`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Schicht des Texturbildes angibt, das angehängt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.framebufferTextureLayer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, texture, 0, 8);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
