---
title: "PaymentRequestEvent: openWindow() Methode"
short-title: openWindow()
slug: Web/API/PaymentRequestEvent/openWindow
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`openWindow()`** Methode der [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Schnittstelle öffnet die angegebene URL in einem neuen Fenster, jedoch nur, wenn die angegebene URL den gleichen Ursprung wie die aufrufende Seite hat. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem Verweis auf ein [`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Die URL, die im neuen Fenster geöffnet werden soll. Sie muss den gleichen Ursprung wie die aufrufende Seite haben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Verweis auf ein
[`WindowClient`](/de/docs/Web/API/WindowClient) aufgelöst wird.

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

Siehe [Zahlungsabwickler-Fenster öffnen, um die webbasierte Zahlungs-App-Oberfläche anzuzeigen](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window) für weitere Details über die Nutzung.

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
