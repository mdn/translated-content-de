---
title: "PaymentRequestEvent: modifiers Eigenschaft"
short-title: modifiers
slug: Web/API/PaymentRequestEvent/modifiers
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{SeeCompatTable}}{{APIRef("Payment Handler API")}}{{AvailableInWorkers("service")}}

Die **`modifiers`** schreibgeschützte Eigenschaft der
{{domxref("PaymentRequestEvent")}}-Schnittstelle gibt ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten zurück, die Modifikatoren für Zahlungsdetails enthalten.

## Wert

Ein Array von Objekten, das Modifikatoren für Zahlungsdetails enthält. Diese Objekte enthalten die folgenden Eigenschaften:

- `supportedMethods`
  - : Ein Zahlungsidentifikator. Die Mitglieder des Objekts gelten nur für die Zahlung, wenn der Benutzer diese Zahlungsmethode auswählt.
- `total`
  - : Ein `PaymentItem`-Objekt, das die folgenden Eigenschaften enthält:
    - `label`
      - : Ein String, der eine lesbare Beschreibung des Artikels enthält, die dem Benutzer angezeigt werden kann.
    - `amount`
      - : Ein `PaymentCurrencyAmount`-Objekt (siehe [`total` > Wert](/de/docs/Web/API/PaymentRequestEvent/total#value)).
    - `pending`
      - : Ein boolescher Wert. Wenn dieser auf true gesetzt ist, bedeutet das, dass das `amount`-Mitglied nicht endgültig ist. Dies wird häufig verwendet, um Artikel wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse oder der Versandoption abhängen.
- `additionalDisplayItems`
  - : Ein Array von `PaymentItem`-Objekten, die zusätzliche Anzeigeelemente bereitstellen, die in die Zahlungsdetails aufgenommen werden sollen. Dieses Mitglied wird häufig verwendet, um einen Rabatt oder Zuschlagsposten hinzuzufügen, der den Grund für den abweichenden Gesamtbetrag für die ausgewählte Zahlungsmethode angibt, den der Benutzeragent anzeigen KANN.
- `data`
  - : Ein Objekt, das optionale Informationen bereitstellt, die möglicherweise von den unterstützten Zahlungsmethoden benötigt werden. Wenn übergeben, wird es JSON-serialisiert.

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

- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
