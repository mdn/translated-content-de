---
title: "XRView: recommendedViewportScale-Eigenschaft"
short-title: recommendedViewportScale
slug: Web/API/XRView/recommendedViewportScale
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`recommendedViewportScale`**-Eigenschaft der [`XRView`](/de/docs/Web/API/XRView)-Schnittstelle ist der empfohlene Viewport-Skalierungswert, den Sie für [`XRView.requestViewportScale()`](/de/docs/Web/API/XRView/requestViewportScale) verwenden können, falls der User-Agent eine solche Empfehlung hat; andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Wert

Eine Zahl größer als 0,0 und kleiner oder gleich 1,0; oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der User-Agent keine empfohlene Skalierung bereitstellt.

## Beispiele

### Dynamische Viewport-Skalierung

Die dynamische Viewport-Skalierung ermöglicht es Anwendungen, nur einen Teil des verfügbaren [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) zu verwenden. Diese Funktion ist möglicherweise nicht auf allen Systemen verfügbar, da sie von der Treiberunterstützung abhängt. Daher sollten Sie sicherstellen, dass [`XRView.requestViewportScale`](/de/docs/Web/API/XRView/requestViewportScale) existiert, bevor Sie es aufrufen.

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

- [`XRView.requestViewportScale()`](/de/docs/Web/API/XRView/requestViewportScale)
