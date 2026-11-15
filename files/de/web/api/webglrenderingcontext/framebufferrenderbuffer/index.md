---
title: "WebGLRenderingContext: framebufferRenderbuffer()-Methode"
short-title: framebufferRenderbuffer()
slug: Web/API/WebGLRenderingContext/framebufferRenderbuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.framebufferRenderbuffer()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) hängt ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt an ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt an.

## Syntax

```js-nolint
framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Target) für den Framebuffer angibt.
    Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Speicher für die Farb-, Alpha-, Tiefen- und Stencil-Buffer-Daten, die zum Rendern eines Bildes verwendet werden.

    Bei Verwendung eines [WebGL-2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
        Wird als Ziel für Zeichen-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachment`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Anhangspunkt für den Renderbuffer angibt.
    Mögliche Werte:
    - `gl.COLOR_ATTACHMENT0`: Farbbuffer.
    - `gl.DEPTH_ATTACHMENT`: Tiefenbuffer.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Tiefen- und Stencil-Buffer.
    - `gl.STENCIL_ATTACHMENT`: Stencil-Buffer.

    Bei Verwendung eines [WebGL-2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    Bei Verwendung der Erweiterung [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers):
    - `ext.COLOR_ATTACHMENT0_WEBGL` (entspricht
      `gl.COLOR_ATTACHMENT0`)
    - `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

- `renderbuffertarget`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Target) für den Renderbuffer angibt.
    Mögliche Werte:
    - `gl.RENDERBUFFER`
      - : Buffer-Datenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt, das angehängt werden soll, oder `null`, um das derzeit am angegebenen Anhangspunkt angehängte Bild zu lösen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` weder `gl.FRAMEBUFFER` noch `gl.DRAW_FRAMEBUFFER` oder `gl.READ_FRAMEBUFFER` ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `renderbuffertarget` nicht `gl.RENDERBUFFER` ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `attachment` keiner der zulässigen Enum-Werte ist.

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
- Weitere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
- [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)
