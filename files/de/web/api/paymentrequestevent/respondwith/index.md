---
title: "PaymentRequestEvent: respondWith() Methode"
short-title: respondWith()
slug: Web/API/PaymentRequestEvent/respondWith
l10n:
  sourceCommit: 08aa2f3647f18243f51a3e6544ebf8b8bc0274dc
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`respondWith()`** Methode der Schnittstelle [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) verhindert die Standard-Ereignisbehandlung und ermöglicht es Ihnen, selbst ein {{jsxref("Promise")}} für ein Zahlungshandler-Antwortobjekt bereitzustellen.

## Syntax

```js-nolint
respondWith(promise)
```

### Parameter

- `promise`
  - : Ein Zahlungshandler-Antwortobjekt oder ein {{jsxref('Promise')}} das zu einem solchen aufgelöst wird. Dieses Objekt sollte die folgenden Eigenschaften enthalten:
    - `methodName`
      - : Der Bezahlmethode-Identifikator für die vom Benutzer ausgewählte Zahlungsmethode zur Durchführung der Transaktion.
    - `details`
      - : Ein JSON-serialisierbares Objekt, das eine bezahlmethode-spezifische Nachricht bereitstellt, die vom Händler verwendet wird, um die Transaktion zu verarbeiten und einen erfolgreichen Geldtransfer zu bestimmen. Siehe [7.1.2 details attribute](https://w3c.github.io/payment-handler/#details-attribute) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel stammt aus [Öffnen Sie das Zahlungsabwicklerfenster, um die webbasierte Zahlungs-App-Frontend anzuzeigen](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window). Lesen Sie den Artikel, um den Kontext des Codes zu verstehen.

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
      throw "Failed to open window";
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
- [Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
