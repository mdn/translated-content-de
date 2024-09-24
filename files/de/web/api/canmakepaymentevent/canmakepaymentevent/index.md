---
title: "CanMakePaymentEvent: CanMakePaymentEvent() Konstruktor"
short-title: CanMakePaymentEvent()
slug: Web/API/CanMakePaymentEvent/CanMakePaymentEvent
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`CanMakePaymentEvent()`** Konstruktor erstellt eine neue Instanz des {{domxref("CanMakePaymentEvent")}} Objekts.

## Syntax

```js-nolint
new CanMakePaymentEvent(type)
```

### Parameter

- `type`
  - : Ein Zeichenfolge, die den Typ des Ereignisses darstellt. Im Fall von `CanMakePaymentEvent` ist dies immer `canmakepayment`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `CanMakePaymentEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} Ereignisses aufgerufen wird.

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

- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
