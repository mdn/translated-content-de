---
title: "DOMQuad: p4-Eigenschaft"
short-title: p4
slug: Web/API/DOMQuad/p4
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMQuad`** Schnittstelle hat die **`p4`**-Eigenschaft, die das [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt enthält, das einen der vier Ecken des `DOMQuad` darstellt. Wenn es mit [`DOMQuad.fromRect()`](/de/docs/Web/API/DOMQuad/fromRect_static) erstellt wird, ist es der Punkt (x, y + Höhe).

## Wert

Das [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt beinhaltet die folgenden Gleitkommawerte mit doppelter Genauigkeit:

- [`DOMPoint.x`](/de/docs/Web/API/DOMPoint/x): Die horizontale Koordinate.
- [`DOMPoint.y`](/de/docs/Web/API/DOMPoint/y): Die vertikale Koordinate.
- [`DOMPoint.z`](/de/docs/Web/API/DOMPoint/z): Die Tiefenkoordinate.
- [`DOMPoint.w`](/de/docs/Web/API/DOMPoint/w): Der Perspektivenwert. Der Standardwert ist 1.0.

Jeder dieser Werte ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen `DOMPoint` Eigenschaften: [`p1`](/de/docs/Web/API/DOMQuad/p1),
  [`p2`](/de/docs/Web/API/DOMQuad/p2) und [`p3`](/de/docs/Web/API/DOMQuad/p3).
