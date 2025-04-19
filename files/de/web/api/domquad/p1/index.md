---
title: "DOMQuad: p1 Eigenschaft"
short-title: p1
slug: Web/API/DOMQuad/p1
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMQuad`**-Schnittstelle besitzt die Eigenschaft **`p1`**, die das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt hält, das eine der vier Ecken des `DOMQuad` repräsentiert. Wenn es aus [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect_static) erstellt wird, ist dies der Punkt (x, y).

## Wert

Das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt enthält die folgenden Gleitkommawerte mit doppelter Genauigkeit:

- [`DOMPoint.x`](/de/docs/Web/API/DOMPoint/x): Die horizontale Koordinate.
- [`DOMPoint.y`](/de/docs/Web/API/DOMPoint/y): Die vertikale Koordinate.
- [`DOMPoint.z`](/de/docs/Web/API/DOMPoint/z): Die Tiefenkoordinate.
- [`DOMPoint.w`](/de/docs/Web/API/DOMPoint/w): Der Perspektivwert. Der Standardwert ist 1.0.

Jeder dieser Werte ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein kann (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen `DOMPoint`-Eigenschaften: [`p2`](/de/docs/Web/API/DOMQuad/p2),
  [`p3`](/de/docs/Web/API/DOMQuad/p3) und [`p4`](/de/docs/Web/API/DOMQuad/p4).
