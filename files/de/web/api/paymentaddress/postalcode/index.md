---
title: "PaymentAddress: postalCode-Eigenschaft"
short-title: postalCode
slug: Web/API/PaymentAddress/postalCode
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`postalCode`** schreibgeschützte Eigenschaft der [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Schnittstelle gibt einen String zurück, der einen von einer Gerichtsbarkeit für die Postzustellung verwendeten Code enthält, beispielsweise den [ZIP Code](https://en.wikipedia.org/wiki/ZIP_Code) in den Vereinigten Staaten oder den [Postal Index Number](https://en.wikipedia.org/wiki/Postal_Index_Number) (PIN-Code) in Indien.

## Wert

Ein String, der den Postleitzahlenteil der Adresse enthält. Eine Postleitzahl ist ein String (entweder numerisch oder alphanumerisch), der von einem Postdienst verwendet wird, um die Postzustellung und -verteilung zu optimieren.

Verschiedene Länder verwenden dafür unterschiedliche Begriffe. In den meisten Teilen der Welt ist es als "Postleitzahl" bekannt. In den Vereinigten Staaten wird der ZIP-Code verwendet. Indien verwendet PIN-Codes.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Universelle Postunion: [Universal Post\*Code® Database](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions)
