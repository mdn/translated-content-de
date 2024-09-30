---
title: "PaymentMethodChangeEvent: methodDetails Eigenschaft"
short-title: methodDetails
slug: Web/API/PaymentMethodChangeEvent/methodDetails
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`methodDetails`**-Eigenschaft des [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)-Interfaces ist ein Objekt, das alle Daten enthält, die der Zahlungsdienstleister bereitstellen kann, um die Änderung zu beschreiben, die der Benutzer an seiner Zahlungsmethode vorgenommen hat. Der Wert ist `null`, wenn keine Details verfügbar sind.

## Wert

Ein Objekt, das alle Daten enthält, die zur Beschreibung der Änderungen an der Zahlungsmethode erforderlich sind. Der Inhalt variiert je nach der tatsächlich ausgewählten Zahlungsmethode, sodass Sie zunächst die [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName)-Eigenschaft zu Rate ziehen müssen, bevor Sie die `methodDetails` interpretieren.

Der Standardwert ist `null`, was bedeutet, dass keine zusätzlichen Details verfügbar sind.

## Beispiele

Dieses Beispiel verwendet das [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)-Ereignis, um Änderungen an der für Apple Pay ausgewählten Zahlungsmethode zu überwachen, um einen Rabatt zu berechnen, wenn der Benutzer sich entscheidet, eine Visa-Karte als Zahlungsmethode zu verwenden.

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

Beachten Sie, dass die `methodDetails`-Eigenschaft von der `calculateDiscount()`-Funktion verwendet wird, um einen Zahlungsrabatt zu berechnen. Anschließend wird [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) aufgerufen, um das Ereignis mit dem berechneten Update zu aktualisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
