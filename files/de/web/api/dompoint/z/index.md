---
title: "DOMPoint: z-Eigenschaft"
short-title: z
slug: Web/API/DOMPoint/z
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPoint`**-Schnittstelle hat die Eigenschaft **`z`**, die die Tiefenkoordinate eines Punktes im Raum angibt.

Sofern Transformationen die Ausrichtung nicht verändert haben, liegt bei einer `z` von 0 die Ebene des Bildschirms vor. Positive Werte erstrecken sich vom Bildschirm aus in Richtung des Benutzers, während negative Werte in die Entfernung hinter dem Bildschirm zurückgehen.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der _z_-Koordinate für den Punkt angibt. Dieser Wert ist **unrestricted**, was bedeutet, dass er unendlich oder ungültig sein kann (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPoint/x),
  [`y`](/de/docs/Web/API/DOMPoint/y), und der Perspektivenwert [`w`](/de/docs/Web/API/DOMPoint/w).
