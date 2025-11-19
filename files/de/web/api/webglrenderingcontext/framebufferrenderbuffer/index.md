---
title: "WebGLRenderingContext: framebufferRenderbuffer() Methode"
short-title: framebufferRenderbuffer()
slug: Web/API/WebGLRenderingContext/framebufferRenderbuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.framebufferRenderbuffer()`** Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) bindet ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt an ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt.

## Syntax

```js-nolint
framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) für den Framebuffer angibt.
    Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Sammlung von Pufferdaten für Farbe, Alpha, Tiefe und Schablonenpuffer, die zum Rendern eines Bildes verwendet werden.

    Bei Verwendung eines [WebGL-2-Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.DRAW_FRAMEBUFFER`
      - : Äquivalent zu `gl.FRAMEBUFFER`.
        Wird als Ziel für Zeichen-, Rendering-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachment`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Anknüpfungspunkt für den Renderpuffer angibt.
    Mögliche Werte:
    - `gl.COLOR_ATTACHMENT0`: Farbpuffer.
    - `gl.DEPTH_ATTACHMENT`: Tiefenpuffer.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Schablonenpuffer.
    - `gl.STENCIL_ATTACHMENT`: Schablonenpuffer.

    Bei Verwendung eines [WebGL-2-Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    Bei Verwendung der [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers) Erweiterung:
    - `ext.COLOR_ATTACHMENT0_WEBGL` (gleich wie
      `gl.COLOR_ATTACHMENT0`)
    - `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

- `renderbuffertarget`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) für den Renderpuffer angibt.
    Mögliche Werte:
    - `gl.RENDERBUFFER`
      - : Pufferdatenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) Objekt, das angehängt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` nicht `gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER` oder `gl.READ_FRAMEBUFFER` ist.
- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `renderbuffertarget` nicht `gl.RENDERBUFFER` ist.
- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `attachment` nicht einer der erlaubten Enums ist.

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
