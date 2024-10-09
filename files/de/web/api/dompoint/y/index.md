---
title: "DOMPoint: y-Eigenschaft"
short-title: "y"
slug: Web/API/DOMPoint/y
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMPoint`**-Schnittstelle enthält die **`y`**-Eigenschaft, die die vertikale Koordinate _y_ für einen Punkt im Raum hält.

Sofern keine Transformationen zur Änderung der Ausrichtung angewendet wurden, nimmt der Wert von `y` nach unten zu und nach oben ab.

## Wert

Ein doppelt-genauer Gleitkommawert, der den Wert der _y_-Koordinate für den Punkt angibt. Dieser Wert ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPoint/x),
  [`z`](/de/docs/Web/API/DOMPoint/z) und der Perspektivenwert, [`w`](/de/docs/Web/API/DOMPoint/w).
