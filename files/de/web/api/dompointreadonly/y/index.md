---
title: "DOMPointReadOnly: y Eigenschaft"
short-title: "y"
slug: Web/API/DOMPointReadOnly/y
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`**-Schnittstelle hat die Eigenschaft **`y`**, die die vertikale Koordinate, y, für einen unveränderlichen Punkt im Raum hält.

Wenn Ihr Skript in der Lage sein muss, den Wert dieser Eigenschaft zu ändern, sollten Sie stattdessen das {{domxref("DOMPoint")}}-Objekt verwenden.

Im Allgemeinen bedeuten positive Werte von `y` nach unten, und negative Werte von `y` bedeuten nach oben, vorausgesetzt, dass keine Transformationen zu einer Umkehrung geführt haben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der y-Koordinate für den Punkt angibt. Dieser Wert ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: {{domxref("DOMPointReadOnly.x", "x")}}, {{domxref("DOMPointReadOnly.z", "z")}} und der Perspektivenwert, {{domxref("DOMPointReadOnly.w", "w")}}.
