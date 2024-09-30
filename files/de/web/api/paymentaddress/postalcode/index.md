---
title: "PaymentAddress: postalCode-Eigenschaft"
short-title: postalCode
slug: Web/API/PaymentAddress/postalCode
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`postalCode`** des [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Interfaces gibt einen String zurück, der einen von einer Gerichtsbarkeit für die Postzustellung verwendeten Code enthält. Zum Beispiel den [ZIP Code](https://en.wikipedia.org/wiki/ZIP_Code) in den Vereinigten Staaten oder die [Postal Index Number](https://en.wikipedia.org/wiki/Postal_Index_Number) (PIN-Code) in Indien.

## Wert

Ein String, der den Postleitzahl-Teil der Adresse enthält. Eine Postleitzahl ist ein String (entweder numerisch oder alphanumerisch), der von einem Postdienst verwendet wird, um die Postzustellung und -verteilung zu optimieren.

Verschiedene Länder verwenden unterschiedliche Begriffe dafür. In den meisten Teilen der Welt wird sie als "post code" oder "postal code" bezeichnet. In den Vereinigten Staaten wird der ZIP-Code verwendet. Indien verwendet PIN-Codes.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Universal Postal Union: [Universal Post\*Code® Database](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions)
