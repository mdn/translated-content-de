---
title: "CanMakePaymentEvent: CanMakePaymentEvent() Konstruktor"
short-title: CanMakePaymentEvent()
slug: Web/API/CanMakePaymentEvent/CanMakePaymentEvent
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`CanMakePaymentEvent()`** Konstruktor erstellt eine neue [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent) Objektinstanz.

## Syntax

```js-nolint
new CanMakePaymentEvent(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert. Im Falle von `CanMakePaymentEvent` ist dies immer `canmakepayment`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `CanMakePaymentEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignisses aufgerufen wird.

```js
self.addEventListener("canmakepayment", (e) => {
  e.respondWith(
    new Promise((resolve, reject) => {
      someAppSpecificLogic()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Übersicht über Web-basierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
