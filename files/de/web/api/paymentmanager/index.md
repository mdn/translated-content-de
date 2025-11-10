---
title: PaymentManager
slug: Web/API/PaymentManager
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PaymentManager`**-Interface der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API) wird verwendet, um verschiedene Aspekte der Funktionalität von Zahlungs-Apps zu verwalten.

Es wird über die [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`userHint`](/de/docs/Web/API/PaymentManager/userHint) {{Experimental_Inline}}
  - : Bietet einen Hinweis für den Browser an, der zusammen mit dem Namen und Icon der Zahlungs-App in der Payment Handler-Benutzeroberfläche angezeigt wird.

## Instanzmethoden

- [`enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) {{Experimental_Inline}}
  - : Überträgt die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen auf die Zahlungs-App, anstatt sie vom Browser zu sammeln (zum Beispiel über die automatische Ausfüllfunktion).

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsabwicklungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
