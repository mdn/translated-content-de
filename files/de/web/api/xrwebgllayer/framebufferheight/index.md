---
title: "XRWebGLLayer: framebufferHeight-Eigenschaft"
short-title: framebufferHeight
slug: Web/API/XRWebGLLayer/framebufferHeight
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRWebGLLayer")}}-Eigenschaft **`framebufferHeight`** gibt die Höhe des Framebuffers in Pixel an.

Sie können die Breite des Framebuffers mit der Eigenschaft {{domxref("XRWebGLLayer.framebufferWidth", "framebufferWidth")}} abrufen.

## Wert

Die Höhe in Pixel des Framebuffers des XR-Geräts. Jede der Anhänge des Framebuffers (zum Beispiel Pixel, Tiefe, Farbe und/oder Stencil-Puffer) haben diese Höhe in Pixel.

## Beispiele

Dieses Codebeispiel holt die Breite und Höhe des Framebuffers für die spätere Verwendung.

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
