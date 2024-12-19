---
title: "WebGLRenderingContext: Methode checkFramebufferStatus()"
short-title: checkFramebufferStatus()
slug: Web/API/WebGLRenderingContext/checkFramebufferStatus
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.checkFramebufferStatus()`**-Methode
der [WebGL API](/de/docs/Web/API/WebGL_API) gibt den Komplettheitsstatus
des [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekts zurück.

## Syntax

```js-nolint
checkFramebufferStatus(target)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`

      - : Sammlung von Pufferdatenspeichern für Farb-, Alpha-, Tiefen- und Stencil-Puffer, die verwendet werden, um ein Bild darzustellen.

    Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext)
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
        Wird als Ziel für Zeichnungs-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Lesevorgänge verwendet.

### Rückgabewert

Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Komplettheitsstatus des Framebuffers angibt, oder
`0`, wenn ein Fehler auftritt. Mögliche Rückgabewerte des Enums:

- `gl.FRAMEBUFFER_COMPLETE`: Der Framebuffer ist bereit zur Anzeige.
- `gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT`: Die Anhangstypen
  sind nicht übereinstimmend oder nicht alle Framebuffer-Anhangspunkte sind Framebuffer-Anhangs-komplett.
- `gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`: Es gibt keinen Anhang.
- `gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS`: Höhe und Breite des
  Anhangs sind nicht gleich.
- `gl.FRAMEBUFFER_UNSUPPORTED`: Das Format des Anhangs wird nicht
  unterstützt oder wenn Tiefen- und Stencil-Anhänge nicht derselbe Renderbuffer sind.
- Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext)
  können zusätzlich die folgenden Werte zurückgegeben werden:

  - `gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`: Die Werte von
    `gl.RENDERBUFFER_SAMPLES` sind zwischen den angehängten Renderbuffern unterschiedlich
    oder sind ungleich null, wenn die angehängten Bilder eine Mischung aus Renderbuffern und Texturen sind.

- Bei Verwendung der [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2)-Erweiterung kann der folgende Wert
  zusätzlich zurückgegeben werden:

  - `ext.FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR`: Wenn
    `baseViewIndex` nicht für alle Framebuffer-Anhangspunkte gleich ist,
    bei denen der Wert von `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE` nicht
    `NONE` ist, wird der Framebuffer als unvollständig betrachtet.

## Beispiele

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();

// …

gl.checkFramebufferStatus(gl.FRAMEBUFFER);
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
