---
title: "PaymentRequestEvent: openWindow() Methode"
short-title: openWindow()
slug: Web/API/PaymentRequestEvent/openWindow
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`openWindow()`**-Methode des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces öffnet die angegebene URL in einem neuen Fenster, nur wenn die angegebene URL denselben Ursprung wie die aufrufende Seite hat. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Referenz auf einen [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Die URL, die in einem neuen Fenster geöffnet werden soll. Sie muss denselben Ursprung haben wie die aufrufende Seite.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Referenz auf einen [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

## Beispiele

```js
…
self.addEventListener('paymentrequest', async e => {
…
  // Retain a promise for future resolution
  // Polyfill for PromiseResolver at link below.
  resolver = new PromiseResolver();

  // Pass a promise that resolves when payment is done.
  e.respondWith(resolver.promise);
  // Open the checkout page.
  try {
    // Open the window and preserve the client
    client = await e.openWindow(checkoutURL);
    if (!client) {
      // Reject if the window fails to open
      throw 'Failed to open window';
    }
  } catch (err) {
    // Reject the promise on failure
    resolver.reject(err);
  };
});
…
```

Siehe [Öffnen des Zahlungshandler-Fensters, um das webbasierte Payment-App-Frontend anzuzeigen](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window) für weitere Details zur Verwendung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Payment-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
