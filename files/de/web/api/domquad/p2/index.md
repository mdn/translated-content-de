---
title: "DOMQuad: p2-Eigenschaft"
short-title: p2
slug: Web/API/DOMQuad/p2
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMQuad`**-Schnittstelle hat die Eigenschaft **`p2`**, die das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt enthält, welches eine der vier Ecken des `DOMQuad` darstellt. Wenn es mit [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect_static) erstellt wird, ist es der Punkt (x + width, y).

## Wert

Das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt enthält die folgenden Gleitkommazahlen mit doppelter Genauigkeit:

- [`DOMPoint.x`](/de/docs/Web/API/DOMPoint/x): Die horizontale Koordinate.
- [`DOMPoint.y`](/de/docs/Web/API/DOMPoint/y): Die vertikale Koordinate.
- [`DOMPoint.z`](/de/docs/Web/API/DOMPoint/z): Die Tiefenkoordinate.
- [`DOMPoint.w`](/de/docs/Web/API/DOMPoint/w): Der Perspektivenwert. Der Standardwert ist 1.0.

Jeder dieser Werte ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (d.h. sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen `DOMPoint`-Eigenschaften: [`p1`](/de/docs/Web/API/DOMQuad/p1),
  [`p3`](/de/docs/Web/API/DOMQuad/p3) und [`p4`](/de/docs/Web/API/DOMQuad/p4).
