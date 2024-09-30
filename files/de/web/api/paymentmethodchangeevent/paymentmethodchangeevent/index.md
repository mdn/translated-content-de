---
title: "PaymentMethodChangeEvent: PaymentMethodChangeEvent() Konstruktor"
short-title: PaymentMethodChangeEvent()
slug: Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Der **`PaymentMethodChangeEvent()`**
Konstruktor erstellt ein neues [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent) Objekt, das
Details über ein [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event) Ereignis bereitstellt.

## Syntax

```js-nolint
new PaymentMethodChangeEvent(type)
new PaymentMethodChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es auf `paymentmethodchange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_,
    die folgenden Eigenschaften haben kann:
    - `methodName` {{optional_inline}}
      - : Ein String, der die Bezahlmethoden-ID für den verwendeten
        Zahlungshändler enthält. Dies ist standardmäßig ein leerer String.
    - `methodDetails` {{optional_inline}}
      - : Ein Objekt, das zahlungsspezifische Informationen bereitstellt, die die Änderungen
        an der Zahlung beschreiben, oder `null`, wenn keine zusätzlichen Informationen
        verfügbar oder erforderlich sind. Dies ist standardmäßig `null`.

### Rückgabewert

Ein neues [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent) Objekt, das eine Änderung der
für die angegebene Zahlungsmethode im `methodName`-Eigenschaft spezifizierten Optionen beschreibt.

Der Typ der `methodDetails`-Eigenschaft hängt von der Zahlungsmethode ab. Zum
Beispiel, wenn `methodName` `https://example.com/pay` ist, was anzeigt, dass die
Bezahlmethode Example Pay zur Validierung verwendet wird, wird die Struktur von `methodDetails`
durch die Zahlungsmethode definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
