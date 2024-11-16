---
title: "DOMQuad: p2-Eigenschaft"
short-title: p2
slug: Web/API/DOMQuad/p2
l10n:
  sourceCommit: f1efcbb10e9d5bea6df19f18e670230dc7d87f18
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`p2`**-Eigenschaft des **`DOMQuad`**-Interfaces hält das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, das eine der vier Ecken des `DOMQuad` darstellt. Wenn es von [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect) erstellt wird, ist dies der Punkt (x + Breite, y).

## Wert

Das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt enthält die folgenden Gleitkommawerte mit doppelter Genauigkeit:

- [`DOMPoint.x`](/de/docs/Web/API/DOMPoint/x): Die horizontale Koordinate.
- [`DOMPoint.y`](/de/docs/Web/API/DOMPoint/y): Die vertikale Koordinate.
- [`DOMPoint.z`](/de/docs/Web/API/DOMPoint/z): Die Tiefenkoordinate.
- [`DOMPoint.w`](/de/docs/Web/API/DOMPoint/w): Der Perspektivwert. Der Standardwert ist 1.0.

Jeder dieser Werte ist **unbeschränkt**, was bedeutet, dass es erlaubt ist, unendlich oder ungültig zu sein (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen `DOMPoint`-Eigenschaften: [`p1`](/de/docs/Web/API/DOMQuad/p1),
  [`p3`](/de/docs/Web/API/DOMQuad/p3) und [`p4`](/de/docs/Web/API/DOMQuad/p4).
