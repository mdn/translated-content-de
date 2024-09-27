---
title: "CanMakePaymentEvent: respondWith() Methode"
short-title: respondWith()
slug: Web/API/CanMakePaymentEvent/respondWith
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`respondWith()`** Methode des [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent) Interfaces ermöglicht es dem Service Worker, entsprechend darauf zu reagieren, ob er bereit ist, Zahlungen zu bearbeiten.

## Syntax

```js-nolint
respondWith(response)
```

### Parameter

- `response`
  - : Ein {{jsxref("Promise")}}, das mit einem booleschen Wert auflöst, um zu signalisieren, dass es bereit ist, eine Zahlungsanforderung zu bearbeiten: (`true`), oder nicht (`false`).

### Rückgabewert

Keiner (`undefined`).

## Beispiele

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
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
