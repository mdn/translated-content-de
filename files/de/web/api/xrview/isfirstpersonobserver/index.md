---
title: "XRView: isFirstPersonObserver-Eigenschaft"
short-title: isFirstPersonObserver
slug: Web/API/XRView/isFirstPersonObserver
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`isFirstPersonObserver`**-Eigenschaft des [`XRView`](/de/docs/Web/API/XRView)-Interfaces ist ein boolescher Wert, der anzeigt, ob das `XRView` eine First-Person-Observer-Ansicht ist.

Um Videoaufnahmen von Kamera-AR-Geräten zu erstellen, kann man nicht einfach eines der gerenderten Augen verwenden, da es oft eine physische Verschiebung gibt. Einige Geräte bieten eine sekundäre Ansicht, die First-Person-Observer-Ansicht, die ein `eye` von `none` hat.

Um eine First-Person-Observer-Ansicht zu erhalten, müssen Sie den Deskriptor der Funktion "secondary-views" explizit aktivieren (typischerweise als optionale Funktion). Siehe [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) für Details.

Die `isFirstPersonObserver`-Eigenschaft ermöglicht es Ihnen dann zu überprüfen, welche sekundäre Ansicht eine First-Person-Observer-Ansicht ist.

## Beispiele

### Überprüfung auf First-Person-Observer-Ansichten

```js
// Make sure to enable "secondary-view"
navigator.xr
  .requestSession("immersive-ar", {
    optionalFeatures: ["secondary-views"],
  })
  .then((session) => {
    // …

    session.requestAnimationFrame((frame) => {
      const views = frame.getViewerPose(space);
      // Make sure to iterate over all views
      for (const view of views) {
        if (view.isFirstPersonObserver) {
          renderFPO();
        } else {
          render();
        }
      }
    });
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
