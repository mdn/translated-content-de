---
title: CanMakePaymentEvent
slug: Web/API/CanMakePaymentEvent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`CanMakePaymentEvent`**-Schnittstelle der {{domxref("Payment Handler API", "", "", "nocode")}} ist das Event-Objekt für das {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}}-Ereignis, das im Service Worker einer Zahlungs-App ausgelöst wird, um zu überprüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Es wird ausgelöst, wenn die Händler-Website den {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}}-Konstruktor aufruft.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CanMakePaymentEvent.CanMakePaymentEvent", "CanMakePaymentEvent()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `CanMakePaymentEvent`-Objekts.

## Instanzmethoden

- {{domxref("CanMakePaymentEvent.respondWith", "respondWith()")}} {{Experimental_Inline}}
  - : Ermöglicht es dem Service Worker, angemessen zu antworten, um anzuzeigen, ob er bereit ist, Zahlungen zu bearbeiten.

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

- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
