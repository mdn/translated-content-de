---
title: "PaymentMethodChangeEvent: PaymentMethodChangeEvent()-Konstruktor"
short-title: PaymentMethodChangeEvent()
slug: Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Der **`PaymentMethodChangeEvent()`**-Konstruktor erstellt ein neues [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)-Objekt, das Details zu einem [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)-Ereignis bereitstellt.

## Syntax

```js-nolint
new PaymentMethodChangeEvent(type)
new PaymentMethodChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitiv und wird von Browsern auf `paymentmethodchange` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `methodName` {{optional_inline}}
      - : Ein String, der den Bezahlmethoden-Identifikator für den verwendeten Zahlungshandler enthält. Standardmäßig ist dies ein leerer String.
    - `methodDetails` {{optional_inline}}
      - : Ein Objekt, das zahlungsmethodenspezifische Informationen beschreibt, die die Änderungen an der Zahlung beschreiben, oder `null`, wenn keine zusätzlichen Informationen verfügbar oder erforderlich sind. Standardmäßig ist dies `null`.

### Rückgabewert

Ein neues [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)-Objekt, das eine Änderung der für die in der `methodName`-Eigenschaft angegebene Zahlungsmethode spezifizierten Optionen beschreibt.

Der Typ der `methodDetails`-Eigenschaft hängt von der Zahlungsmethode ab. Zum Beispiel, wenn `methodName` `https://example.com/pay` ist, was darauf hinweist, dass die Example Pay Zahlungsmethode zur Validierung verwendet wird, wird die Struktur von `methodDetails` durch die Zahlungsmethode definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
