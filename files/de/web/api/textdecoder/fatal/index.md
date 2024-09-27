---
title: "TextDecoder: fatal Eigenschaft"
short-title: fatal
slug: Web/API/TextDecoder/fatal
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`fatal`**-Eigenschaft der [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Schnittstelle ist ein {{jsxref('Boolean')}}, der angibt, ob der Fehlermodus fatal ist.

Wenn die Eigenschaft auf `true` gesetzt ist, wirft ein Decoder einen {{jsxref("TypeError")}}, wenn beim Decodieren fehlerhafte Daten auftreten.
Wenn `false`, ersetzt der Decoder die ungültigen Daten durch das Ersatzzeichen `U+FFFD` (�).
Der Wert der Eigenschaft wird im [`TextDecoder()`-Konstruktor](/de/docs/Web/API/TextDecoder/TextDecoder) festgelegt.

## Wert

Ein Boolean, der `true` ist, wenn der Fehlermodus auf `fatal` gesetzt ist.
Andernfalls ist er `false`, was anzeigt, dass der Fehlermodus `replacement` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
