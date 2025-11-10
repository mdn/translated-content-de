---
title: "PaymentManager: userHint-Eigenschaft"
short-title: userHint
slug: Web/API/PaymentManager/userHint
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`userHint`**-Eigenschaft des [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Interfaces bietet einen Hinweis für den Browser, der zusammen mit dem Namen und Symbol der Zahlungs-App in der Benutzeroberfläche des Payment Handlers angezeigt wird.

## Wert

Ein String.

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
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
