---
title: PaymentManager
slug: Web/API/PaymentManager
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PaymentManager`**-Interface der {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}} wird verwendet, um verschiedene Aspekte der Funktionalität von Zahlungs-Apps zu verwalten.

Es wird über die {{domxref("ServiceWorkerRegistration.paymentManager")}}-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("PaymentManager.userHint", "userHint")}} {{Experimental_Inline}}
  - : Bietet einen Hinweis, den der Browser zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Payment Handler-Benutzeroberfläche anzeigt.

## Instanzmethoden

- {{domxref("PaymentManager.enableDelegations", "enableDelegations()")}} {{Experimental_Inline}}
  - : Überträgt die Verantwortung zur Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen auf die Zahlungs-App, anstatt sie aus dem Browser zu sammeln (zum Beispiel über Autofill).

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

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Eine Zahlungsmethode einrichten](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
