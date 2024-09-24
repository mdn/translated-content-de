---
title: "DOMPointReadOnly: w-Eigenschaft"
short-title: w
slug: Web/API/DOMPointReadOnly/w
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`**-Schnittstelle
**`w`**-Eigenschaft enthält den Perspektivwert des Punktes,
`w`, für einen schreibgeschützten Punkt im Raum.

Wenn Ihr Skript in der Lage sein muss,
den Wert dieser Eigenschaft zu ändern, sollten Sie stattdessen das {{domxref("DOMPoint")}}
Objekt verwenden.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der den `w`-Perspektivwert
für den Punkt angibt. Dieser Wert ist **uneingeschränkt**, was bedeutet, dass er unendlich oder ungültig sein kann (das heißt, sein Wert kann {{jsxref("NaN")}} oder
{{jsxref("Infinity", "±Unendlich")}} sein). Der Standardwert ist `1.0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: {{domxref("DOMPointReadOnly.x", "x")}},
  {{domxref("DOMPointReadOnly.y", "y")}}, und {{domxref("DOMPointReadOnly.z", "z")}}.
