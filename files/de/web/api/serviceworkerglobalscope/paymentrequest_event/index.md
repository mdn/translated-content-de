---
title: "ServiceWorkerGlobalScope: paymentrequest-Ereignis"
short-title: paymentrequest
slug: Web/API/ServiceWorkerGlobalScope/paymentrequest_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`paymentrequest`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird in einer Zahlungs-App ausgelöst, wenn ein Zahlungsablauf auf der Händler-Website über die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode initiiert wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("paymentrequest", (event) => {});

onpaymentrequest = (event) => {};
```

## Ereignistyp

Ein [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("PaymentRequestEvent")}}

## Beispiele

Wenn die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode aufgerufen wird, wird ein `paymentrequest`-Ereignis im Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird im Service Worker der Zahlungs-App abgehört, um den nächsten Schritt des Zahlungsprozesses zu starten.

```js
let payment_request_event;
let resolver;
let client;

// `self` is the global object in service worker
self.addEventListener("paymentrequest", async (e) => {
  if (payment_request_event) {
    // If there's an ongoing payment transaction, reject it.
    resolver.reject();
  }
  // Preserve the event for future use
  payment_request_event = e;

  // ...
});
```

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungs-Handler-Fenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungs-Handler-Fenster präsentiert den Kunden eine Oberfläche der Zahlungs-App, in der sie sich authentifizieren, die Lieferadresse und Optionen auswählen und die Zahlung autorisieren können.

Sobald die Zahlung bearbeitet wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis zurück an die Händler-Website zu übermitteln.

Weitere Informationen zu diesem Schritt finden Sie unter [Receive a payment request event from the merchant](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Ein Zahlungsmethode einrichten](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
