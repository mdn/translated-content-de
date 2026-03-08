---
title: "PaymentRequestEvent: respondWith() Methode"
short-title: respondWith()
slug: Web/API/PaymentRequestEvent/respondWith
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`respondWith()`** Methode des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) Interfaces verhindert die Standard-Ereignisverarbeitung und ermöglicht es Ihnen, selbst ein {{jsxref("Promise")}} für ein Antwortobjekt des Zahlungshandlers bereitzustellen.

## Syntax

```js-nolint
respondWith(promise)
```

### Parameter

- `promise`
  - : Ein Antwortobjekt des Zahlungshandlers oder ein {{jsxref('Promise')}}, das zu einem solchen aufgelöst wird. Dieses Objekt sollte die folgenden Eigenschaften enthalten:
    - `methodName`
      - : Der Bezahlmethoden-Identifikator für die Zahlungsmethode, die der Benutzer ausgewählt hat, um die Transaktion zu erfüllen.
    - `details`
      - : Ein JSON-serialisierbares Objekt, das eine zahlungsmethoden-spezifische Nachricht enthält, die vom Händler zur Verarbeitung der Transaktion und zur Bestimmung eines erfolgreichen Geldtransfers verwendet wird. Siehe [8.1.2 `details` Attribut](https://w3c.github.io/web-based-payment-handler/#details-attribute) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das untenstehende Beispiel ist [Öffnen Sie das Zahlungsfenster, um die Web-basierte Zahlungs-App-Frontend anzuzeigen](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window) entnommen. Lesen Sie den Artikel, um den Kontext des Codes zu verstehen.

```js
self.addEventListener("paymentrequest", async (e) => {
  // Retain a promise for future resolution
  resolver = new PromiseResolver();

  // Pass a promise that resolves when payment is done.
  e.respondWith(resolver.promise);
  // Open the checkout page.
  try {
    // Open the window and preserve the client
    client = await e.openWindow(checkoutURL);
    if (!client) {
      // Reject if the window fails to open
      throw new Error("Failed to open window");
    }
  } catch (err) {
    // Reject the promise on failure
    resolver.reject(err);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über Web-basierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungs-Konzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
