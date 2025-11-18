---
title: "WebGL2RenderingContext: framebufferTextureLayer() Methode"
short-title: framebufferTextureLayer()
slug: Web/API/WebGL2RenderingContext/framebufferTextureLayer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.framebufferTextureLayer()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) hängt eine einzelne Ebene einer Textur an einen Framebuffer an.

Diese Methode ist ähnlich wie [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D), jedoch wird nur eine bestimmte einzelne Ebene des Textur-Levels an den Befestigungspunkt angebracht.

## Syntax

```js-nolint
framebufferTextureLayer(target, attachment, texture, level, layer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:
    - `gl.FRAMEBUFFER`: Speichert Kollektionen von Pufferdaten von Farbe, Alpha, Tiefe und Stencil-Puffern, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`: Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`: Wird als Quelle für Leseoperationen verwendet.

- `attachment`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Befestigungspunkt für die `texture` angibt. Mögliche Werte:
    - `gl.COLOR_ATTACHMENT{0-15}`: Hängt die Textur an einen der Farbpuffer des Framebuffers an.
    - `gl.DEPTH_ATTACHMENT`: Hängt die Textur an den Tiefenpuffer des Framebuffers an.
    - `gl.STENCIL_ATTACHMENT`: Hängt die Textur an den Stencil-Puffer des Framebuffers an.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencil-Puffer.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) Objekt, dessen Bild angebracht werden soll.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Mipmap-Level des anzubringenden Texturbildes angibt.
- `layer`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Ebene des anzubringenden Texturbildes angibt.

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
