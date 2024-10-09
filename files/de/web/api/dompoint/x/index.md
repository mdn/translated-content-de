---
title: "DOMPoint: x-Eigenschaft"
short-title: x
slug: Web/API/DOMPoint/x
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMPoint`**-Schnittstelle besitzt die
**`x`**-Eigenschaft, die die horizontale Koordinate, x, für einen
Punkt im Raum hält.

Im Allgemeinen bedeuten positive Werte von `x` nach rechts,
und negative Werte von `x` bedeuten nach links, abgesehen von Transformationen, die die Ausrichtung der Achsen verändert haben könnten.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der x-Koordinate für den
Punkt angibt. Dieser Wert ist **unbegrenzt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert darf {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`y`](/de/docs/Web/API/DOMPoint/y),
  [`z`](/de/docs/Web/API/DOMPoint/z) und der Perspektivwert, [`w`](/de/docs/Web/API/DOMPoint/w).
