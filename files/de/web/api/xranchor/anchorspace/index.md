---
title: "XRAnchor: anchorSpace-Eigenschaft"
short-title: anchorSpace
slug: Web/API/XRAnchor/anchorSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`anchorSpace`**-Eigenschaft der {{domxref("XRAnchor")}} Schnittstelle gibt ein {{domxref("XRSpace")}} Objekt zurück, um den Anker relativ zu anderen `XRSpace` Objekten zu lokalisieren. Es kann anschließend an {{domxref("XRFrame.getPose()")}} übergeben werden.

## Wert

Ein {{domxref("XRSpace")}} Objekt.

## Beispiele

### Anker aktualisieren

```js
for (const anchor of frame.trackedAnchors) {
  const pose = frame.getPose(anchor.anchorSpace, referenceSpace);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
