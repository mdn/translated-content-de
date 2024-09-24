---
title: "ServiceWorkerGlobalScope: canmakepayment Ereignis"
short-title: canmakepayment
slug: Web/API/ServiceWorkerGlobalScope/canmakepayment_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`canmakepayment`** Ereignis der {{domxref("ServiceWorkerGlobalScope")}} Schnittstelle wird im Service Worker einer Zahlungs-App ausgelöst, um zu prüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Genauer gesagt wird es ausgelöst, wenn die Händlerwebsite den {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} Konstruktor aufruft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("canmakepayment", (event) => {});

oncanmakepayment = (event) => {};
```

## Ereignistyp

Ein {{domxref("CanMakePaymentEvent")}}. Erbt von {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("CanMakePaymentEvent")}}

## Beispiele

Das `canmakepayment` Ereignis wird im Service Worker einer Zahlungs-App ausgelöst, um zu prüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Genauer gesagt wird es ausgelöst, wenn die Händlerwebsite den {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} Konstruktor aufruft. Der Service Worker kann dann die Methode {{domxref("CanMakePaymentEvent.respondWith()")}} verwenden, um entsprechend zu antworten:

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

- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungsvorgangs](https://web.dev/articles/life-of-a-payment-transaction)
- [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
