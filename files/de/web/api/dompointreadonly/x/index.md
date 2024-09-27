---
title: "DOMPointReadOnly: x-Eigenschaft"
short-title: x
slug: Web/API/DOMPointReadOnly/x
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`**-Schnittstelle
enthält die **`x`**-Eigenschaft, die die horizontale Koordinate, x, für einen
schreibgeschützten Punkt im Raum hält. Diese Eigenschaft kann in dieser
schreibgeschützten Version des `DOMPoint`-Objekts nicht durch JavaScript-Code geändert werden.

Im Allgemeinen bedeuten positive Werte von `x` nach rechts, und negative Werte von `x` bedeuten nach links, vorausgesetzt, es wurden keine Transformationen vorgenommen, die zu einer Umkehrung geführt haben.

## Wert

Ein doppelt präziser Gleitkommawert, der den Wert der x-Koordinate für den
Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er
unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`y`](/de/docs/Web/API/DOMPointReadOnly/y),
  [`z`](/de/docs/Web/API/DOMPointReadOnly/z), und der Perspektivenwert,
  [`w`](/de/docs/Web/API/DOMPointReadOnly/w).
