---
title: "ServiceWorkerGlobalScope: canmakepayment-Event"
short-title: canmakepayment
slug: Web/API/ServiceWorkerGlobalScope/canmakepayment_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`canmakepayment`**-Event der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird in einem Zahlungs-App-Service-Worker ausgelöst, um zu überprüfen, ob dieser bereit ist, eine Zahlung zu bearbeiten. Genauer gesagt wird es ausgelöst, wenn die Händlerwebsite den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("canmakepayment", (event) => {});

oncanmakepayment = (event) => {};
```

## Ereignistyp

Ein [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("CanMakePaymentEvent")}}

## Beispiele

Das `canmakepayment`-Event wird in einem Zahlungs-App-Service-Worker ausgelöst, um zu überprüfen, ob dieser bereit ist, eine Zahlung zu bearbeiten. Genauer gesagt wird es ausgelöst, wenn die Händlerwebsite den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft. Der Service-Worker kann dann die Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) verwenden, um angemessen zu reagieren:

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

`respondWith()` gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, um zu signalisieren, dass der Service-Worker bereit ist, eine Zahlungsanfrage zu bearbeiten (`true`) oder nicht (`false`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einzahlungsmethode einrichten](https://web.dev/articles/setting-up-a-payment-method)
- [Leben einer Transaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
