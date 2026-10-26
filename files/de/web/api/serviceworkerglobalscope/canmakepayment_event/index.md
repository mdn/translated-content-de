---
title: "ServiceWorkerGlobalScope: canmakepayment-Ereignis"
short-title: canmakepayment
slug: Web/API/ServiceWorkerGlobalScope/canmakepayment_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`canmakepayment`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird beim Service Worker einer Zahlungs-App ausgelöst, um zu prüfen, ob er bereit ist, eine Zahlung zu verarbeiten. Konkret wird es ausgelöst, wenn die Händlerwebsite den Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) aufruft.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("canmakepayment", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
oncanmakepayment = (event) => { }
```

## Ereignistyp

Ein [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent). Es erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("CanMakePaymentEvent")}}

## Beispiele

Das `canmakepayment`-Ereignis wird beim Service Worker einer Zahlungs-App ausgelöst, um zu prüfen, ob er bereit ist, eine Zahlung zu verarbeiten. Konkret wird es ausgelöst, wenn die Händlerwebsite den Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) aufruft. Der Service Worker kann dann mit der Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) entsprechend antworten:

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

`respondWith()` gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert erfüllt wird. Dieser gibt an, ob der Service Worker bereit ist, eine Zahlungsanforderung zu verarbeiten (`true`), oder nicht (`false`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
