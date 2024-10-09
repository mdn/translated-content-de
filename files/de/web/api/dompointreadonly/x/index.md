---
title: "DOMPointReadOnly: x-Eigenschaft"
short-title: x
slug: Web/API/DOMPointReadOnly/x
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMPointReadOnly`**-Schnittstelle hat die
**`x`**-Eigenschaft, die die horizontale Koordinate, x, für einen
schreibgeschützten Punkt im Raum hält. Diese Eigenschaft kann im schreibgeschützten Modus des `DOMPoint`-Objekts nicht durch JavaScript-Code geändert werden.

Im Allgemeinen bedeuten positive Werte von `x` nach rechts, und negative Werte von
`x` bedeuten nach links, vorausgesetzt, es wurden keine Transformationen durchgeführt, die zu einer Umkehrung geführt haben.

## Wert

Ein Gleitkomma-Doppelpräzisionswert, der den Wert der x-Koordinate für den
Punkt angibt. Dieser Wert ist **uneingeschränkt**, das bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`y`](/de/docs/Web/API/DOMPointReadOnly/y),
  [`z`](/de/docs/Web/API/DOMPointReadOnly/z), und der perspektivische Wert,
  [`w`](/de/docs/Web/API/DOMPointReadOnly/w).
