---
title: "CanMakePaymentEvent: respondWith() Methode"
short-title: respondWith()
slug: Web/API/CanMakePaymentEvent/respondWith
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`respondWith()`** Methode der [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent) Schnittstelle ermöglicht es dem Service Worker, angemessen zu reagieren, um anzuzeigen, ob er bereit ist, Zahlungen zu verarbeiten.

## Syntax

```js-nolint
respondWith(response)
```

### Parameter

- `response`
  - : Ein {{jsxref("Promise")}}, das sich mit einem booleschen Wert auflöst, um anzuzeigen, ob er bereit ist, eine Zahlungsanforderung zu verarbeiten: (`true`), oder nicht (`false`).

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

- [Web-Based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
