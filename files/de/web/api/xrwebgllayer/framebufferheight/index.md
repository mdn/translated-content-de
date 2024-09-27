---
title: "XRWebGLLayer: framebufferHeight-Eigenschaft"
short-title: framebufferHeight
slug: Web/API/XRWebGLLayer/framebufferHeight
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`framebufferHeight`** gibt die Höhe des Framebuffers in Pixeln an.

Die Breite des Framebuffers kann mit der [`framebufferWidth`](/de/docs/Web/API/XRWebGLLayer/framebufferWidth)-Eigenschaft abgerufen werden.

## Wert

Die Höhe in Pixeln des Framebuffers des XR-Geräts. Jedes der Attachments des Framebuffers (Pixel, Tiefe, Farbe und/oder Stencil-Puffer, zum Beispiel) ist genau so viele Pixel hoch.

## Beispiele

Dieser Ausschnitt ruft die Breite und Höhe des Framebuffers für die spätere Verwendung ab.

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
