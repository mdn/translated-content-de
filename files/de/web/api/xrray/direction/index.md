---
title: "XRRay: direction-Eigenschaft"
short-title: direction
slug: Web/API/XRRay/direction
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`direction`**-Eigenschaft der {{DOMxRef("XRRay")}}-Schnittstelle ist ein {{domxref("DOMPointReadOnly")}}, der den dreidimensionalen Richtungsvektor des Strahls darstellt, normalisiert zu einem [Einheitsvektor](https://en.wikipedia.org/wiki/Unit_vector) mit einer Länge von 1,0.

## Wert

Ein {{domxref("DOMPointReadOnly")}}-Objekt.

## Beispiele

### Verwendung der `direction`-Eigenschaft

Die `direction`-Eigenschaft enthält den normalisierten dreidimensionalen Richtungsvektor des Strahls.

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

- {{domxref("DOMPointReadOnly")}}
