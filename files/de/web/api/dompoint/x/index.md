---
title: "DOMPoint: x-Eigenschaft"
short-title: x
slug: Web/API/DOMPoint/x
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPoint`** Schnittstelle
**`x`** enthält die horizontale Koordinate, x, für einen Punkt im Raum.

Im Allgemeinen bedeuten positive Werte von `x` eine Bewegung nach rechts,
während negative Werte von `x` eine Bewegung nach links bedeuten, sofern keine Transformationen die Orientierung der Achsen verändert haben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den x-Wert der Koordinate für den Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`y`](/de/docs/Web/API/DOMPoint/y),
  [`z`](/de/docs/Web/API/DOMPoint/z) und der Perspektivwert, [`w`](/de/docs/Web/API/DOMPoint/w).
