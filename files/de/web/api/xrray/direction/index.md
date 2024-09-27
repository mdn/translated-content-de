---
title: "XRRay: direction-Eigenschaft"
short-title: direction
slug: Web/API/XRRay/direction
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`direction`**-Eigenschaft der [`XRRay`](/de/docs/Web/API/XRRay)-Schnittstelle ist ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der den 3-dimensionalen Richtungsvektor des Strahls darstellt, normalisiert auf einen [Einheitsvektor](https://de.wikipedia.org/wiki/Einheitsvektor) mit einer Länge von 1,0.

## Wert

Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt.

## Beispiele

### Verwendung der `direction`-Eigenschaft

Die `direction`-Eigenschaft enthält den normalisierten 3-dimensionalen Richtungsvektor des Strahls.

```js
let origin = { x: 10.0, y: 10.0, z: 10.0, w: 1.0 };
let direction = { x: 10.0, y: 0.0, z: 0.0, w: 0.0 };
let ray = new XRRay(origin, direction);

ray.direction;
// returns DOMPointReadOnly {x : 1.0, y : 0.0, z : 0.0, w : 0.0}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)
