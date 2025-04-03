---
title: "PaymentRequestEvent: total-Eigenschaft"
short-title: total
slug: Web/API/PaymentRequestEvent/total
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die **`total`** schreibgeschützte Eigenschaft des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces gibt ein `PaymentCurrencyAmount`-Objekt zurück, das den Gesamtbetrag enthält, der zur Zahlung angefordert wird.

## Wert

Ein `PaymentCurrencyAmount`-Objekt. Dieses Objekt enthält die folgenden Eigenschaften:

- `currency`
  - : Ein String, der einen dreistelligen [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)-Standardwährungscode enthält, der die Währung der Zahlung darstellt. Beispiele sind `USD`, `CAN` und `GBP`.
- `value`
  - : Ein String, der einen dezimalen Geldwert enthält, z. B. `2.55`.

## Beispiele

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.total);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
