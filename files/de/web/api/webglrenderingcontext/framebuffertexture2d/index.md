---
title: "WebGLRenderingContext: framebufferTexture2D() Methode"
short-title: framebufferTexture2D()
slug: Web/API/WebGLRenderingContext/framebufferTexture2D
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.framebufferTexture2D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet eine Textur an ein {{domxref("WebGLFramebuffer")}}.

## Syntax

```js-nolint
framebufferTexture2D(target, attachment, textarget, texture, level)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`

      - : Sammlung von Pufferdaten zur Speicherung von Farb-, Alpha-, Tiefen- und Stencil-Puffern, die zum Rendern eines Bildes verwendet werden.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Wird als Ziel für Zeichen-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

    Beim Binden setzt `gl.FRAMEBUFFER` sowohl die `gl.DRAW_FRAMEBUFFER` als auch die `gl.READ_FRAMEBUFFER` Bindungspunkte. Beim Referenzieren bezieht sich `gl.FRAMEBUFFER` auf die `gl.DRAW_FRAMEBUFFER` Bindung.

- `attachment`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Anhangspunkt für die `texture` angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT0`: Bindet die Textur an den Farbpuffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`: Bindet die Textur an den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`: Bindet die Textur an den Stencilpuffer des Framebuffers.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencilpuffer.
    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    Bei Verwendung der Erweiterung {{domxref("WEBGL_draw_buffers")}}:

    - `ext.COLOR_ATTACHMENT0_WEBGL` (gleich wie `gl.COLOR_ATTACHMENT0`)
    - `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

    Bei Verwendung der Erweiterung {{domxref("WEBGL_depth_texture")}}:

    - `gl.DEPTH_STENCIL_ATTACHMENT`: Speicherung von Tiefen- und Stencilpufferdaten.

- `textarget`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Texturziel angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Ein 2D-Bild.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Bild für die positive X-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Bild für die negative X-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Bild für die positive Y-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Bild für die negative Y-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Bild für die positive Z-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Bild für die negative Z-Seite des Würfels.

- `texture`
  - : Ein {{domxref("WebGLTexture")}}-Objekt, dessen Bild angehängt werden soll.
- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Mipmap-Stufe des Texturbilds angibt, die angehängt werden soll. Muss 0 sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn

  - `target` nicht `gl.FRAMEBUFFER` ist.
  - `attachment` nicht einer der akzeptierten Anhangspunkte ist.
  - `textarget` nicht eines der akzeptierten Texturziele ist.

- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn `level` nicht 0 ist.
- Ein `gl.INVALID_OPERATION` Fehler wird ausgelöst, wenn `texture` nicht 0 oder der Name eines vorhandenen Texturobjekts ist.

## Beispiele

```js
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  gl.TEXTURE_2D,
  texture,
  0,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
