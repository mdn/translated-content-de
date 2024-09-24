---
title: "XRView: isFirstPersonObserver-Eigenschaft"
short-title: isFirstPersonObserver
slug: Web/API/XRView/isFirstPersonObserver
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`isFirstPersonObserver`**-Eigenschaft der Schnittstelle {{domxref("XRView")}} ist ein boolescher Wert, der angibt, ob die `XRView` eine Ich-Perspektive-Ansicht ist.

Um Videoaufzeichnungen von AR-Geräte-Kameras zu erstellen, können Sie nicht einfach eines der gerenderten Augen verwenden, da es häufig einen physischen Versatz gibt. Einige Geräte stellen eine sekundäre Ansicht bereit, die Ich-Perspektive-Ansicht, die ein `eye` von `none` hat.

Um eine Ich-Perspektive-Ansicht zu erhalten, müssen Sie den "secondary-views"-Feature-Descriptor explizit aktivieren (typischerweise als optionales Merkmal). Siehe {{domxref("XRSystem.requestSession()")}} für Details.

Die `isFirstPersonObserver`-Eigenschaft ermöglicht es Ihnen dann zu überprüfen, welche sekundäre Ansicht eine Ich-Perspektive-Ansicht ist.

## Beispiele

### Überprüfung auf Ich-Perspektive-Ansichten

```js
// Stellen Sie sicher, dass "secondary-view" aktiviert ist
navigator.xr
  .requestSession("immersive-ar", {
    optionalFeatures: ["secondary-views"],
  })
  .then((session) => {
    // …

    session.requestAnimationFrame((frame) => {
      const views = frame.getViewerPose(space);
      // Stellen Sie sicher, dass Sie alle Ansichten durchlaufen
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
