---
title: "TextDecoder: Fatal-Eigenschaft"
short-title: fatal
slug: Web/API/TextDecoder/fatal
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

Die **`fatal`** schreibgeschützte Eigenschaft der {{domxref("TextDecoder")}}-Schnittstelle ist ein {{jsxref('Boolean')}}, der anzeigt, ob der Fehlermodus fatal ist.

Wenn die Eigenschaft `true` ist, wirft der Decoder einen {{jsxref("TypeError")}}, wenn er auf fehlerhafte Daten während des Dekodierens stößt.
Wenn `false`, ersetzt der Decoder die ungültigen Daten durch das Ersatzzeichen `U+FFFD` (�).
Der Wert der Eigenschaft wird im [`TextDecoder()`-Konstruktor](/de/docs/Web/API/TextDecoder/TextDecoder) festgelegt.

## Wert

Ein Boolean, der `true` ist, wenn der Fehlermodus auf `fatal` gesetzt ist.
Andernfalls ist er `false`, was darauf hinweist, dass der Fehlermodus `replacement` ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
