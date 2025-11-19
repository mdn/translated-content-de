---
title: "WebGLRenderingContext: Methode framebufferTexture2D()"
short-title: framebufferTexture2D()
slug: Web/API/WebGLRenderingContext/framebufferTexture2D
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.framebufferTexture2D()`** der [WebGL API](/de/docs/Web/API/WebGL_API) fügt eine Textur an ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) an.

## Syntax

```js-nolint
framebufferTexture2D(target, attachment, textarget, texture, level)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindepunkt (Ziel) spezifiziert. Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferdatenspeicher für Farb-, Alpha-, Tiefen- und Schablonenpuffer, die zur Bilddarstellung verwendet werden.

    Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.DRAW_FRAMEBUFFER`
      - : Wird als Ziel für Zeichen-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

    Bei der Bindung setzt `gl.FRAMEBUFFER` sowohl die `gl.DRAW_FRAMEBUFFER`- als auch die `gl.READ_FRAMEBUFFER`-Bindepunkte. Beim Referenzieren bezieht sich `gl.FRAMEBUFFER` auf die `gl.DRAW_FRAMEBUFFER`-Bindung

- `attachment`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Anhangspunkt für die `texture` spezifiziert. Mögliche Werte:
    - `gl.COLOR_ATTACHMENT0`: Verknüpft die Textur mit dem Farb-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`: Verknüpft die Textur mit dem Tiefen-Puffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`: Verknüpft die Textur mit dem Schablonen-Puffer des Framebuffers.

    Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Schablonenpuffer.
    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    Bei Verwendung der [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)-Erweiterung:
    - `ext.COLOR_ATTACHMENT0_WEBGL` (gleich `gl.COLOR_ATTACHMENT0`)
    - `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

    Bei Verwendung der [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)-Erweiterung:
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Datenspeicherung von Tiefen- und Schablonenpuffer.

- `textarget`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Texturziel angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`: Ein 2D-Bild.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Bild für die positive X-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Bild für die negative X-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Bild für die positive Y-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Bild für die negative Y-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Bild für die positive Z-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Bild für die negative Z-Seite des Würfels.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, dessen Bild angefügt werden soll.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Mipmap-Ebene des anzufügenden Texturbildes spezifiziert. Muss 0 sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn:
  - `target` nicht `gl.FRAMEBUFFER` ist.
  - `attachment` keiner der akzeptierten Anhangspunkte ist.
  - `textarget` keines der akzeptierten Texturziele ist.

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `level` nicht 0 ist.
- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn `texture` nicht 0 oder der Name eines bestehenden Texturobjekts ist.

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

- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
- [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)
- [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)
