---
title: "PaymentRequestEvent: PaymentRequestEvent() Konstruktor"
short-title: PaymentRequestEvent()
slug: Web/API/PaymentRequestEvent/PaymentRequestEvent
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`PaymentRequestEvent`**-Konstruktor erstellt eine neue Instanz des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Objekts.

## Syntax

```js-nolint
new PaymentRequestEvent(type)
new PaymentRequestEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn auf `paymentrequest`.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den im [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `methodData`
      - : Ein Array von `PaymentMethodData`-Objekten (siehe [`methodData` > Wert](/de/docs/Web/API/PaymentRequestEvent/methodData#value)), das Zahlungsarten-Identifikatoren für die vom Webauftritt akzeptierten Zahlungsmethoden und zugehörige zahlungsspezifische Daten enthält.
    - `modifiers`
      - : Ein Array von Objekten, die Änderungen an den Zahlungsdetails enthalten.
    - `paymentRequestId`
      - : Die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts.
    - `paymentRequestOrigin`
      - : Der Ursprung, an dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
    - `topOrigin`
      - : Der oberste Ursprung, an dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
    - `total`
      - : Der Gesamtbetrag, der für die Zahlung angefordert wird.

### Rückgabewert

Ein neues [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PaymentRequestEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignisses aufgerufen wird.

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

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungsvorgangs](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsabwicklungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
