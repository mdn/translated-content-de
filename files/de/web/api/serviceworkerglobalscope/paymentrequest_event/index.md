---
title: "ServiceWorkerGlobalScope: paymentrequest-Ereignis"
short-title: paymentrequest
slug: Web/API/ServiceWorkerGlobalScope/paymentrequest_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`paymentrequest`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird in einer Zahlungs-App ausgelöst, wenn auf der Website des Händlers über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) ein Zahlungsvorgang eingeleitet wurde.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("paymentrequest", (event) => { })
```

Alternativ können Sie der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onpaymentrequest = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("PaymentRequestEvent")}}

## Beispiele

Wenn die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) aufgerufen wird, wird im Service Worker der Zahlungs-App ein `paymentrequest`-Ereignis ausgelöst. Der Service Worker der Zahlungs-App verarbeitet dieses Ereignis, um die nächste Phase des Zahlungsvorgangs zu beginnen.

```js
let paymentRequestEvent;
const resolver = Promise.withResolvers();
let client;

// `self` is the global object in service worker
self.addEventListener("paymentrequest", async (e) => {
  if (paymentRequestEvent) {
    // If there's an ongoing payment transaction, reject it.
    resolver.reject();
  }
  // Preserve the event for future use
  paymentRequestEvent = e;

  // …
});
```

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App durch Aufrufen von [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) ein Fenster für die Zahlungsabwicklung öffnen. In diesem Fenster wird Kunden die Benutzeroberfläche der Zahlungs-App angezeigt. Dort können sie sich authentifizieren, eine Versandadresse und Versandoptionen auswählen und die Zahlung autorisieren.

Nach der Abwicklung der Zahlung wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Website des Händlers zurückzugeben.

Weitere Informationen zu dieser Phase finden Sie unter [Ein Zahlungsanforderungsereignis vom Händler empfangen](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
