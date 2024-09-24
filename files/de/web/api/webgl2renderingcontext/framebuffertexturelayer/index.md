---
title: "WebGL2RenderingContext: framebufferTextureLayer()-Methode"
short-title: framebufferTextureLayer()
slug: Web/API/WebGL2RenderingContext/framebufferTextureLayer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.framebufferTextureLayer()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) bindet eine einzelne Schicht einer Textur an einen Framebuffer.

Diese Methode ist ähnlich wie {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}, jedoch wird nur eine bestimmte Schicht der Texturebene an den Befestigungspunkt angefügt.

## Syntax

```js-nolint
framebufferTextureLayer(target, attachment, texture, level, layer)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`: Sammlung von Pufferdatenspeicher für Farb-, Alpha-, Tiefen- und Schablonenpuffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`: Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`: Wird als Quelle für Leseoperationen verwendet.

- `attachment`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Befestigungspunkt für die `texture` angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT{0-15}`: Befestigt die Textur an einem der Farbpuffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`: Befestigt die Textur an den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`: Befestigt die Textur an den Schablonenpuffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Schablonenpuffer.

- `texture`
  - : Ein {{domxref("WebGLTexture")}}-Objekt, dessen Bild angefügt werden soll.
- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Mipmap-Ebene des Texturbildes angibt, das angefügt werden soll.
- `layer`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Schicht des Texturbildes angibt, die angefügt werden soll.

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

- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
