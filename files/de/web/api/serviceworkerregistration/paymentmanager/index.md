---
title: "ServiceWorkerRegistration: paymentManager-Eigenschaft"
short-title: paymentManager
slug: Web/API/ServiceWorkerRegistration/paymentManager
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`paymentManager`**-Eigenschaft mit dem Schreibschutz der
[`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt die Instanz eines Zahlungsanwendungs-`PaymentManager` zurück, die zum Verwalten verschiedener Funktionen der Zahlungsanwendung verwendet wird.

## Wert

Ein Instanzobjekt von [`PaymentManager`](/de/docs/Web/API/PaymentManager).

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

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um einen Hinweis für den Browser bereitzustellen, der zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Benutzeroberfläche des Payment Handlers angezeigt wird.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App zu delegieren, anstatt sie innerhalb der Händler-Website zu sammeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Übersicht über webbasierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben eines Zahlungsvorgangs](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
