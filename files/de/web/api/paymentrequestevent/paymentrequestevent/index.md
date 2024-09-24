---
title: "PaymentRequestEvent: PaymentRequestEvent() Konstruktor"
short-title: PaymentRequestEvent()
slug: Web/API/PaymentRequestEvent/PaymentRequestEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`PaymentRequestEvent`** Konstruktor erstellt eine neue Instanz eines {{domxref("PaymentRequestEvent")}} Objekts.

## Syntax

```js-nolint
new PaymentRequestEvent(type)
new PaymentRequestEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß-/Kleinschreibung beachten und Browser setzen es auf `paymentrequest`.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `methodData`
      - : Ein Array von `PaymentMethodData` Objekten (siehe [`methodData` > Wert](/de/docs/Web/API/PaymentRequestEvent/methodData#value)), das Zahlungsarten-Identifikatoren für die von der Website akzeptierten Zahlungsarten und alle zugehörigen, zahlungsartenspezifischen Daten enthält.
    - `modifiers`
      - : Ein Array von Objekten, das Änderungen an den Zahlungsdetails enthält.
    - `paymentRequestId`
      - : Die ID des {{domxref("PaymentRequest")}} Objekts.
    - `paymentRequestOrigin`
      - : Der Ursprung, an dem das {{domxref("PaymentRequest")}} Objekt initialisiert wurde.
    - `topOrigin`
      - : Der oberste Ursprung, an dem das {{domxref("PaymentRequest")}} Objekt initialisiert wurde.
    - `total`
      - : Der Gesamtbetrag, der für die Zahlung angefordert wird.

### Rückgabewert

Ein neues {{domxref("PaymentRequestEvent")}} Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PaymentRequestEvent` Objekt wird erzeugt, wenn ein Handler als Ergebnis des {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} Ereignisses ausgelöst wird.

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
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
