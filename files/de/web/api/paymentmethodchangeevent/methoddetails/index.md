---
title: "PaymentMethodChangeEvent: methodDetails-Eigenschaft"
short-title: methodDetails
slug: Web/API/PaymentMethodChangeEvent/methodDetails
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`methodDetails`**-Eigenschaft der [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)-Schnittstelle ist ein Objekt, das Daten enthält, die der Zahlungsdienstleister bereitstellen kann, um die Änderung zu beschreiben, die der Benutzer an seiner Zahlungsmethode vorgenommen hat. Der Wert ist `null`, wenn keine Details verfügbar sind.

## Wert

Ein Objekt, das Daten enthält, die zur Beschreibung der Änderungen an der Zahlungsmethode benötigt werden. Der Inhalt variiert je nach der tatsächlich gewählten Zahlungsmethode, daher müssen Sie zuerst die [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName)-Eigenschaft prüfen und dann die `methodDetails` interpretieren.

Der Standardwert ist `null`, was anzeigt, dass keine zusätzlichen Details verfügbar sind.

## Beispiele

In diesem Beispiel wird das [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)-Ereignis verwendet, um Änderungen an der für Apple Pay ausgewählten Zahlungsmethode zu überwachen, um einen Rabatt zu berechnen, falls der Benutzer eine Visa-Karte als Zahlungsmethode wählt.

```js
request.onpaymentmethodchange = (ev) => {
  const { type: cardType } = ev.methodDetails;
  const newStuff = {};
  if (ev.methodName === "https://apple.com/apple-pay") {
    switch (cardType) {
      case "visa": {
        // do Apple Pay specific handling for Visa card…
        // methodDetails contains the card information
        const discount = calculateDiscount(ev.methodDetails);
        Object.assign(newStuff, discount);
        break;
      }
    }
  }
  // finally…
  ev.updateWith(newStuff);
};
const response = await request.show();
```

Beachten Sie, dass die `methodDetails`-Eigenschaft von der `calculateDiscount()`-Funktion zur Berechnung eines Zahlungsrabattes verwendet wird, und dann wird [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) aufgerufen, um das Ereignis mit dem berechneten Update zu aktualisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
