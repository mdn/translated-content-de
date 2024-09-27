---
title: "PaymentRequestEvent: modifiers Eigenschaft"
short-title: modifiers
slug: Web/API/PaymentRequestEvent/modifiers
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die **`modifiers`** schreibgeschützte Eigenschaft des [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) Interfaces gibt ein {{jsxref("Array")}} von `PaymentDetailsModifier` Objekten zurück, die Modifikatoren für Zahlungsdetails enthalten.

## Wert

Ein Array von Objekten, das Modifikatoren für Zahlungsdetails enthält. Diese Objekte enthalten die folgenden Eigenschaften:

- `supportedMethods`
  - : Ein Bezeichner für die Zahlungsmethode. Die Mitglieder des Objekts gelten nur für die Zahlung, wenn der Nutzer diese Zahlungsmethode auswählt.
- `total`
  - : Ein `PaymentItem` Objekt, das die folgenden Eigenschaften enthält:
    - `label`
      - : Ein String, der eine menschenlesbare Beschreibung des Artikels enthält, die dem Nutzer angezeigt werden kann.
    - `amount`
      - : Ein `PaymentCurrencyAmount` Objekt (siehe [`total` > Value](/de/docs/Web/API/PaymentRequestEvent/total#value)).
    - `pending`
      - : Ein Boolean. Wenn auf true gesetzt, bedeutet dies, dass das `amount` Mitglied nicht endgültig ist. Dies wird häufig verwendet, um Positionen wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse oder Versandoption abhängen.
- `additionalDisplayItems`
  - : Ein Array von `PaymentItem` Objekten, das zusätzliche Display-Items bereitstellt, die in die Zahlungsdetails aufgenommen werden sollen. Dieses Mitglied wird häufig verwendet, um eine Rabatt- oder Zuschlagsposition hinzuzufügen, die den Grund für den unterschiedlichen Gesamtbetrag für die ausgewählte Zahlungsmethode angibt, den der User Agent anzeigen KANN.
- `data`
  - : Ein Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Falls bereitgestellt, wird es JSON-serialisiert.

## Beispiele

```js
self.addEventListener("paymentrequest", (e) => {
  console.log(e.modifiers);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick zu webbasierten Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
