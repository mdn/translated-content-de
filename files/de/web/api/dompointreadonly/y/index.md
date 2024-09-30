---
title: "DOMPointReadOnly: y-Eigenschaft"
short-title: "y"
slug: Web/API/DOMPointReadOnly/y
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`** Schnittstelle hat die
**`y`**-Eigenschaft, die die vertikale Koordinate, y, für einen
schreibgeschützten Punkt im Raum enthält.

Falls Ihr Skript den Wert dieser Eigenschaft ändern können muss, sollten Sie stattdessen das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt verwenden.

Im Allgemeinen bedeuten positive Werte von `y` nach unten, und negative Werte von `y` nach oben, vorausgesetzt, dass keine Transformationen zu einer Umkehrung geführt haben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der y-Koordinate des Punktes angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (d. h. sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateigenschaften: [`x`](/de/docs/Web/API/DOMPointReadOnly/x),
  [`z`](/de/docs/Web/API/DOMPointReadOnly/z) und den Perspektivwert,
  [`w`](/de/docs/Web/API/DOMPointReadOnly/w).
