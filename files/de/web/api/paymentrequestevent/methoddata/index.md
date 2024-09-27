---
title: "PaymentRequestEvent: methodData-Eigenschaft"
short-title: methodData
slug: Web/API/PaymentRequestEvent/methodData
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die **`methodData`** schreibgeschützte Eigenschaft des
[`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces gibt ein Array von
`PaymentMethodData`-Objekten zurück, das Bezahlmethoden-Identifikatoren für die
vom Händler akzeptierten Bezahlmethoden sowie alle damit verbundenen, zahlungsmethodenspezifischen
Daten enthält.

## Wert

Ein Array von `PaymentMethodData`-Objekten. Jedes Objekt enthält die folgenden Eigenschaften:

- `supportedMethods`
  - : Ein Bezahlmethoden-Identifikator für eine Bezahlmethode, die die Händler-Website akzeptiert.
- `data`
  - : Ein Objekt, das optionale Informationen bereitstellt, die von den unterstützten Bezahlmethoden benötigt werden könnten. Falls vorhanden, wird es JSON-serialisiert.

## Beispiele

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.methodData);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte für die Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
