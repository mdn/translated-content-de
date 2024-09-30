---
title: PaymentManager
slug: Web/API/PaymentManager
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PaymentManager`**-Interface der [Payment Handler API](/de/docs/Web/API/Payment_Handler_API) wird verwendet, um verschiedene Aspekte der Funktionalität von Zahlungs-Apps zu verwalten.

Es wird über die [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`userHint`](/de/docs/Web/API/PaymentManager/userHint) {{Experimental_Inline}}
  - : Bietet einen Hinweis für den Browser, der zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Payment Handler-Benutzeroberfläche angezeigt wird.

## Instanzmethoden

- [`enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) {{Experimental_Inline}}
  - : Überträgt die Verantwortung für das Bereitstellen verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App, anstatt sie vom Browser zu sammeln (z.B. über die automatische Vervollständigung).

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
