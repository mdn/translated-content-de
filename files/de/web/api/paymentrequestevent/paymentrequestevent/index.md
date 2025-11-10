---
title: "PaymentRequestEvent: PaymentRequestEvent() Konstruktor"
short-title: PaymentRequestEvent()
slug: Web/API/PaymentRequestEvent/PaymentRequestEvent
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`PaymentRequestEvent`** Konstruktor erstellt eine neue Instanz des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) Objekts.

## Syntax

```js-nolint
new PaymentRequestEvent(type)
new PaymentRequestEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `paymentrequest`.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `methodData`
      - : Ein Array von `PaymentMethodData` Objekten (siehe [`methodData` > Wert](/de/docs/Web/API/PaymentRequestEvent/methodData#value)), das Zahlungsidentifikatoren für die von der Website akzeptierten Zahlungsmethoden und alle damit verbundenen methodenspezifischen Daten enthält.
    - `modifiers`
      - : Ein Array von Objekten, die Änderungen an Zahlungsdetails enthalten.
    - `paymentRequestId`
      - : Die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekts.
    - `paymentRequestOrigin`
      - : Die Herkunft, an der das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt initialisiert wurde.
    - `topOrigin`
      - : Die obere Herkunft, an der das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt initialisiert wurde.
    - `total`
      - : Der Gesamtbetrag, der für die Zahlung angefordert wird.

### Rückgabewert

Ein neues [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PaymentRequestEvent` Objekt wird erstellt, wenn ein Handler aufgrund des Auslösens des [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignisses aufgerufen wird.

```js
self.addEventListener("paymentrequest", (e) => {
  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungstransaktions](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
