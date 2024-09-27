---
title: "XRFrame: trackedAnchors-Eigenschaft"
short-title: trackedAnchors
slug: Web/API/XRFrame/trackedAnchors
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`trackedAnchors`**-Eigenschaft des [`XRFrame`](/de/docs/Web/API/XRFrame)-Interfaces gibt ein [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet)-Objekt zurück, das alle Anker enthält, die im Frame noch verfolgt werden.

## Wert

Ein [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet)-Objekt.

## Beispiele

### Aktualisieren von Ankern

```js
for (const anchor of frame.trackedAnchors) {
  const pose = frame.getPose(anchor.anchorSpace, referenceSpace);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
