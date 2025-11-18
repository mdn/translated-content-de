---
title: "WebGLRenderingContext: checkFramebufferStatus() Methode"
short-title: checkFramebufferStatus()
slug: Web/API/WebGLRenderingContext/checkFramebufferStatus
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.checkFramebufferStatus()`** Methode
der [WebGL API](/de/docs/Web/API/WebGL_API) gibt den Vollständigkeitsstatus
des [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekts zurück.

## Syntax

```js-nolint
checkFramebufferStatus(target)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (target) spezifiziert. Mögliche Werte:
    - `gl.FRAMEBUFFER`
      - : Sammlung von Puffer-Datenspeichern für Farb-, Alpha-,
        Tiefen- und Stencil-Puffer, die zum Rendern eines Bildes verwendet werden.

    Bei Verwendung eines [WebGL 2 Context](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich folgende Werte zur Verfügung:
    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
        Wird als Ziel für Zeichnungs-, Rendering-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

### Rückgabewert

Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Vollständigkeitsstatus des Framebuffers anzeigt, oder
`0` falls ein Fehler auftritt. Mögliche Enum-Rückgabewerte:

- `gl.FRAMEBUFFER_COMPLETE`: Der Framebuffer ist bereit zur Anzeige.
- `gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT`: Die Anhangstypen stimmen nicht überein oder nicht alle Framebuffer-Anhangspunkte sind Framebuffer-Anhang vollständig.
- `gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`: Es gibt keinen Anhang.
- `gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS`: Höhe und Breite des
  Anhangs sind nicht gleich.
- `gl.FRAMEBUFFER_UNSUPPORTED`: Das Format des Anhangs wird nicht unterstützt oder wenn Tiefen- und Stencil-Anhänge nicht der gleiche Renderbuffer sind.
- Bei Verwendung eines [WebGL 2 Context](/de/docs/Web/API/WebGL2RenderingContext) können zusätzlich folgende Werte zurückgegeben werden:
  - `gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`: Die Werte von
    `gl.RENDERBUFFER_SAMPLES` sind unterschiedlich zwischen den angehängten Renderbuffers
    oder sind ungleich null, wenn die angehängten Bilder eine Mischung aus Renderbuffers und Texturen sind.

- Bei Verwendung der [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2) Erweiterung kann zusätzlich folgender Wert zurückgegeben werden:
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
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
