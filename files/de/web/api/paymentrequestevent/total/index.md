---
title: "PaymentRequestEvent: total-Eigenschaft"
short-title: total
slug: Web/API/PaymentRequestEvent/total
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{SeeCompatTable}}{{APIRef("Web-Based Payment Handler API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`total`**-Eigenschaft des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces gibt ein `PaymentCurrencyAmount`-Objekt zurück, das den insgesamt angeforderten Betrag für die Zahlung enthält.

## Wert

Ein `PaymentCurrencyAmount`-Objekt. Dieses Objekt enthält die folgenden Eigenschaften:

- `currency`
  - : Ein String, der einen dreibuchstabigen [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)-Standardwährungscode darstellt, der die Währung der Zahlung repräsentiert. Beispiele sind `USD`, `CAN` und `GBP`.
- `value`
  - : Ein String, der einen dezimalen Geldbetrag enthält, z. B. `2.55`.

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
- [Der Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
