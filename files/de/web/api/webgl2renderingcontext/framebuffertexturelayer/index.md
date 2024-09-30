---
title: "WebGL2RenderingContext: framebufferTextureLayer()-Methode"
short-title: framebufferTextureLayer()
slug: Web/API/WebGL2RenderingContext/framebufferTextureLayer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.framebufferTextureLayer()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet eine einzelne Schicht einer Textur an einen Framebuffer.

Diese Methode ähnelt [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D), wobei jedoch nur eine bestimmte einzelne Schicht der Texturebene an den Anhangspunkt gebunden wird.

## Syntax

```js-nolint
framebufferTextureLayer(target, attachment, texture, level, layer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`: Sammlung von Pufferspeicherdaten der Farb-, Alpha-, Tiefen- und Stencil-Puffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`: Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`: Wird als Quelle für Lesevorgänge verwendet.

- `attachment`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Anhangspunkt für die `texture` angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`: Bindet die Textur an einen der Farb-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`: Bindet die Textur an den Tiefen-Puffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`: Bindet die Textur an den Stencil-Puffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencil-Puffer.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, dessen Bild gebunden werden soll.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Mipmap-Ebene des zu bindenden Texturbildes angibt.
- `layer`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Schicht des zu bindenden Texturbildes angibt.

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
