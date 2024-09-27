---
title: "DOMPoint: x Eigenschaft"
short-title: x
slug: Web/API/DOMPoint/x
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPoint`** Schnittstelle hat die
Eigenschaft **`x`**, die die horizontale Koordinate, x, für einen
Punkt im Raum hält.

Im Allgemeinen bedeuten positive `x`-Werte nach rechts,
und negative `x`-Werte bedeuten nach links, sofern keine Transformationen vorgenommen wurden, die die Ausrichtung der Achsen verändert haben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der x-Koordinate für den
Punkt angibt. Dieser Wert ist **unrestricted**, was bedeutet, dass er
unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`y`](/de/docs/Web/API/DOMPoint/y),
  [`z`](/de/docs/Web/API/DOMPoint/z) und der Perspektivwert, [`w`](/de/docs/Web/API/DOMPoint/w).
