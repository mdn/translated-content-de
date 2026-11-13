---
title: "PaymentRequestEvent: Methode respondWith()"
short-title: respondWith()
slug: Web/API/PaymentRequestEvent/respondWith
l10n:
  sourceCommit: fe63d654201609c9fcbec752284da5bffa40e1b4
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die Methode **`respondWith()`** der Schnittstelle [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) verhindert die standardmäßige Behandlung des Ereignisses und ermöglicht es Ihnen, selbst eine {{jsxref("Promise")}} für ein Antwortobjekt des Payment Handlers bereitzustellen.

## Syntax

```js-nolint
respondWith(promise)
```

### Parameter

- `promise`
  - : Ein Antwortobjekt des Payment Handlers oder eine {{jsxref('Promise')}}, die zu einem solchen Objekt aufgelöst wird. Das Objekt sollte die folgenden Eigenschaften enthalten:
    - `methodName`
      - : Die Kennung der Zahlungsmethode, die der Benutzer zum Abschluss der Transaktion ausgewählt hat.
    - `details`
      - : Ein JSON-serialisierbares Objekt mit einer zahlungsmethodenspezifischen Nachricht, anhand derer der Händler die Transaktion verarbeitet und feststellt, ob die Geldübertragung erfolgreich war. Weitere Informationen finden Sie unter [8.1.2 Attribut `details`](https://w3c.github.io/web-based-payment-handler/#details-attribute).

    Die `promise` kann mit den folgenden Werten zurückgewiesen werden, um einen Fehler der Zahlungs-App anzuzeigen:

    - `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
      - : Zeigt an, dass der Benutzer die Zahlungsanfrage abgebrochen hat.
    - `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
      - : Zeigt einen internen Fehler in der App an, die die Zahlung verarbeitet.

    Wird die `promise` mit einem anderen Wert zurückgewiesen, wird dieser `AbortError` zugeordnet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel stammt aus [Öffnen des Payment-Handler-Fensters zur Anzeige der Benutzeroberfläche der webbasierten Zahlungs-App](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window). Lesen Sie den Artikel, um den Kontext des Codes zu verstehen.

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

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
