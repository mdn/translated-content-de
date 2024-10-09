---
title: "DOMPoint: z-Eigenschaft"
short-title: z
slug: Web/API/DOMPoint/z
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMPoint`**-Schnittstelle besitzt die **`z`**-Eigenschaft, die die Tiefen-Koordinate eines Punktes im Raum angibt.

Sofern Transformationen die Ausrichtung nicht verändert haben, entspricht ein `z`-Wert von 0 der Ebene des Bildschirms, wobei positive Werte vom Bildschirm aus in Richtung des Benutzers nach außen erstrecken und negative Werte in die Ferne hinter dem Bildschirm zurückweichen.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den _z_-Koordinatenwert für den Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er unendlich oder ungültig sein kann (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPoint/x),
  [`y`](/de/docs/Web/API/DOMPoint/y) und der Perspektivwert, [`w`](/de/docs/Web/API/DOMPoint/w).
