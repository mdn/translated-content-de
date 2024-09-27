---
title: "DOMPointReadOnly: z-Eigenschaft"
short-title: z
slug: Web/API/DOMPointReadOnly/z
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`**-Schnittstelle besitzt die
**`z`**-Eigenschaft, die die Tiefenkoordinate, z, für einen
schreibgeschützten Punkt im Raum hält.

Wenn Ihr Skript in der Lage sein muss, den Wert dieser Eigenschaft zu ändern,
sollten Sie stattdessen das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt verwenden.

Im Allgemeinen bedeuten positive Werte von `z` in Richtung des Benutzers (aus dem
Bildschirm heraus), und negative Werte von `z` bedeuten weg vom Benutzer (in den
Bildschirm hinein), vorausgesetzt, dass keine Transformationen zu einer Umkehrung geführt haben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der z-Koordinate für den
Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er
unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPointReadOnly/x),
  [`y`](/de/docs/Web/API/DOMPointReadOnly/y) und der Perspektivwert,
  [`w`](/de/docs/Web/API/DOMPointReadOnly/w).
