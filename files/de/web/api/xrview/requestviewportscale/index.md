---
title: "XRView: requestViewportScale() Methode"
short-title: requestViewportScale()
slug: Web/API/XRView/requestViewportScale
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestViewportScale()`** Methode der [`XRView`](/de/docs/Web/API/XRView) Schnittstelle fordert den Benutzeragenten auf, die angeforderte Anzeigebereichsskala für diesen Anzeigebereich auf den angegebenen Wert einzustellen. Dies wird für die dynamische Anzeigebereichsskalierung verwendet, die das Rendern auf einen Teilbereich des WebXR-Anzeigebereichs mit einem Skalierungsfaktor ermöglicht, der bei jedem Animationsrahmen geändert werden kann.

## Syntax

```js-nolint
requestViewportScale(scale)
```

### Parameter

- `scale`
  - : Eine Zahl größer als 0,0 und kleiner oder gleich 1,0, die den Skalierungsfaktor darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Dynamische Anzeigebereichsskalierung

Die dynamische Anzeigebereichsskalierung ermöglicht es Anwendungen, nur einen Teil des verfügbaren [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) zu verwenden. Diese Funktion ist möglicherweise nicht auf allen Systemen verfügbar, da sie auf Treiberunterstützung angewiesen ist, daher sollten Sie sicherstellen, dass `requestViewportScale()` existiert, bevor Sie es aufrufen.

Der `scale` Parameter kann eine Zahl größer als 0,0 und kleiner oder gleich 1,0 sein.

Alternativ können Sie die [`XRView.recommendedViewportScale`](/de/docs/Web/API/XRView/recommendedViewportScale) Eigenschaft verwenden, die den vom Benutzeragenten empfohlenen Wert basierend auf internen Heuristiken enthält. Wenn der Benutzeragent keinen empfohlenen Anzeigebereichsmaßstab bereitstellt, ist sein Wert `null` und der Aufruf von `requestViewportScale()` wird ignoriert.

## Beispiele

Das folgende Beispiel zeigt, wie eine neue Anzeigebereichsskala angefordert und angewendet wird. Der Aufruf von [`XRWebGLLayer.getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) wendet die Änderung an und gibt den aktualisierten Anzeigebereich zurück.

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
