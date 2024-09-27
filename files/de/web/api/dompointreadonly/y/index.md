---
title: "DOMPointReadOnly: y-Eigenschaft"
short-title: "y"
slug: Web/API/DOMPointReadOnly/y
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`**-Schnittstelle hat die
Eigenschaft **`y`**, die die vertikale Koordinate, y, für einen
schreibgeschützten Punkt im Raum enthält.

Wenn Ihr Skript in der Lage sein muss, den Wert dieser Eigenschaft zu ändern, sollten Sie stattdessen das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt verwenden.

Im Allgemeinen bedeuten positive Werte von `y` nach unten und negative Werte von
`y` nach oben, vorausgesetzt, es wurden keine Transformationen durchgeführt, die eine Umkehrung zur Folge haben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der y-Koordinate für den
Punkt angibt. Dieser Wert ist **unrestricted**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPointReadOnly/x),
  [`z`](/de/docs/Web/API/DOMPointReadOnly/z) und der Perspektivwert,
  [`w`](/de/docs/Web/API/DOMPointReadOnly/w).
