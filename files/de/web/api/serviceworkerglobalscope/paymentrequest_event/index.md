---
title: "ServiceWorkerGlobalScope: paymentrequest-Ereignis"
short-title: paymentrequest
slug: Web/API/ServiceWorkerGlobalScope/paymentrequest_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`paymentrequest`**-Ereignis der {{domxref("ServiceWorkerGlobalScope")}}-Schnittstelle wird in einer Zahlungsanwendung ausgelöst, wenn ein Zahlungsablauf auf der Händler-Website über die Methode {{domxref("PaymentRequest.show()")}} initiiert wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("paymentrequest", (event) => {});

onpaymentrequest = (event) => {};
```

## Ereignistyp

Ein {{domxref("PaymentRequestEvent")}}. Erbt von {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("PaymentRequestEvent")}}

## Beispiele

Wenn die {{domxref("PaymentRequest.show()")}}-Methode aufgerufen wird, wird ein `paymentrequest`-Ereignis im Service-Worker der Zahlungsanwendung ausgelöst. Dieses Ereignis wird innerhalb des Service-Workers der Zahlungsanwendung abgehört, um den nächsten Schritt des Zahlungsprozesses zu beginnen.

```js
let payment_request_event;
let resolver;
let client;

// `self` ist das globale Objekt im Service-Worker
self.addEventListener("paymentrequest", async (e) => {
  if (payment_request_event) {
    // Wenn eine laufende Zahlungstransaktion vorliegt, wird sie abgelehnt.
    resolver.reject();
  }
  // Das Ereignis für zukünftigen Gebrauch speichern
  payment_request_event = e;

  // ...
});
```

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungsanwendung ein Zahlungsfenster öffnen, indem {{domxref("PaymentRequestEvent.openWindow()")}} aufgerufen wird. Das Zahlungsfenster präsentiert den Kunden eine Benutzerschnittstelle zur Authentifizierung, Auswahl der Lieferadresse und Optionen sowie zur Autorisierung der Zahlung.

Sobald die Zahlung bearbeitet wurde, wird {{domxref("PaymentRequestEvent.respondWith()")}} verwendet, um das Zahlungsergebnis zurück an die Händler-Website zu übermitteln.

Siehe [Empfangen eines Zahlungsanforderungsereignisses vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu dieser Phase.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Übersicht über webbasierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungsvorgangs](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
