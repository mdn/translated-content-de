---
title: PaymentRequestEvent
slug: Web/API/PaymentRequestEvent
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die **`PaymentRequestEvent`**-Schnittstelle der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API) ist das Objekt, das einem Zahlungsabwickler übergeben wird, wenn eine [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) ausgeführt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequestEvent()`](/de/docs/Web/API/PaymentRequestEvent/PaymentRequestEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `PaymentRequestEvent`-Objekts.

## Instanzeigenschaften

- [`instrumentKey`](/de/docs/Web/API/PaymentRequestEvent/instrumentKey) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}} {{experimental_inline}}
  - : Gibt ein Objekt zurück, das das vom Nutzer ausgewählte Zahlungsmittel widerspiegelt, oder einen leeren String, falls der Nutzer kein Zahlungsmittel registriert oder ausgewählt hat.
- [`methodData`](/de/docs/Web/API/PaymentRequestEvent/methodData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Zahlungsarten-Identifikatoren für die von der Website akzeptierten Zahlungsarten und alle zugehörigen zahlungsmethodenspezifischen Daten enthält.
- [`modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Änderungen an den Zahlungsdetails enthält.
- [`paymentRequestId`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts zurück.
- [`paymentRequestOrigin`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Ursprung zurück, an dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
- [`topOrigin`](/de/docs/Web/API/PaymentRequestEvent/topOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den obersten Ursprung zurück, an dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
- [`total`](/de/docs/Web/API/PaymentRequestEvent/total) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Gesamtbetrag zurück, der für die Zahlung angefordert wird.

## Instanzmethoden

- [`changePaymentMethod()`](/de/docs/Web/API/PaymentRequestEvent/changePaymentMethod) {{Experimental_Inline}}
  - : Erhält einen aktualisierten Gesamtbetrag unter Berücksichtigung der Zahlungsartdetails.
- [`openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) {{Experimental_Inline}}
  - : Öffnet die angegebene URL in einem neuen Fenster, wenn und nur wenn die gegebene URL im selben Ursprung wie die aufrufende Seite ist. Es gibt ein {{jsxref("Promise")}} zurück, das mit einer Referenz zu einem [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.
- [`respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) {{Experimental_Inline}}
  - : Verhindert die standardmäßige Ereignisbehandlung und ermöglicht Ihnen, selbst ein {{jsxref("Promise")}} für ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt bereitzustellen.

## Beispiele

Wenn die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) aufgerufen wird, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis im Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird im Service Worker der Zahlungs-App abgehört, um den nächsten Schritt des Zahlungsprozesses zu beginnen.

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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsabwicklerfenster durch Aufruf von [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) öffnen. Das Zahlungsabwicklerfenster präsentiert den Kunden eine Zahlungs-App-Oberfläche, wo sie sich authentifizieren, eine Versandadresse und Optionen auswählen und die Zahlung autorisieren können.

Wenn die Zahlung abgewickelt wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händler-Website zurückzugeben.

Siehe [Zahlungsaufforderungsereignis vom Händler empfangen](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu diesem Schritt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einzahlungsmethode einrichten](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungstransaktions](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
