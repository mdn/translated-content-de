---
title: "PaymentRequestEvent: total-Eigenschaft"
short-title: total
slug: Web/API/PaymentRequestEvent/total
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die **`total`** schreibgeschützte Eigenschaft des {{domxref("PaymentRequestEvent")}}-Interfaces gibt ein `PaymentCurrencyAmount`-Objekt zurück, das den insgesamt angeforderten Betrag für die Zahlung enthält.

## Wert

Ein `PaymentCurrencyAmount`-Objekt. Dieses Objekt enthält die folgenden Eigenschaften:

- `currency`
  - : Ein String, der einen drei Buchstaben umfassenden [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) Standard-Währungscode enthält, der die Währung der Zahlung repräsentiert. Beispiele sind `USD`, `CAN` und `GBP`.
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
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)