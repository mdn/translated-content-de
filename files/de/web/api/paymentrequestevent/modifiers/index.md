---
title: "PaymentRequestEvent: modifiers-Eigenschaft"
short-title: modifiers
slug: Web/API/PaymentRequestEvent/modifiers
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`modifiers`**-Eigenschaft der [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Schnittstelle gibt ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten zurück, die Modifikatoren für Zahlungsdetails enthalten.

## Wert

Ein Array von Objekten, die Modifikatoren für Zahlungsdetails enthalten. Diese Objekte enthalten die folgenden Eigenschaften:

- `supportedMethods`
  - : Ein Zahlungsidentifikationsverfahren. Die Mitglieder des Objekts gelten nur für die Zahlung, wenn der Benutzer diese Zahlungsmethode auswählt.
- `total`
  - : Ein `PaymentItem`-Objekt mit den folgenden Eigenschaften:
    - `label`
      - : Ein String, der eine für den Benutzer lesbare Beschreibung des Artikels enthält, die dem Benutzer angezeigt werden kann.
    - `amount`
      - : Ein `PaymentCurrencyAmount`-Objekt (siehe [`total` > Wert](/de/docs/Web/API/PaymentRequestEvent/total#value)).
    - `pending`
      - : Ein boolean. Wenn auf true gesetzt, bedeutet es, dass das `amount`-Element nicht final ist. Dies wird häufig verwendet, um Artikel anzuzeigen, wie Versand- oder Steuerbeträge, die von der Auswahl der Versandadresse oder Versandoption abhängen.
- `additionalDisplayItems`
  - : Ein Array von `PaymentItem`-Objekten, das zusätzliche Anzeigepositionen bereitstellt, die in den Zahlungsdetails enthalten sein sollen. Dieses Mitglied wird häufig verwendet, um eine Rabatt- oder Zuschlagsposten hinzuzufügen, die den Grund für den unterschiedlichen Gesamtbetrag für die ausgewählte Zahlungsmethode anzeigt, die der Benutzeragent gegebenenfalls anzeigen kann.
- `data`
  - : Ein Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Wenn bereitgestellt, wird es in JSON serialisiert.

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

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
