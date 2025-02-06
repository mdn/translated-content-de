---
title: "DOMPointReadOnly: y-Eigenschaft"
short-title: y
slug: Web/API/DOMPointReadOnly/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMPointReadOnly`**-Schnittstelle verfügt über die **`y`**-Eigenschaft, die die vertikale Koordinate, `y`, für einen schreibgeschützten Punkt im Raum enthält.

Falls Ihr Skript in der Lage sein muss, den Wert dieser Eigenschaft zu ändern, sollten Sie stattdessen das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt verwenden.

Im Allgemeinen bedeuten positive Werte von `y` abwärts, und negative Werte von `y` aufwärts, vorausgesetzt, es wurden keine Transformationen vorgenommen, die eine Umkehrung bewirkt haben.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Wert der y-Koordinate für den Punkt angibt. Dieser Wert ist **unbeschränkt**, was bedeutet, dass er unendlich oder ungültig sein kann (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPointReadOnly/x),
  [`z`](/de/docs/Web/API/DOMPointReadOnly/z) und der Perspektivwert,
  [`w`](/de/docs/Web/API/DOMPointReadOnly/w).
