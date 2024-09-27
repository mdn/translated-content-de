---
title: "PaymentManager: userHint-Eigenschaft"
short-title: userHint
slug: Web/API/PaymentManager/userHint
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`userHint`**-Eigenschaft der [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Schnittstelle bietet einen Hinweis für den Browser, der zusammen mit dem Namen und Icon der Zahlungs-App in der Payment Handler-Benutzeroberfläche angezeigt wird.

## Wert

Ein String.

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
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
