---
title: PaymentManager
slug: Web/API/PaymentManager
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{APIRef("Web-Based Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PaymentManager`**-Interface der [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API) wird verwendet, um verschiedene Aspekte der Funktionalität von Zahlungs-Apps zu verwalten.

Es wird über die [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`userHint`](/de/docs/Web/API/PaymentManager/userHint) {{Experimental_Inline}}
  - : Bietet einen Hinweis für den Browser, der zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Web-basierten Payment Handler-Oberfläche angezeigt wird.

## Instanzmethoden

- [`enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) {{Experimental_Inline}}
  - : Überträgt die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App, anstatt sie vom Browser (z. B. über Autofill) zu sammeln.

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

- [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API)
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
