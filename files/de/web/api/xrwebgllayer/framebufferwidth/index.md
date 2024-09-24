---
title: "XRWebGLLayer: framebufferWidth-Eigenschaft"
short-title: framebufferBreite
slug: Web/API/XRWebGLLayer/framebufferWidth
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRWebGLLayer")}}-Eigenschaft **`framebufferWidth`** gibt die Breite des Framebuffers in Pixeln an.

Sie können die Höhe des Framebuffers mit der {{domxref("XRWebGLLayer.framebufferHeight", "framebufferHeight")}}-Eigenschaft abrufen.

## Wert

Die Breite in Pixeln des Framebuffers des XR-Geräts. Jedes der Anhänge des Framebuffers (Pixel-, Tiefen-, Farb- und/oder Stencil-Puffer, zum Beispiel) ist so viele Pixel breit.

## Beispiele

Dieses Codebeispiel ruft die Breite und Höhe des Framebuffers für die spätere Verwendung ab.

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
