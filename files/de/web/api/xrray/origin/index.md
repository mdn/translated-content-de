---
title: "XRRay: origin-Eigenschaft"
short-title: origin
slug: Web/API/XRRay/origin
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`origin`**-Eigenschaft des [`XRRay`](/de/docs/Web/API/XRRay)-Interfaces ist ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der den dreidimensionalen Punkt im Raum darstellt, von dem der Strahl ausgeht, in Metern.

## Wert

Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt.

## Beispiele

### Verwendung der `origin`-Eigenschaft

Die `origin`-Eigenschaft enthält den dreidimensionalen Punkt im Raum, von dem der Strahl ausgeht, in Metern.

```js
let origin = { x: 10.0, y: 10.0, z: 10.0, w: 1.0 };
let direction = { x: 10.0, y: 0.0, z: 0.0, w: 0.0 };
let ray = new XRRay(origin, direction);

ray.origin;
// returns DOMPointReadOnly {x : 10.0, y : 10.0, z : 10.0, w : 1.0}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)
