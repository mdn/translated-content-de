---
title: "PaymentRequestEvent: methodData-Eigenschaft"
short-title: methodData
slug: Web/API/PaymentRequestEvent/methodData
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`methodData`**-Eigenschaft der {{domxref("PaymentRequestEvent")}}-Schnittstelle gibt ein Array von `PaymentMethodData`-Objekten zurück, das Zahlungsverkehrsmethoden-Identifikatoren für die von der Website akzeptierten Zahlungsmethoden sowie alle zugehörigen zahlungsmethoden-spezifischen Daten enthält.

## Wert

Ein Array von `PaymentMethodData`-Objekten. Jedes Objekt enthält die folgenden Eigenschaften:

- `supportedMethods`
  - : Ein Zahlungsverkehrsmethoden-Identifikator für eine Zahlungsmethode, die die Händler-Website akzeptiert.
- `data`
  - : Ein Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Falls angegeben, wird es als JSON-seriellisiert.

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

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Verlauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
