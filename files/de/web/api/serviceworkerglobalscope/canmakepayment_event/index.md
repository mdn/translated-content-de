---
title: "ServiceWorkerGlobalScope: canmakepayment Ereignis"
short-title: canmakepayment
slug: Web/API/ServiceWorkerGlobalScope/canmakepayment_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`canmakepayment`** Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) Schnittstelle wird im Service Worker einer Zahlungs-App ausgelöst, um zu überprüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Es wird speziell dann ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor aufruft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("canmakepayment", (event) => { })

oncanmakepayment = (event) => { }
```

## Ereignistyp

Ein [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("CanMakePaymentEvent")}}

## Beispiele

Das `canmakepayment` Ereignis wird im Service Worker einer Zahlungs-App ausgelöst, um zu überprüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Es wird speziell dann ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor aufruft. Der Service Worker kann dann die Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) verwenden, um entsprechend zu antworten:

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

`respondWith()` gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, um anzuzeigen, dass der Service Worker bereit ist, eine Zahlungsanforderung zu bearbeiten (`true`), oder nicht (`false`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungsvorgangs](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
