---
title: "XRView: requestViewportScale()-Methode"
short-title: requestViewportScale()
slug: Web/API/XRView/requestViewportScale
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestViewportScale()`**-Methode der [`XRView`](/de/docs/Web/API/XRView)-Schnittstelle fordert, dass der Benutzeragent den angeforderten Viewport-Skalierungsfaktor für diesen Viewport auf den angegebenen Wert setzt. Dies wird für dynamische Viewport-Skalierungen verwendet, die es ermöglichen, in einem Teilbereich des WebXR-Viewports mit einem Skalierungsfaktor zu rendern, der in jedem Animationsrahmen geändert werden kann.

## Syntax

```js-nolint
requestViewportScale(scale)
```

### Parameter

- `scale`
  - : Eine Zahl größer als 0,0 und kleiner oder gleich 1,0, die den Skalierungsfaktor darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Dynamische Viewport-Skalierung

Dynamische Viewport-Skalierung ermöglicht es Anwendungen, nur einen Teil des verfügbaren [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) zu verwenden. Die Funktion ist möglicherweise nicht auf allen Systemen verfügbar, da sie von der Treiberunterstützung abhängt. Daher sollten Sie sicherstellen, dass `requestViewportScale()` existiert, bevor Sie es aufrufen.

Der `scale`-Parameter kann eine Zahl größer als 0,0 und kleiner oder gleich 1,0 sein.

Alternativ können Sie die [`XRView.recommendedViewportScale`](/de/docs/Web/API/XRView/recommendedViewportScale)-Eigenschaft verwenden, die den vom Benutzeragenten empfohlenen Wert basierend auf internen Heuristiken enthält. Wenn der Benutzeragent keinen empfohlenen Viewport-Skalierungsfaktor bereitstellt, ist sein Wert `null` und der Aufruf von `requestViewportScale()` wird ignoriert.

## Beispiele

Das folgende Beispiel zeigt, wie Sie eine neue Viewport-Skalierung anfordern und anwenden können. Der Aufruf von [`XRWebGLLayer.getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) wendet die Änderung an und gibt den aktualisierten Viewport zurück.

```js
for (const view of pose.views) {
  if (view.requestViewportScale) {
    view.requestViewportScale(0.8);
    // or use view.requestViewportScale(view.recommendedViewportScale);
  }
  const viewport = glLayer.getViewport(view);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRView.recommendedViewportScale`](/de/docs/Web/API/XRView/recommendedViewportScale)
