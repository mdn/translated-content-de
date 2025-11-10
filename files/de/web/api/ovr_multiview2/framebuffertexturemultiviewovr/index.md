---
title: "OVR_multiview2: framebufferTextureMultiviewOVR() Methode"
short-title: framebufferTextureMultiviewOVR()
slug: Web/API/OVR_multiview2/framebufferTextureMultiviewOVR
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}

Die **`OVR_multiview2.framebufferTextureMultiviewOVR()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) verbindet eine Multiview-Textur mit einem [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer).

## Syntax

```js-nolint
framebufferTextureMultiviewOVR(target, attachment, texture, level, baseViewIndex, numViews)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferdatenspeichern für Farb-, Alpha-, Tiefen- und Stencilpuffer, die zum Rendern eines Bildes verwendet werden.
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`. Wird als Ziel für Zeichen-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachment`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Anhangspunkt für die `texture` angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT0`: Verbindet die Textur mit dem Farb-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`: Verbindet die Textur mit dem Tiefen-Puffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`: Verbindet die Textur mit dem Stencil-Puffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencil-Puffer.
    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`
      Bei Verwendung der [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers) Erweiterung:
      - `ext.COLOR_ATTACHMENT0_WEBGL` (gleich wie `gl.COLOR_ATTACHMENT0`)
        `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

    Bei Verwendung der [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) Erweiterung:

    - `ext.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencil-Puffer-Datenspeicher.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) Objekt, dessen Bild verbunden werden soll.
- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Mipmapping-Ebene des zu verbindenden Texturbildes angibt. Muss 0 sein.
- `baseViewIndex`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Basisansichtsindex des Framebuffer-Objektanhangs angibt.
- `numViews`
  - : Eine [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), die die Anzahl der Ansichten des Framebuffer-Objektanhangs angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn

  - `target` nicht `gl.FRAMEBUFFER` ist.
  - `attachment` nicht einer der akzeptierten Anhangspunkte ist.

- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn

  - `level` nicht 0 ist.
  - `numViews` weniger als eins oder mehr als `MAX_VIEWS_OVR` ist.

- Ein `gl.INVALID_OPERATION` Fehler wird ausgelöst, wenn `texture` nicht 0 oder der Name eines vorhandenen Texturobjekts ist.

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
