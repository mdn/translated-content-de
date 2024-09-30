---
title: "XRFrame: trackedAnchors-Eigenschaft"
short-title: trackedAnchors
slug: Web/API/XRFrame/trackedAnchors
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`trackedAnchor`**-Eigenschaft des [`XRFrame`](/de/docs/Web/API/XRFrame)-Interfaces gibt ein [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet)-Objekt zurück, das alle im Frame noch verfolgten Anker enthält.

## Wert

Ein [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet)-Objekt.

## Beispiele

### Aktualisierung von Ankern

```js
for (const anchor of frame.trackedAnchors) {
  const pose = frame.getPose(anchor.anchorSpace, referenceSpace);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
