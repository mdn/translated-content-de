---
title: "PaymentRequestEvent: respondWith() Methode"
short-title: respondWith()
slug: Web/API/PaymentRequestEvent/respondWith
l10n:
  sourceCommit: 08aa2f3647f18243f51a3e6544ebf8b8bc0274dc
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`respondWith()`**-Methode der {{domxref("PaymentRequestEvent")}}-Schnittstelle verhindert die standardmäßige Ereignisbehandlung und ermöglicht es Ihnen, selbst ein {{jsxref("Promise")}} für ein Zahlungsabwickler-Antwortobjekt bereitzustellen.

## Syntax

```js-nolint
respondWith(promise)
```

### Parameter

- `promise`
  - : Ein Zahlungsabwickler-Antwortobjekt oder ein {{jsxref('Promise')}}, das zu einem solchen aufgelöst wird. Dieses Objekt sollte die folgenden Eigenschaften enthalten:
    - `methodName`
      - : Der Zahlungsverkehrskennzeichen für die vom Benutzer ausgewählte Zahlungsmethode, um die Transaktion durchzuführen.
    - `details`
      - : Ein JSON-serialisierbares Objekt, das eine zahlungsspezifische Nachricht bereitstellt, die vom Händler verwendet wird, um die Transaktion zu verarbeiten und einen erfolgreichen Geldtransfer zu bestimmen. Siehe [7.1.2 Details-Attribut](https://w3c.github.io/payment-handler/#details-attribute) für mehr Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das untenstehende Beispiel ist von [Öffnen des Zahlungsabwicklerfensters zur Anzeige des webbasierten Zahlungssystem-Frontends](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window) entnommen. Lesen Sie den Artikel, um den Kontext des Codes zu verstehen.

```js
self.addEventListener("paymentrequest", async (e) => {
  // Beibehaltung eines Versprechens für zukünftige Auflösungen
  resolver = new PromiseResolver();

  // Übergebe ein Versprechen, das aufgelöst wird, wenn die Zahlung abgeschlossen ist.
  e.respondWith(resolver.promise);
  // Öffne die Checkout-Seite.
  try {
    // Öffne das Fenster und bewahre den Client auf
    client = await e.openWindow(checkoutURL);
    if (!client) {
      // Ablehnung, wenn das Fenster nicht geöffnet werden kann
      throw "Failed to open window";
    }
  } catch (err) {
    // Ablehnung des Versprechens im Falle eines Fehlers
    resolver.reject(err);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Zahlungssysteme](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzept der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
