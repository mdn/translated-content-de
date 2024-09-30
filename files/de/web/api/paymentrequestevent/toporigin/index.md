---
title: "PaymentRequestEvent: topOrigin-Eigenschaft"
short-title: topOrigin
slug: Web/API/PaymentRequestEvent/topOrigin
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`topOrigin`**-Eigenschaft der
[`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Schnittstelle gibt den Top-Level-Zahlungsempfänger-Ursprung zurück, an dem das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.

## Wert

Ein String.

## Beispiele

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.topOrigin);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
