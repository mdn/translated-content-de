---
title: PaymentRequestEvent
slug: Web/API/PaymentRequestEvent
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Das **`PaymentRequestEvent`**-Interface der {{domxref("Payment Handler API", "", "", "nocode")}} ist das Objekt, das an einen Zahlungsanbieter übergeben wird, wenn eine {{domxref("PaymentRequest")}} angefordert wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PaymentRequestEvent.PaymentRequestEvent","PaymentRequestEvent()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `PaymentRequestEvent`-Objekts.

## Instanz-Eigenschaften

- {{domxref("PaymentRequestEvent.instrumentKey","instrumentKey")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}} {{experimental_inline}}
  - : Gibt ein Objekt zurück, das das vom Benutzer ausgewählte Zahlungsmittel widerspiegelt, oder einen leeren String, wenn der Benutzer kein Zahlungsmittel registriert oder ausgewählt hat.
- {{domxref("PaymentRequestEvent.methodData","methodData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, die die Zahlungsart-Identifikatoren für die Zahlungsarten enthalten, die die Website akzeptiert, und alle zugehörigen zahlungsspezifischen Daten.
- {{domxref("PaymentRequestEvent.modifiers","modifiers")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Objekten zurück, die Änderungen an den Zahlungsdetails enthalten.
- {{domxref("PaymentRequestEvent.paymentRequestId","paymentRequestId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ID des {{domxref("PaymentRequest")}}-Objekts zurück.
- {{domxref("PaymentRequestEvent.paymentRequestOrigin","paymentRequestOrigin")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Ursprung zurück, an dem das {{domxref("PaymentRequest")}}-Objekt initialisiert wurde.
- {{domxref("PaymentRequestEvent.topOrigin","topOrigin")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den obersten Ursprung zurück, an dem das {{domxref("PaymentRequest")}}-Objekt initialisiert wurde.
- {{domxref("PaymentRequestEvent.total","total")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Gesamtbetrag zurück, der zur Zahlung angefordert wird.

## Instanz-Methoden

- {{domxref("PaymentRequestEvent.changePaymentMethod","changePaymentMethod()")}} {{Experimental_Inline}}
  - : Erhält einen aktualisierten Gesamtbetrag unter Berücksichtigung der Zahlungsartdetails.
- {{domxref("PaymentRequestEvent.openWindow","openWindow()")}} {{Experimental_Inline}}
  - : Öffnet die angegebene URL in einem neuen Fenster, wenn und nur wenn die gegebene URL auf demselben Ursprung wie die aufrufende Seite ist. Gibt ein {{jsxref("Promise")}} zurück, das mit einer Referenz auf ein {{domxref("WindowClient")}} aufgelöst wird.
- {{domxref("PaymentRequestEvent.respondWith","respondWith()")}} {{Experimental_Inline}}
  - : Verhindert die Standard-Verarbeitung des Events und ermöglicht es Ihnen, selbst ein {{jsxref("Promise")}} für ein {{domxref("PaymentResponse")}}-Objekt bereitzustellen.

## Beispiele

Wenn die {{domxref("PaymentRequest.show()")}}-Methode aufgerufen wird, wird ein {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}}-Event im Servicearbeiter der Zahlungs-App ausgelöst. Dieses Event wird im Servicearbeiter der Zahlungs-App abgehört, um den nächsten Schritt im Zahlungsprozess zu beginnen.

```js
let payment_request_event;
let resolver;
let client;

// `self` ist das globale Objekt im Servicearbeiter
self.addEventListener("paymentrequest", async (e) => {
  if (payment_request_event) {
    // Wenn eine laufende Zahlungstransaktion vorhanden ist, lehnen Sie sie ab.
    resolver.reject();
  }
  // Das Event für zukünftige Nutzung bewahren
  payment_request_event = e;

  // ...
});
```

Wenn ein `paymentrequest`-Event empfangen wird, kann die Zahlungs-App ein Zahlungsfenster mit einem Aufruf von {{domxref("PaymentRequestEvent.openWindow()")}} öffnen. Das Zahlungsfenster zeigt den Kunden eine Schnittstelle der Zahlungs-App, in der sie sich authentifizieren, eine Versandadresse und -optionen auswählen und die Zahlung autorisieren können.

Wenn die Zahlung abgewickelt wurde, wird {{domxref("PaymentRequestEvent.respondWith()")}} verwendet, um das Zahlungsergebnis zurück zur Händler-Website zu übermitteln.

Weitere Details zu diesem Schritt finden Sie unter [Empfangen eines Zahlungsanforderungs-Events vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
