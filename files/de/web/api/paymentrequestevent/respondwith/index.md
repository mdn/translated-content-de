---
title: "PaymentRequestEvent: respondWith()-Methode"
short-title: respondWith()
slug: Web/API/PaymentRequestEvent/respondWith
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`respondWith()`**-Methode des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces verhindert die standardmäßige Ereignisbehandlung und ermöglicht es Ihnen, selbst ein {{jsxref("Promise")}} für ein Zahlungshandler-Antwortobjekt bereitzustellen.

## Syntax

```js-nolint
respondWith(promise)
```

### Parameter

- `promise`
  - : Ein Zahlungshandler-Antwortobjekt oder ein {{jsxref('Promise')}}, das zu einem solchen aufgelöst wird. Dieses Objekt sollte die folgenden Eigenschaften enthalten:
    - `methodName`
      - : Der Zahlungsarten-Identifikator für die Zahlungsmethode, die der Benutzer ausgewählt hat, um die Transaktion zu erfüllen.
    - `details`
      - : Ein JSON-serialisierbares Objekt, das eine zahlungsspezifische Nachricht bereitstellt, die vom Händler verwendet wird, um die Transaktion zu verarbeiten und einen erfolgreichen Geldtransfer zu bestimmen. Siehe [8.1.2 `details`-Attribut](https://w3c.github.io/web-based-payment-handler/#details-attribute) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel stammt aus [Open the payment handler window to display the web-based payment app frontend](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window). Lesen Sie den Artikel, um den Kontext des Codes zu verstehen.

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
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
