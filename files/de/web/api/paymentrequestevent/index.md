---
title: PaymentRequestEvent
slug: Web/API/PaymentRequestEvent
l10n:
  sourceCommit: b60c5dad8cf10d8492f2aff491abb40bf1851b03
---

{{SeeCompatTable}}{{APIRef("Web-Based Payment Handler API")}}{{AvailableInWorkers("service")}}

Die Schnittstelle **`PaymentRequestEvent`** der [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API) ist das Objekt, das an einen Zahlungs-Handler übergeben wird, wenn ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gestellt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequestEvent()`](/de/docs/Web/API/PaymentRequestEvent/PaymentRequestEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `PaymentRequestEvent`-Objekts.

## Instanzeigenschaften

- [`methodData`](/de/docs/Web/API/PaymentRequestEvent/methodData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Kennungen für die von der Website akzeptierten Zahlungsmethoden sowie zugehörige zahlungsmethodenspezifische Daten enthält.
- [`modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, das Änderungen an den Zahlungsdetails enthält.
- [`paymentRequestId`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts zurück.
- [`paymentRequestOrigin`](/de/docs/Web/API/PaymentRequestEvent/paymentRequestOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Ursprung zurück, unter dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
- [`topOrigin`](/de/docs/Web/API/PaymentRequestEvent/topOrigin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den obersten Ursprung zurück, unter dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.
- [`total`](/de/docs/Web/API/PaymentRequestEvent/total) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den angeforderten Gesamtzahlungsbetrag zurück.

## Instanzmethoden

- [`changePaymentMethod()`](/de/docs/Web/API/PaymentRequestEvent/changePaymentMethod) {{Experimental_Inline}}
  - : Ruft anhand der Details zur Zahlungsmethode einen aktualisierten Gesamtbetrag ab.
- [`openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) {{Experimental_Inline}}
  - : Öffnet die angegebene URL genau dann in einem neuen Fenster, wenn sie denselben Ursprung wie die aufrufende Seite hat. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einer Referenz auf einen [`WindowClient`](/de/docs/Web/API/WindowClient) erfüllt wird.
- [`respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) {{Experimental_Inline}}
  - : Verhindert die standardmäßige Ereignisbehandlung und ermöglicht es Ihnen, selbst ein {{jsxref("Promise")}} für ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt bereitzustellen.

## Beispiele

Wenn die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) aufgerufen wird, wird im Service Worker der Zahlungs-App ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis ausgelöst. Der Service Worker der Zahlungs-App überwacht dieses Ereignis, um die nächste Phase des Zahlungsvorgangs einzuleiten.

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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App durch Aufrufen von [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) ein Fenster für den Zahlungs-Handler öffnen. In diesem Fenster wird Kunden eine Benutzeroberfläche der Zahlungs-App angezeigt, über die sie sich authentifizieren, eine Versandadresse und Versandoptionen auswählen und die Zahlung autorisieren können.

Nachdem die Zahlung abgewickelt wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Website des Händlers zurückzugeben.

Weitere Informationen zu dieser Phase finden Sie unter [Empfangen eines Zahlungsanfrage-Ereignisses vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
