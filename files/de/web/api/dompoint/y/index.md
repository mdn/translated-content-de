---
title: "DOMPoint: y-Eigenschaft"
short-title: y
slug: Web/API/DOMPoint/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMPoint`** Schnittstelle besitzt die Eigenschaft **`y`**, welche die vertikale Koordinate, _y_, eines Punktes im Raum angibt.

Sofern keine Transformationen zur Änderung der Orientierung angewendet wurden, nimmt der Wert von `y` nach unten hin zu und nach oben hin ab.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der _y_-Koordinate des Punktes angibt. Dieser Wert ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein kann (d.h. sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPoint/x),
  [`z`](/de/docs/Web/API/DOMPoint/z) und der Perspektivenwert [`w`](/de/docs/Web/API/DOMPoint/w).
