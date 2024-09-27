---
title: "DOMPoint: y Eigenschaft"
short-title: "y"
slug: Web/API/DOMPoint/y
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPoint`**-Schnittstelle
enthält die Eigenschaft **`y`**, die die vertikale Koordinate, _y_,
für einen Punkt im Raum hält.

Sofern keine Transformationen angewendet wurden, um die
Ausrichtung zu ändern, erhöht sich der Wert von `y` nach unten und verringert sich nach oben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der _y_-Koordinate
für den Punkt angibt. Dieser Wert ist **unrestricted**, was bedeutet, dass er
unendlich oder ungültig sein kann (das heißt, sein Wert kann {{jsxref("NaN")}} oder
{{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPoint/x),
  [`z`](/de/docs/Web/API/DOMPoint/z), und der perspektivische Wert [`w`](/de/docs/Web/API/DOMPoint/w).
