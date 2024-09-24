---
title: "ServiceWorkerRegistration: paymentManager Eigenschaft"
short-title: paymentManager
slug: Web/API/ServiceWorkerRegistration/paymentManager
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`paymentManager`**-Eigenschaft der {{domxref("ServiceWorkerRegistration")}}-Schnittstelle gibt eine Instanz des {{domxref("PaymentManager")}} eines Zahlungs-Apps zurück, die zur Verwaltung verschiedener Funktionen des Zahlungs-Apps verwendet wird.

## Wert

Eine Instanz eines {{domxref("PaymentManager")}}-Objekts.

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

- {{domxref("PaymentManager.userHint")}} wird verwendet, um dem Browser einen Hinweis anzuzeigen, zusammen mit dem Namen und dem Icon des Zahlungs-Apps in der Benutzeroberfläche des Payment Handlers.
- {{domxref("PaymentManager.enableDelegations()")}} wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an das Zahlungs-App zu delegieren, anstatt sie von der Händler-Website zu sammeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Payment Handler API", "", "", "nocode")}}
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Ein Zahlungsmittel einrichten](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
