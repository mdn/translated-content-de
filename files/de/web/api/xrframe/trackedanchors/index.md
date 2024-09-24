---
title: "XRFrame: trackedAnchors-Eigenschaft"
short-title: trackedAnchors
slug: Web/API/XRFrame/trackedAnchors
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`trackedAnchors`**-Eigenschaft des {{domxref("XRFrame")}}-Interfaces gibt ein {{domxref("XRAnchorSet")}}-Objekt zurück, das alle Anker enthält, die im Frame weiterhin verfolgt werden.

## Wert

Ein {{domxref("XRAnchorSet")}}-Objekt.

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
