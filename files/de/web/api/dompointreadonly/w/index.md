---
title: "DOMPointReadOnly: Eigenschaft w"
short-title: w
slug: Web/API/DOMPointReadOnly/w
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMPointReadOnly`** Schnittstelle hat die
Eigenschaft **`w`**, die den Perspektivwert `w` für einen schreibgeschützten Punkt im Raum hält.

Wenn Ihr Skript in der Lage sein muss, den Wert dieser Eigenschaft zu ändern, sollten Sie stattdessen das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt verwenden.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den Perspektivwert `w` für den Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein). Der Standardwert ist `1.0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPointReadOnly/x),
  [`y`](/de/docs/Web/API/DOMPointReadOnly/y) und [`z`](/de/docs/Web/API/DOMPointReadOnly/z).
