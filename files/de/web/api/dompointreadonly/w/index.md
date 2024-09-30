---
title: "DOMPointReadOnly: w-Eigenschaft"
short-title: w
slug: Web/API/DOMPointReadOnly/w
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`**-Schnittstelle hat die
**`w`**-Eigenschaft, die den Perspektivwert des Punktes,
`w`, für einen schreibgeschützten Punkt im Raum enthält.

Wenn Ihr Skript die Möglichkeit erfordern sollte,
den Wert dieser Eigenschaft zu ändern, sollten Sie stattdessen das [`DOMPoint`](/de/docs/Web/API/DOMPoint)
Objekt verwenden.

## Wert

Ein doppeltgenauer Gleitkommawert, der den `w`-Perspektivwert
für den Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (das heißt, sein Wert kann {{jsxref("NaN")}} oder
{{jsxref("Infinity", "±Infinity")}} sein). Der Standardwert ist `1.0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPointReadOnly/x),
  [`y`](/de/docs/Web/API/DOMPointReadOnly/y), und [`z`](/de/docs/Web/API/DOMPointReadOnly/z).
