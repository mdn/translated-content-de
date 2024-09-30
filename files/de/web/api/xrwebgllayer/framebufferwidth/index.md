---
title: "XRWebGLLayer: framebufferWidth-Eigenschaft"
short-title: framebufferWidth
slug: Web/API/XRWebGLLayer/framebufferWidth
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`framebufferWidth`** des [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gibt die Breite des Framebuffers in Pixeln an.

Sie können die Höhe des Framebuffers mit der [`framebufferHeight`](/de/docs/Web/API/XRWebGLLayer/framebufferHeight)-Eigenschaft ermitteln.

## Wert

Die Breite des Framebuffers des XR-Geräts in Pixeln. Jedes der Attachments des Framebuffers (z.B. Pixel-, Tiefen-, Farb- und/oder Stencil-Buffer) hat diese Breite in Pixeln.

## Beispiele

Dieses Code-Beispiel holt die Breite und Höhe des Framebuffers zur späteren Verwendung.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

frameWidth = glLayer.framebufferWidth;
frameHeight = glLayer.framebufferHeight;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
