---
title: "TextDecoder: fatal-Eigenschaft"
short-title: fatal
slug: Web/API/TextDecoder/fatal
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`fatal`** schreibgeschützte Eigenschaft des [`TextDecoder`](/de/docs/Web/API/TextDecoder) Interfaces ist ein {{jsxref('Boolean')}}, der angibt, ob der Fehlermodus fatal ist.

Wenn die Eigenschaft `true` ist, wird ein Decoder einen {{jsxref("TypeError")}} auslösen, wenn er fehlerhafte Daten beim Dekodieren entdeckt.
Ist sie `false`, wird der Decoder die ungültigen Daten durch das Ersatzzeichen `U+FFFD` (�) ersetzen.
Der Wert der Eigenschaft wird im [`fatal`](/de/docs/Web/API/TextDecoder/TextDecoder#fatal)-Argument des Konstruktors des Decoders festgelegt.

## Wert

Ein Boolean, der `true` ist, wenn der Fehlermodus auf `fatal` gesetzt ist.
Andernfalls wird er `false` sein, was anzeigt, dass der Fehlermodus `replacement` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
