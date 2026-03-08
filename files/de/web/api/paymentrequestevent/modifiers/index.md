---
title: "PaymentRequestEvent: modifiers-Eigenschaft"
short-title: modifiers
slug: Web/API/PaymentRequestEvent/modifiers
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{SeeCompatTable}}{{APIRef("Web-Based Payment Handler API")}}{{AvailableInWorkers("service")}}

Die **`modifiers`** schreibgeschützte Eigenschaft der
[`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Schnittstelle gibt ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten zurück, die Modifikatoren für Zahlungsdetails enthalten.

## Wert

Ein Array von Objekten, die Modifikatoren für Zahlungsdetails enthalten. Diese Objekte umfassen die folgenden Eigenschaften:

- `supportedMethods`
  - : Ein Zahlungsidentifikator. Die Mitglieder des Objekts gelten nur für die Zahlung, wenn der Benutzer diese Zahlungsmethode auswählt.
- `total`
  - : Ein `PaymentItem`-Objekt mit den folgenden Eigenschaften:
    - `label`
      - : Ein String mit einer menschenlesbaren Beschreibung des Elements, das dem Benutzer angezeigt werden kann.
    - `amount`
      - : Ein `PaymentCurrencyAmount`-Objekt (siehe [`total` > Wert](/de/docs/Web/API/PaymentRequestEvent/total#value)).
    - `pending`
      - : Ein Boolean. Wenn auf true gesetzt, bedeutet dies, dass der `amount`-Wert nicht endgültig ist. Dies wird häufig verwendet, um Elemente wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse oder -option abhängen.
- `additionalDisplayItems`
  - : Ein Array von `PaymentItem`-Objekten, die zusätzliche Anzeigeelemente bereitstellen, die in die Zahlungsdetails aufgenommen werden sollen. Dieses Element wird häufig verwendet, um eine Rabatt- oder Zuschlagszeile hinzuzufügen, die den Grund für den unterschiedlichen Gesamtbetrag für die ausgewählte Zahlungsmethode angibt, den der Benutzeragent ANZEIGEN KANN.
- `data`
  - : Ein Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten. Falls angegeben, wird es JSON-serialisiert.

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

- [Übersicht über webbasierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
