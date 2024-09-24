---
title: "WebGLRenderingContext: checkFramebufferStatus()-Methode"
short-title: checkFramebufferStatus()
slug: Web/API/WebGLRenderingContext/checkFramebufferStatus
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.checkFramebufferStatus()`**-Methode
der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt den Vollständigkeitsstatus des {{domxref("WebGLFramebuffer")}}-Objekts zurück.

## Syntax

```js-nolint
checkFramebufferStatus(target)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Target) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`

      - : Sammlung von Buffer-Daten zur Speicherung von Farbe, Alpha,
        Tiefe und Stencil-Buffern, die zur Darstellung eines Bildes verwendet werden.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontextes", "", 1)}}
    sind zusätzlich folgende Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
        Wird als Ziel für Zeichen-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Lesevorgänge verwendet.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Vollständigkeitsstatus des Framebuffers angibt, oder
`0`, wenn ein Fehler auftritt. Mögliche Enum-Rückgabewerte:

- `gl.FRAMEBUFFER_COMPLETE`: Der Framebuffer ist bereit für die Anzeige.
- `gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT`: Die Anhangstypen stimmen
  nicht überein oder nicht alle Framebuffer-Anhangspunkte sind Framebuffer-Anhang
  komplett.
- `gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`: Es gibt keinen Anhang.
- `gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS`: Höhe und Breite des
  Anhangs sind nicht gleich.
- `gl.FRAMEBUFFER_UNSUPPORTED`: Das Format des Anhangs wird nicht
  unterstützt oder wenn die Tiefen- und Stencil-Anhänge nicht derselbe Renderbuffer sind.
- Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontextes", "", 1)}}, können zusätzlich folgende Werte zurückgegeben werden:

  - `gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`: Die Werte von
    `gl.RENDERBUFFER_SAMPLES` sind unter den angehängten Renderbuffers unterschiedlich,
    oder sind ungleich null, wenn die angehängten Bilder eine Mischung aus Renderbuffers und Texturen sind.

- Bei Verwendung der {{domxref("OVR_multiview2")}}-Erweiterung kann zusätzlich folgender Wert zurückgegeben werden:

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

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Andere Buffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
