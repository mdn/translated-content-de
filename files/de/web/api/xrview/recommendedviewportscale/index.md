---
title: "XRView: Eigenschaft recommendedViewportScale"
short-title: recommendedViewportScale
slug: Web/API/XRView/recommendedViewportScale
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`recommendedViewportScale`**-Eigenschaft der {{domxref("XRView")}}-Schnittstelle ist der empfohlene Viewport-Skalierungswert, den Sie für {{domxref("XRView.requestViewportScale()")}} verwenden können, falls der Benutzeragent eine solche Empfehlung hat; [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) andernfalls.

## Wert

Eine Zahl größer als 0.0 und kleiner oder gleich 1.0; oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Benutzeragent keine empfohlene Skalierung bereitstellt.

## Beispiele

### Dynamische Viewport-Skalierung

Dynamische Viewport-Skalierung ermöglicht es Anwendungen, nur einen Teil des verfügbaren {{domxref("XRWebGLLayer.framebuffer", "framebuffer")}} zu nutzen. Die Funktion ist möglicherweise nicht auf allen Systemen verfügbar, da sie von der Treiberunterstützung abhängt. Daher sollten Sie sicherstellen, dass {{domxref("XRView.requestViewportScale")}} existiert, bevor Sie es aufrufen.

```js
for (const view of pose.views) {
  if (view.requestViewportScale) {
    view.requestViewportScale(view.recommendedViewportScale);
  }
  const viewport = glLayer.getViewport(view);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRView.requestViewportScale()")}}
