---
title: "OVR_multiview2: Methode framebufferTextureMultiviewOVR()"
short-title: framebufferTextureMultiviewOVR()
slug: Web/API/OVR_multiview2/framebufferTextureMultiviewOVR
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`OVR_multiview2.framebufferTextureMultiviewOVR()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) hängt eine Multiview-Textur an einen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) an.

## Syntax

```js-nolint
framebufferTextureMultiviewOVR(target, attachment, texture, level, baseViewIndex, numViews)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (das Ziel) angibt. Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Speicher für die Farb-, Alpha-, Tiefen- und Stencil-Buffer-Daten, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
        Wird als Ziel für Zeichen-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachment`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Attachment-Punkt für `texture` angibt. Mögliche Werte:
    - `gl.COLOR_ATTACHMENT0`: Hängt die Textur an den Farbpuffer des Framebuffers an.
    - `gl.DEPTH_ATTACHMENT`: Hängt die Textur an den Tiefenpuffer des Framebuffers an.
    - `gl.STENCIL_ATTACHMENT`: Hängt die Textur an den Stencil-Puffer des Framebuffers an.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencil-Puffer.
    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`
      Bei Verwendung der Erweiterung [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers):
      - `ext.COLOR_ATTACHMENT0_WEBGL` (entspricht
        `gl.COLOR_ATTACHMENT0`)
        `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

    Bei Verwendung der Erweiterung [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture):
    - `ext.DEPTH_STENCIL_ATTACHMENT`: Speicher für Tiefen- und Stencil-Buffer-Daten.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, dessen Bild angehängt werden soll.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Mipmap-Ebene des anzuhängenden Texturbildes angibt. Muss 0 sein.
- `baseViewIndex`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den Basis-View-Index des Attachments des Framebuffer-Objekts angibt.
- `numViews`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Anzahl der Views des Attachments des Framebuffer-Objekts angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn
  - `target` nicht `gl.FRAMEBUFFER` ist.
  - `attachment` keiner der zulässigen Attachment-Punkte ist.

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn
  - `level` nicht 0 ist.
  - `numViews` kleiner als eins oder größer als `MAX_VIEWS_OVR` ist.

- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn `texture` weder 0 noch der Name eines vorhandenen Texturobjekts ist.

## Beispiele

```js
ext.framebufferTextureMultiviewOVR(
  gl.DRAW_FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  colorTex,
  0,
  0,
  2,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2)
- [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)
- [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)
