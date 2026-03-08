---
title: CanMakePaymentEvent
slug: Web/API/CanMakePaymentEvent
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Das **`CanMakePaymentEvent`** Interface der [Web-Based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API) ist das Ereignisobjekt für das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis, das im Service Worker einer Zahlungs-App ausgelöst wird, um zu prüfen, ob es bereit ist, eine Zahlung zu bearbeiten. Insbesondere wird es ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor aufruft.

{{InheritanceDiagram}}

## Konstruktor

- [`CanMakePaymentEvent()`](/de/docs/Web/API/CanMakePaymentEvent/CanMakePaymentEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `CanMakePaymentEvent` Objekt.

## Instanzmethoden

- [`respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) {{Experimental_Inline}}
  - : Ermöglicht es dem Service Worker, angemessen zu reagieren, um anzuzeigen, ob er bereit ist, Zahlungen zu bearbeiten.

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
- [Überblick über Web-basierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
