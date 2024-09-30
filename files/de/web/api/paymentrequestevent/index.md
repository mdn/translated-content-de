---
title: PaymentRequestEvent
slug: Web/API/PaymentRequestEvent
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Das **`PaymentRequestEvent`**-Interface der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API) ist das Objekt, das an einen Zahlungsabwickler übergeben wird, wenn eine [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) erstellt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequestEvent()`](/de/docs/Web/API/PaymentRequestEvent/PaymentRequestEvent) {{Experimental_Inline}}
  - : Erzeugt eine neue Instanz des `PaymentRequestEvent`-Objekts.

## Instanz-Eigenschaften

- [`instrumentKey`](/de/docs/Web/API/PaymentRequestEvent/instrumentKey) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}} {{experimental_inline}}
  - : Gibt ein Objekt zurück, das das vom Benutzer ausgewählte Zahlungsmittel widerspiegelt, oder einen leeren String, falls der Benutzer kein Zahlungsmittel registriert oder gewählt hat.
- [`methodData`](/de/docs/Web/API/PaymentRequestEvent/methodData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Bezahlmethoden-Identifikatoren für die akzeptierten Bezahlmethoden der Website und alle zugehörigen spezifischen Daten der Bezahlmethoden enthält.
- [`modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Änderungen an Zahlungsdetails enthält.
- [`paymentRequestId`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts zurück.
- [`paymentRequestOrigin`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Ursprung zurück, wo das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
- [`topOrigin`](/de/docs/Web/API/PaymentRequestEvent/topOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den obersten Ursprung zurück, wo das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
- [`total`](/de/docs/Web/API/PaymentRequestEvent/total) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den insgesamt angeforderten Zahlungsbetrag zurück.

## Instanz-Methoden

- [`changePaymentMethod()`](/de/docs/Web/API/PaymentRequestEvent/changePaymentMethod) {{Experimental_Inline}}
  - : Erhält einen aktualisierten Gesamtbetrag basierend auf den Details der Zahlungsmethode.
- [`openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) {{Experimental_Inline}}
  - : Öffnet die angegebene URL in einem neuen Fenster, wenn und nur wenn die gegebene URL den gleichen Ursprung wie die aufrufende Seite hat. Es gibt ein {{jsxref("Promise")}} zurück, das mit einer Referenz zu einem [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.
- [`respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) {{Experimental_Inline}}
  - : Verhindert die Standardereignisbehandlung und ermöglicht es Ihnen, ein {{jsxref("Promise")}} für ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt selbst bereitzustellen.

## Beispiele

Wenn die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode aufgerufen wird, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis im Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird im Service Worker der Zahlungs-App abgehört, um den nächsten Schritt des Zahlungsprozesses zu starten.

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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsabwicklerfenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungsabwicklerfenster präsentiert den Kunden eine Schnittstelle der Zahlungs-App, in der sie sich authentifizieren, die Versandadresse und -optionen auswählen und die Zahlung autorisieren können.

Wenn die Zahlung abgewickelt wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis zurück an die Händler-Website zu übermitteln.

Sehen Sie sich [Empfangen eines Zahlungsanforderungsereignisses vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu diesem Schritt an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
