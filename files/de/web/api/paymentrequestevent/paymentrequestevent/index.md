---
title: "PaymentRequestEvent: PaymentRequestEvent() Konstruktor"
short-title: PaymentRequestEvent()
slug: Web/API/PaymentRequestEvent/PaymentRequestEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
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
  - : Ein Zeichenkette mit dem Namen des Ereignisses.
    Sie ist groß- und kleinschreibungssensitiv und Browser setzen sie auf `paymentrequest`.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `methodData`
      - : Ein Array von `PaymentMethodData` Objekten (siehe [`methodData` > Wert](/de/docs/Web/API/PaymentRequestEvent/methodData#value)), das Zahlungsarten-Identifikatoren für die von der Website akzeptierten Zahlungsarten und zugehörige, zahlungsspezifische Daten enthält.
    - `modifiers`
      - : Ein Array von Objekten, das Änderungen an Zahlungsdetails enthält.
    - `paymentRequestId`
      - : Die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekts.
    - `paymentRequestOrigin`
      - : Der Ursprung, bei dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt initialisiert wurde.
    - `topOrigin`
      - : Der oberste Ursprung, bei dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt initialisiert wurde.
    - `total`
      - : Der Gesamtbetrag, der zur Zahlung angefordert wird.

### Rückgabewert

Ein neues [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PaymentRequestEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignisses aufgerufen wird.

```js
self.addEventListener("paymentrequest", (e) => {
  // ...
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
