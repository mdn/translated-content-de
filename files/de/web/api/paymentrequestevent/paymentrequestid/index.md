---
title: "PaymentRequestEvent: paymentRequestId-Eigenschaft"
short-title: paymentRequestId
slug: Web/API/PaymentRequestEvent/paymentRequestId
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`paymentRequestId`**-Eigenschaft des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces gibt die ID des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts zurück.

## Wert

Ein String, der die ID enthält.

## Beispiele

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.paymentRequestId);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
