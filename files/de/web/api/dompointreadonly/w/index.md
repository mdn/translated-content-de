---
title: "DOMPointReadOnly: w-Eigenschaft"
short-title: w
slug: Web/API/DOMPointReadOnly/w
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`DOMPointReadOnly`**-Schnittstelle hat die Eigenschaft
**`w`**, die den Perspektivenwert `w` eines schreibgeschützten Punktes im Raum hält.

Wenn Ihr Skript in der Lage sein muss, den Wert dieser Eigenschaft zu ändern, sollten Sie stattdessen das [`DOMPoint`](/de/docs/Web/API/DOMPoint)
Objekt verwenden.

## Wert

Ein Fließkommawert mit doppelter Genauigkeit, der den Perspektivenwert `w` für den Punkt angibt. Dieser Wert ist **nicht eingeschränkt**, was bedeutet, dass er unendlich oder ungültig sein darf (d.h. sein Wert kann {{jsxref("NaN")}} oder {{jsxref("Infinity", "±Infinity")}} sein). Der Standardwert ist `1.0`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Koordinateneigenschaften: [`x`](/de/docs/Web/API/DOMPointReadOnly/x),
  [`y`](/de/docs/Web/API/DOMPointReadOnly/y), und [`z`](/de/docs/Web/API/DOMPointReadOnly/z).
