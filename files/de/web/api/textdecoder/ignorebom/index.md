---
title: "TextDecoder: ignoreBOM-Eigenschaft"
short-title: ignoreBOM
slug: Web/API/TextDecoder/ignoreBOM
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ignoreBOM`**-Eigenschaft der [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Schnittstelle ist ein {{jsxref('Boolean')}} und gibt an, ob die [Byte Order Mark](https://www.w3.org/International/questions/qa-byte-order-mark) in die Ausgabe einbezogen oder übersprungen wird. Der Wert der Eigenschaft wird im [`ignoreBOM`](/de/docs/Web/API/TextDecoder/TextDecoder#ignorebom)-Argument des Konstruktors des Decoders festgelegt.

## Wert

`true`, wenn die [Byte Order Mark](https://www.w3.org/International/questions/qa-byte-order-mark) im decodierten Text enthalten ist; `false`, wenn sie beim Decodieren übersprungen und weggelassen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
