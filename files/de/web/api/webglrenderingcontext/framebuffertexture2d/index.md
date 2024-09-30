---
title: "WebGLRenderingContext: framebufferTexture2D() Methode"
short-title: framebufferTexture2D()
slug: Web/API/WebGLRenderingContext/framebufferTexture2D
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.framebufferTexture2D()`**-Methode des [WebGL API](/de/docs/Web/API/WebGL_API) bindet eine Textur an ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer).

## Syntax

```js-nolint
framebufferTexture2D(target, attachment, textarget, texture, level)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (target) spezifiziert. Mögliche Werte:

    - `gl.FRAMEBUFFER`

      - : Sammlung von Pufferdatenspeichern für Farb-, Alpha-, Tiefen- und Schablonenpuffer, die zum Rendern eines Bildes verwendet werden.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Wird als Ziel für Zeichen-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

    Beim Binden setzt `gl.FRAMEBUFFER` sowohl die Bindungspunkte `gl.DRAW_FRAMEBUFFER` als auch `gl.READ_FRAMEBUFFER`. Beim Referenzieren bezieht sich `gl.FRAMEBUFFER` auf die Bindung `gl.DRAW_FRAMEBUFFER`.

- `attachment`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Anhangspunkt für die `texture` festlegt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT0`: Befestigt die Textur am Farb-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`: Befestigt die Textur am Tiefen-Puffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`: Befestigt die Textur am Schablonen-Puffer des Framebuffers.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    - `gl.DEPTH_STENCIL_ATTACHMENT`: Datenhaltung für Tiefen- und Schablonenpuffer.
    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 ... gl.COLOR_ATTACHMENT15`

    Bei Verwendung der [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers) Erweiterung:

    - `ext.COLOR_ATTACHMENT0_WEBGL` (gleich wie `gl.COLOR_ATTACHMENT0`)
    - `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ... ext.COLOR_ATTACHMENT15_WEBGL`

    Bei Verwendung der [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) Erweiterung:

    - `gl.DEPTH_STENCIL_ATTACHMENT`: Datenhaltung für Tiefen- und Schablonenpuffer.

- `textarget`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Texturziel spezifiziert. Mögliche Werte:

    - `gl.TEXTURE_2D`: Ein 2D-Bild.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Bild für die positive X-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Bild für die negative X-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Bild für die positive Y-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Bild für die negative Y-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Bild für die positive Z-Seite des Würfels.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Bild für die negative Z-Seite des Würfels.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, dessen Bild angehängt werden soll.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das Mipmap-Level des anzuhängenden Texturbildes angibt. Muss 0 sein.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM` Fehler wird geworfen, wenn

  - `target` nicht `gl.FRAMEBUFFER` ist.
  - `attachment` nicht einer der akzeptierten Anhangspunkte ist.
  - `textarget` nicht eines der akzeptierten Texturziele ist.

- Ein `gl.INVALID_VALUE` Fehler wird geworfen, wenn `level` nicht 0 ist.
- Ein `gl.INVALID_OPERATION` Fehler wird geworfen, wenn `texture` nicht 0 oder der Name eines existierenden Texturobjekts ist.

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
