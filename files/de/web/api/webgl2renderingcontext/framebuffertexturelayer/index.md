---
title: "WebGL2RenderingContext: framebufferTextureLayer()-Methode"
short-title: framebufferTextureLayer()
slug: Web/API/WebGL2RenderingContext/framebufferTextureLayer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.framebufferTextureLayer()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) fügt einem Framebuffer eine einzelne Ebene einer Textur hinzu.

Diese Methode ähnelt [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D), fügt dem Attachment Point jedoch nur eine einzelne Ebene des angegebenen Texturlevels hinzu.

## Syntax

```js-nolint
framebufferTextureLayer(target, attachment, texture, level, layer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Target) angibt. Mögliche Werte:
    - `gl.FRAMEBUFFER`: Speicher für die Daten der Farb-, Alpha-, Tiefen- und Stencil-Buffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`: Entspricht `gl.FRAMEBUFFER`.
    - `gl.READ_FRAMEBUFFER`: Wird als Quelle für Leseoperationen verwendet.

- `attachment`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Attachment Point für die `texture` angibt. Mögliche Werte:
    - `gl.COLOR_ATTACHMENT{0-15}`: Fügt die Textur einem der Farb-Buffer des Framebuffers hinzu.
    - `gl.DEPTH_ATTACHMENT`: Fügt die Textur dem Tiefen-Buffer des Framebuffers hinzu.
    - `gl.STENCIL_ATTACHMENT`: Fügt die Textur dem Stencil-Buffer des Framebuffers hinzu.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencil-Buffer.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, dessen Bild hinzugefügt werden soll, oder `null`, um das aktuell am angegebenen Attachment Point angehängte Bild zu entfernen.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Mipmap-Level des hinzuzufügenden Texturbilds angibt.
- `layer`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Ebene des hinzuzufügenden Texturbilds angibt.

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
