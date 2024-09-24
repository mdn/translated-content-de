---
title: "XRRay: Matrix-Eigenschaft"
short-title: Matrix
slug: Web/API/XRRay/matrix
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`matrix`**-Eigenschaft des {{DOMxRef("XRRay")}}-Interfaces ist eine Transformation, die verwendet werden kann, um Objekte entlang des `XRRay` zu positionieren. Es handelt sich um eine 4x4-Matrix, die als 16-Elemente-{{jsxref("Float32Array")}} aufgeführt ist und in Spalten-Major-Ordnung vorliegt.

Die Transformation von einem Strahl, der bei [0, 0, 0] beginnt und sich entlang der negativen z-Achse erstreckt, zum Strahl, der durch den `origin` und `direction` des `XRRay` beschrieben wird.

## Wert

Ein 16-Elemente-{{jsxref("Float32Array")}}-Objekt, das eine 4x4-Matrix in Spalten-Major-Ordnung darstellt.

## Beispiele

### Verwendung der `matrix`-Eigenschaft

Die `matrix`-Eigenschaft kann verwendet werden, um grafische Darstellungen des Strahls beim Rendern zu positionieren.

```js
let origin = { x: 10.0, y: 10.0, z: 10.0, w: 1.0 };
let direction = { x: 10.0, y: 0.0, z: 0.0, w: 0.0 };
let ray = new XRRay(origin, direction);

// Rendern Sie den Strahl unter Verwendung der `ray.matrix`-Transformation
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Float32Array")}}
