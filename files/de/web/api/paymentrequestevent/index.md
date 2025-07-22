---
title: PaymentRequestEvent
slug: Web/API/PaymentRequestEvent
l10n:
  sourceCommit: 8362200220f895e3f283349dabd12b762bec91ba
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Das **`PaymentRequestEvent`** Interface der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API) ist das Objekt, das an einen Zahlungshandler übergeben wird, wenn eine [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gemacht wird.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequestEvent()`](/de/docs/Web/API/PaymentRequestEvent/PaymentRequestEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `PaymentRequestEvent` Objekts.

## Instanz-Eigenschaften

- [`methodData`](/de/docs/Web/API/PaymentRequestEvent/methodData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Zahlungsmetoden-Identifikatoren für die Zahlungsmetoden, die die Website akzeptiert, und alle zugehörigen zahlungsspezifischen Daten enthält.
- [`modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Änderungen an Zahlungsdetails enthält.
- [`paymentRequestId`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekts zurück.
- [`paymentRequestOrigin`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Herkunft zurück, wo das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt initialisiert wurde.
- [`topOrigin`](/de/docs/Web/API/PaymentRequestEvent/topOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die oberste Herkunft zurück, wo das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt initialisiert wurde.
- [`total`](/de/docs/Web/API/PaymentRequestEvent/total) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Gesamtbetrag zurück, der für die Zahlung angefordert wird.

## Instanz-Methoden

- [`changePaymentMethod()`](/de/docs/Web/API/PaymentRequestEvent/changePaymentMethod) {{Experimental_Inline}}
  - : Erhält einen aktualisierten Gesamtbetrag, basierend auf den Zahlungsmetodendetails.
- [`openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) {{Experimental_Inline}}
  - : Öffnet die angegebene URL in einem neuen Fenster, wenn und nur wenn die angegebene URL denselben Ursprung wie die aufrufende Seite hat. Es gibt ein {{jsxref("Promise")}} zurück, das mit einer Referenz zu einem [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.
- [`respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) {{Experimental_Inline}}
  - : Verhindert die Standard-Eventbehandlung und ermöglicht es Ihnen, selbst ein {{jsxref("Promise")}} für ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekt bereitzustellen.

## Beispiele

Wenn die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode aufgerufen wird, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis im Service-Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird im Service-Worker der Zahlungs-App überwacht, um die nächste Stufe des Zahlungsvorgangs zu starten.

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

  // …
});
```

Wenn ein `paymentrequest` Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsfenster durch Aufruf von [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) öffnen. Das Zahlungsfenster präsentiert den Kunden eine Oberfläche der Zahlungs-App, in der sie sich authentifizieren, die Versandadresse und -optionen auswählen und die Zahlung autorisieren können.

Wenn die Zahlung abgewickelt wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis zurück an die Händler-Website zu übermitteln.

Sehen Sie [Ein Zahlungsevent vom Händler empfangen](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu diesem Schritt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
