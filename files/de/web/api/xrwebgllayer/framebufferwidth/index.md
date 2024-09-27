---
title: "XRWebGLLayer: framebufferWidth-Eigenschaft"
short-title: framebufferWidth
slug: Web/API/XRWebGLLayer/framebufferWidth
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`framebufferWidth`** gibt die Breite des Framebuffers in Pixel an.

Sie können die Höhe des Framebuffers mit der [`framebufferHeight`](/de/docs/Web/API/XRWebGLLayer/framebufferHeight)-Eigenschaft abrufen.

## Wert

Die Breite des Framebuffers des XR-Geräts in Pixel. Jede der Anhänge des Framebuffers (z. B. Pixel-, Tiefen-, Farb- und/oder Stencil-Puffer) ist so viele Pixel breit.

## Beispiele

Dieses Snippet ruft die Breite und Höhe des Framebuffers für eine spätere Verwendung ab.

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
