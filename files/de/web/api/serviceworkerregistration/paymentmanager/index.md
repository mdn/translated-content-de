---
title: "ServiceWorkerRegistration: paymentManager-Eigenschaft"
short-title: paymentManager
slug: Web/API/ServiceWorkerRegistration/paymentManager
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`paymentManager`**-Eigenschaft des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt die Instanz eines [`PaymentManager`](/de/docs/Web/API/PaymentManager) eines Zahlungs-Apps zurück. Diese wird verwendet, um verschiedene Funktionen der Zahlungs-App zu verwalten.

## Wert

Eine Instanz des [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Objekts.

## Beispiele

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // …
    });

  // …
});
```

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um einen Hinweis bereitzustellen, den der Browser zusammen mit dem Namen und dem Icon der Zahlungs-App in der Benutzeroberfläche des Zahlungsabwicklers anzeigt.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App zu delegieren, anstatt sie innerhalb der Händler-Website zu sammeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungsvorgangs](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
