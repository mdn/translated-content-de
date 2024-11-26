---
title: PaymentRequestEvent
slug: Web/API/PaymentRequestEvent
l10n:
  sourceCommit: 08e04f121ea7b3a55e6ef47782d2d82fb053ca88
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Das **`PaymentRequestEvent`**-Interface der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API) ist das Objekt, das an einen Zahlungsdienstleister übergeben wird, wenn ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) erstellt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequestEvent()`](/de/docs/Web/API/PaymentRequestEvent/PaymentRequestEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `PaymentRequestEvent`-Objekts.

## Instanzeigenschaften

- [`instrumentKey`](/de/docs/Web/API/PaymentRequestEvent/instrumentKey) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt ein Objekt zurück, das das vom Benutzer ausgewählte Zahlungsinstrument widerspiegelt oder einen leeren String, wenn der Benutzer kein Zahlungsinstrument registriert oder ausgewählt hat.
- [`methodData`](/de/docs/Web/API/PaymentRequestEvent/methodData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Zahlungsarten-Identifikatoren für die akzeptierten Zahlungsmethoden der Website und alle zugehörigen zahlungsspezifischen Daten enthält.
- [`modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Änderungen an den Zahlungsdetails enthält.
- [`paymentRequestId`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts zurück.
- [`paymentRequestOrigin`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Ursprung zurück, an dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
- [`topOrigin`](/de/docs/Web/API/PaymentRequestEvent/topOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den obersten Ursprung zurück, an dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
- [`total`](/de/docs/Web/API/PaymentRequestEvent/total) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den gesamten Zahlungsbetrag zurück, der angefordert wird.

## Instanzmethoden

- [`changePaymentMethod()`](/de/docs/Web/API/PaymentRequestEvent/changePaymentMethod) {{Experimental_Inline}}
  - : Erhält eine aktualisierte Gesamtsumme basierend auf den Zahlungsart-Details.
- [`openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) {{Experimental_Inline}}
  - : Öffnet die angegebene URL in einem neuen Fenster, wenn und nur wenn die angegebene URL denselben Ursprung wie die aufrufende Seite hat. Es gibt ein {{jsxref("Promise")}} zurück, das mit einer Referenz zu einem [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.
- [`respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) {{Experimental_Inline}}
  - : Verhindert die Standard-Ereignisbehandlung und ermöglicht es Ihnen, selbst ein {{jsxref("Promise")}} für ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt bereitzustellen.

## Beispiele

Wenn die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) aufgerufen wird, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis auf dem Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird im Service Worker der Zahlungs-App gehört, um den nächsten Schritt des Zahlungsprozesses zu beginnen.

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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsfenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungsfenster wird den Kunden eine Zahlungsschnittstelle präsentieren, in der sie sich authentifizieren, die Lieferadresse und -optionen auswählen und die Zahlung autorisieren können.

Wenn die Zahlung abgewickelt wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händler-Website zurückzugeben.

Sehen Sie [Empfangen eines Zahlungsanforderungsereignisses vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu diesem Schritt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
