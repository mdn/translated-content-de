---
title: "XRWebGLLayer: framebufferHeight-Eigenschaft"
short-title: framebufferHeight
slug: Web/API/XRWebGLLayer/framebufferHeight
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`framebufferHeight`** gibt die Höhe des Framebuffers in Pixeln an.

Sie können die Breite des Framebuffers mit der [`framebufferWidth`](/de/docs/Web/API/XRWebGLLayer/framebufferWidth)-Eigenschaft ermitteln.

## Wert

Die Höhe in Pixeln des Framebuffers des XR-Geräts. Jedes der Anhänge des Framebuffers (Pixel-, Tiefen-, Farb- und/oder Stencil-Buffer, zum Beispiel) ist genau so viele Pixel hoch.

## Beispiele

Dieses Beispiel ruft die Breite und Höhe des Framebuffers für die spätere Verwendung ab.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

frameWidth = glLayer.framebufferHeight;
frameHeight = glLayer.framebufferHeight;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
