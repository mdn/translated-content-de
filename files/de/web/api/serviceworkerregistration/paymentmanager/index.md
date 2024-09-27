---
title: "ServiceWorkerRegistration: paymentManager-Eigenschaft"
short-title: paymentManager
slug: Web/API/ServiceWorkerRegistration/paymentManager
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`paymentManager`**-Schreibgeschützte Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt die Instanz eines Zahlungsanwendungs-`PaymentManager` zurück, welche zur Verwaltung verschiedener Funktionen der Zahlungsanwendung verwendet wird.

## Wert

Eine Instanz des [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Objekts.

## Beispiele

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // ...
    });

  // ...
});
```

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um dem Browser einen Hinweis anzuzeigen, der zusammen mit dem Namen und dem Symbol der Zahlungsanwendung in der Payment Handler-Benutzeroberfläche angezeigt wird.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für das Bereitstellen verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungsanwendung zu delegieren, anstatt sie innerhalb der Händler-Website zu sammeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
