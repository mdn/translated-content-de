---
title: "PaymentRequestEvent: openWindow()-Methode"
short-title: openWindow()
slug: Web/API/PaymentRequestEvent/openWindow
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`openWindow()`**-Methode des {{domxref("PaymentRequestEvent")}}-Interfaces öffnet die angegebene URL in einem neuen Fenster, jedoch nur, wenn die angegebene URL den gleichen Ursprung wie die aufrufende Seite hat. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Referenz auf ein {{domxref("WindowClient")}} aufgelöst wird.

## Syntax

```js-nolint
openWindow(url)
```

### Parameter

- `url`
  - : Die URL, die im neuen Fenster geöffnet werden soll. Sie muss den gleichen Ursprung wie die aufrufende Seite haben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Referenz auf ein
{{domxref("WindowClient")}} aufgelöst wird.

## Beispiele

```js
…
self.addEventListener('paymentrequest', async e => {
…
  // Halten Sie ein Versprechen für eine zukünftige Auflösung bereit
  // Polyfill für PromiseResolver unter dem unten stehenden Link.
  resolver = new PromiseResolver();

  // Übergeben Sie ein Versprechen, das aufgelöst wird, wenn die Zahlung abgeschlossen ist.
  e.respondWith(resolver.promise);
  // Öffnen Sie die Checkout-Seite.
  try {
    // Öffnen Sie das Fenster und bewahren Sie den Client auf
    client = await e.openWindow(checkoutURL);
    if (!client) {
      // Ablehnen, wenn das Fenster nicht geöffnet werden kann
      throw 'Failed to open window';
    }
  } catch (err) {
    // Lehnen Sie das Versprechen im Falle eines Fehlers ab
    resolver.reject(err);
  };
});
…
```

Siehe [Öffnen des Payment Handler-Fensters zur Anzeige der webbasierten Zahlungs-App-Oberfläche](https://web.dev/articles/orchestrating-payment-transactions#open-payment-handler-window) für weitere Details, wie dies verwendet werden würde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
