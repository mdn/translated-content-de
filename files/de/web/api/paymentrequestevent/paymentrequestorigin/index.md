---
title: "PaymentRequestEvent: paymentRequestOrigin-Eigenschaft"
short-title: paymentRequestOrigin
slug: Web/API/PaymentRequestEvent/paymentRequestOrigin
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`paymentRequestOrigin`** der [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Schnittstelle gibt den Ursprung zurück, an dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.

## Wert

Ein String.

## Beispiele

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.paymentRequestOrigin);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
