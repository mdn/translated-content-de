---
title: "PaymentRequestEvent: openWindow() Methode"
short-title: openWindow()
slug: Web/API/PaymentRequestEvent/openWindow
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`openWindow()`**-Methode des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces öffnet die angegebene URL in einem neuen Fenster, jedoch nur, wenn die gegebene URL im gleichen Ursprung wie die aufrufende Seite liegt. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem Verweis auf einen [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Die URL, die im neuen Fenster geöffnet werden soll. Sie muss im gleichen Ursprung wie die aufrufende Seite liegen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Verweis auf einen
[`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

## Beispiele

```js
self.addEventListener("paymentrequest", async (e) => {
  // …
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
      throw new Error("Failed to open window");
    }
  } catch (err) {
    // Reject the promise on failure
    resolver.reject(err);
  }
});
```

Siehe [Öffnen des Zahlungsabwicklerfensters zur Anzeige der Web-basierten Zahlungs-App-Frontend](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window) für weitere Details zur Verwendung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
