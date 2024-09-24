---
title: "XRView: Methode requestViewportScale()"
short-title: requestViewportScale()
slug: Web/API/XRView/requestViewportScale
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestViewportScale()`** Methode der {{domxref("XRView")}} Schnittstelle fordert den Benutzeragenten auf, den angegebenen Viewport-Skalierungsfaktor für diesen Viewport auf den angegebenen Wert zu setzen. Dies wird für dynamisches Viewport-Scaling verwendet, das das Rendern auf einem Teilbereich des WebXR-Viewports mit einem Skalierungsfaktor ermöglicht, der bei jedem Animationsframe geändert werden kann.

## Syntax

```js-nolint
requestViewportScale(scale)
```

### Parameter

- `scale`
  - : Eine Zahl größer als 0,0 und kleiner oder gleich 1,0, die den Skalierungsfaktor darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Dynamisches Viewport-Scaling

Dynamisches Viewport-Scaling ermöglicht es Anwendungen, nur einen Teil des verfügbaren {{domxref("XRWebGLLayer.framebuffer", "Framebuffer")}} zu nutzen. Diese Funktion ist möglicherweise nicht auf allen Systemen verfügbar, da sie von der Treiberunterstützung abhängt. Daher sollten Sie sicherstellen, dass `requestViewportScale()` vorhanden ist, bevor Sie es aufrufen.

Der `scale` Parameter kann eine Zahl größer als 0,0 und kleiner oder gleich 1,0 sein.

Alternativ können Sie die Eigenschaft {{domxref("XRView.recommendedViewportScale")}} verwenden, die den vom Benutzeragenten empfohlenen Wert basierend auf internen Heuristiken enthält. Wenn der Benutzeragent keinen empfohlenen Viewport-Skalierungsfaktor bereitstellt, ist sein Wert `null` und der Aufruf von `requestViewportScale()` wird ignoriert.

## Beispiele

Das folgende Beispiel zeigt, wie ein neuer Viewport-Skalierungsfaktor angefordert und angewendet wird. Der Aufruf von {{domxref("XRWebGLLayer.getViewport()")}} wendet die Änderung an und gibt den aktualisierten Viewport zurück.

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

- {{domxref("XRView.recommendedViewportScale")}}
