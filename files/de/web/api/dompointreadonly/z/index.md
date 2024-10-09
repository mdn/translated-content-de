---
title: "DOMPointReadOnly: z Eigenschaft"
short-title: z
slug: Web/API/DOMPointReadOnly/z
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMPointReadOnly`** Schnittstelle hat die
Eigenschaft **`z`**, die die Tiefenkoordinate, z, für einen
schreibgeschützten Punkt im Raum hält.

Wenn Ihr Skript in der Lage sein muss, den Wert dieser Eigenschaft zu ändern, sollten Sie stattdessen das [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt verwenden.

Im Allgemeinen bedeuten positive Werte von `z` Richtung Benutzer (aus dem
Bildschirm heraus), und negative Werte von `z` bedeuten vom Benutzer weg (in den
Bildschirm hinein), vorausgesetzt, es wurden keine Transformationen vorgenommen, die zu einer Umkehrung geführt haben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der z-Koordinate für den
Punkt angibt. Dieser Wert ist **unbeschränkt**, was bedeutet, dass er
unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPointReadOnly/x),
  [`y`](/de/docs/Web/API/DOMPointReadOnly/y), und der Perspektivenwert,
  [`w`](/de/docs/Web/API/DOMPointReadOnly/w).
