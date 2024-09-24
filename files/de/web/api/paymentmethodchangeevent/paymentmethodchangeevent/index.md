---
title: "PaymentMethodChangeEvent: PaymentMethodChangeEvent() Konstruktor"
short-title: PaymentMethodChangeEvent()
slug: Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Der **`PaymentMethodChangeEvent()`**
Konstruktor erstellt ein neues {{domxref("PaymentMethodChangeEvent")}} Objekt, welches
Details zu einem {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} Ereignis bereitstellt.

## Syntax

```js-nolint
new PaymentMethodChangeEvent(type)
new PaymentMethodChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn auf `paymentmethodchange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_
    die folgenden Eigenschaften haben kann:
    - `methodName` {{optional_inline}}
      - : Ein String, der die Kennung der Zahlungsmethode für den
        verwendeten Zahlungsdienstanbieter enthält. Dies ist standardmäßig ein leerer String.
    - `methodDetails` {{optional_inline}}
      - : Ein Objekt, das zahlungsmethodenspezifische Informationen bietet, die die
        am Zahlungsvorgang vorgenommenen Änderungen beschreiben, oder `null`, wenn keine
        zusätzlichen Informationen verfügbar oder erforderlich sind. Dies ist standardmäßig `null`.

### Rückgabewert

Ein neues {{domxref("PaymentMethodChangeEvent")}} Objekt, das eine Änderung der
für die in der Eigenschaft `methodName` angegebene Zahlungsmethode spezifizierten Optionen beschreibt.

Der Typ der `methodDetails` Eigenschaft hängt von der Zahlungsmethode ab. Zum Beispiel, wenn `methodName`
`https://example.com/pay` ist, was bedeutet, dass die Example Pay Zahlungsmethode für die Validierung verwendet wird,
wird die Struktur von `methodDetails` durch die Zahlungsmethode definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/de/docs/Web/API/Payment_Request_API/Concepts)
