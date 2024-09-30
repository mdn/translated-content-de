---
title: "XRRay: matrix-Eigenschaft"
short-title: matrix
slug: Web/API/XRRay/matrix
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`matrix`**-Eigenschaft der [`XRRay`](/de/docs/Web/API/XRRay)-Schnittstelle ist eine Transformation, die verwendet werden kann, um Objekte entlang des `XRRay` zu positionieren. Dies ist eine 4x4-Matrix, die als 16-Elemente-{{jsxref("Float32Array")}} in spaltenweiser Reihenfolge angegeben wird.

Die Transformation eines Strahls beginnt bei [0, 0, 0] und erstreckt sich entlang der negativen z-Achse zu dem Strahl, der durch den `origin` und die `direction` des `XRRay` beschrieben wird.

## Wert

Ein 16-Elemente-{{jsxref("Float32Array")}}-Objekt, das eine 4x4-Matrix in spaltenweiser Reihenfolge darstellt.

## Beispiele

### Verwendung der `matrix`-Eigenschaft

Die `matrix`-Eigenschaft kann verwendet werden, um grafische Darstellungen des Strahls bei der Wiedergabe zu positionieren.

```js
let origin = { x: 10.0, y: 10.0, z: 10.0, w: 1.0 };
let direction = { x: 10.0, y: 0.0, z: 0.0, w: 0.0 };
let ray = new XRRay(origin, direction);

// Render the ray using the `ray.matrix` transform
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Float32Array")}}
