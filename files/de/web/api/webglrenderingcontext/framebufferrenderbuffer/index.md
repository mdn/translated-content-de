---
title: "WebGLRenderingContext: framebufferRenderbuffer() Methode"
short-title: framebufferRenderbuffer()
slug: Web/API/WebGLRenderingContext/framebufferRenderbuffer
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.framebufferRenderbuffer()`** Methode des [WebGL API](/de/docs/Web/API/WebGL_API) verbindet ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt mit einem [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt.

## Syntax

```js-nolint
framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (das Ziel) für das Framebuffer spezifiziert. Mögliche Werte:

    - `gl.FRAMEBUFFER`

      - : Sammlung von Pufferspeicherdaten von Farb-, Alpha-, Tiefen- und Stencil-Buffern, die zur Darstellung eines Bildes verwendet werden.

    Bei der Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}}
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
        Wird als Ziel für Zeichen-, Render-, Lösch- und Schreibvorgänge verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Lesevorgänge verwendet.

- `attachment`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Anheftungsstelle für den Renderpuffer spezifiziert. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT0`: Farb-Puffer.
    - `gl.DEPTH_ATTACHMENT`: Tiefen-Puffer.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencil-Puffer.
    - `gl.STENCIL_ATTACHMENT`: Stencil-Puffer.

    Bei der Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}}
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    Bei der Verwendung der [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers) Erweiterung:

    - `ext.COLOR_ATTACHMENT0_WEBGL` (gleich wie
      `gl.COLOR_ATTACHMENT0`)
    - `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

- `renderbuffertarget`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (das Ziel) für den Renderpuffer spezifiziert. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Pufferspeicherdaten für einzelne Bilder in einem renderbaren internen Format.

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt zum Anfügen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM` Fehler wird geworfen, wenn `target` nicht
  `gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER` oder
  `gl.READ_FRAMEBUFFER` ist.
- Ein `gl.INVALID_ENUM` Fehler wird geworfen, wenn `renderbuffertarget` nicht
  `gl.RENDERBUFFER` ist.
- Ein `gl.INVALID_ENUM` Fehler wird geworfen, wenn `attachment` nicht einer der erlaubten Enums ist.

## Beispiele

```js
gl.framebufferRenderbuffer(
  gl.FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  gl.RENDERBUFFER,
  renderbuffer,
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
- [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)
