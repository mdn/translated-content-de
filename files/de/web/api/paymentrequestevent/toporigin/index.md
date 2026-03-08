---
title: "PaymentRequestEvent: topOrigin-Eigenschaft"
short-title: topOrigin
slug: Web/API/PaymentRequestEvent/topOrigin
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{SeeCompatTable}}{{APIRef("Web-Based Payment Handler API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`topOrigin`** des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces gibt den Ursprung des obersten Zahlungsempfängers zurück, wo das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt initialisiert wurde.

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

- [Übersicht zu webbasierten Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
