---
title: "TextDecoder: ignoreBOM-Eigenschaft"
short-title: ignoreBOM
slug: Web/API/TextDecoder/ignoreBOM
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`ignoreBOM`** schreibgeschützte Eigenschaft des [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Interfaces ist ein {{jsxref('Boolean')}}, das angibt, ob die [Byte Order Mark](https://www.w3.org/International/questions/qa-byte-order-mark) im Ausgabewert enthalten sein oder übersprungen wird. Der Wert der Eigenschaft wird im [`ignoreBOM`](/de/docs/Web/API/TextDecoder/TextDecoder#ignoreBOM)-Argument des Konstruktors des Decoders gesetzt.

## Wert

`true`, wenn die [Byte Order Mark](https://www.w3.org/International/questions/qa-byte-order-mark) im dekodierten Text enthalten sein wird; `false`, wenn sie beim Decodieren übersprungen und ausgelassen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
