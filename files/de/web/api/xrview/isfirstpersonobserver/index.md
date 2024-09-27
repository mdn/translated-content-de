---
title: "XRView: isFirstPersonObserver-Eigenschaft"
short-title: isFirstPersonObserver
slug: Web/API/XRView/isFirstPersonObserver
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`isFirstPersonObserver`** des [`XRView`](/de/docs/Web/API/XRView)-Interfaces ist ein boolean, der angibt, ob das `XRView` eine Egoperspektive ist.

Um Videoaufnahmen von AR-Gerätekameras zu erstellen, können Sie nicht einfach eines der gerenderten Augen verwenden, da es oft einen physischen Abstand gibt. Einige Geräte bieten eine sekundäre Ansicht, die Egoperspektive, die ein `eye` von `none` hat.

Um eine Egoperspektive zu erhalten, müssen Sie den "secondary-views" Feature-Descriptor explizit aktivieren (typischerweise als optionales Feature). Weitere Details finden Sie unter [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession).

Die Eigenschaft `isFirstPersonObserver` ermöglicht es Ihnen dann zu überprüfen, welche sekundäre Ansicht eine Egoperspektive ist.

## Beispiele

### Überprüfung auf Egoperspektiven

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
