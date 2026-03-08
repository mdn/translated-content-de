---
title: "PaymentRequestEvent: methodData-Eigenschaft"
short-title: methodData
slug: Web/API/PaymentRequestEvent/methodData
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{SeeCompatTable}}{{APIRef("Web-Based Payment Handler API")}}{{AvailableInWorkers("service")}}

Die **`methodData`** schreibgeschützte Eigenschaft des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Interfaces gibt ein Array von `PaymentMethodData`-Objekten zurück, die Zahlungsverkehrsmethoden-Identifikatoren für die akzeptierten Zahlungsmethoden der Website und jegliche dazugehörigen zahlungsmethodenspezifischen Daten enthalten.

## Wert

Ein Array von `PaymentMethodData`-Objekten. Jedes Objekt enthält die folgenden Eigenschaften:

- `supportedMethods`
  - : Ein Zahlungsverkehrsmethoden-Identifikator für eine Zahlungsmethode, die die Händler-Website akzeptiert.
- `data`
  - : Ein Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Wenn bereitgestellt, wird es JSON-serialisiert.

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

- [Überblick über Web-basierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenslauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
