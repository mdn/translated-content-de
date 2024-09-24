---
title: "DOMPoint: x-Eigenschaft"
short-title: x
slug: Web/API/DOMPoint/x
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPoint`**-Schnittstelle besitzt die
Eigenschaft **`x`**, die die horizontale Koordinate, x, für einen Punkt im Raum darstellt.

Im Allgemeinen bedeuten positive Werte von `x` nach rechts,
und negative Werte von `x` bedeuten nach links, soweit keine Transformationen die Orientierung der Achsen verändert haben.

## Wert

Ein doppelt-genauer Gleitkommawert, der den Wert der x-Koordinate für den
Punkt angibt. Dieser Wert ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein kann (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: {{domxref("DOMPoint.y", "y")}},
  {{domxref("DOMPoint.z", "z")}}, und der Perspektivwert, {{domxref("DOMPoint.w", "w")}}.
