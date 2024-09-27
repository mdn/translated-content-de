---
title: "PaymentMethodChangeEvent: methodName-Eigenschaft"
short-title: methodName
slug: Web/API/PaymentMethodChangeEvent/methodName
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`methodName`**-Eigenschaft des [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)-Interfaces ist ein String, der den aktuell vom Benutzer ausgewählten Zahlungsanbieter eindeutig identifiziert. Der Zahlungsanbieter kann eine Zahlungstechnologie wie Apple Pay oder Android Pay sein, und jeder Zahlungsanbieter kann mehrere Zahlungsmethoden unterstützen; Änderungen an der Zahlungsmethode innerhalb des Zahlungsanbieters werden durch das `PaymentMethodChangeEvent` beschrieben.

## Wert

Ein String, der den aktuell ausgewählten Zahlungsanbieter eindeutig identifiziert. Dies kann ein String aus der Liste der standardisierten Zahlungsmethoden-Identifikatoren sein oder eine URL, die vom Zahlungsdienstleister verwendet wird. Weitere Informationen finden Sie unter [Payment method identifiers](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers).

Der Standardwert ist der leere String, `""`.

## Beispiele

Dieses Beispiel verwendet das [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)-Ereignis, um Änderungen an der für Apple Pay ausgewählten Zahlungsmethode zu überwachen, um einen Rabatt zu berechnen, falls der Benutzer sich entscheidet, eine Visa-Karte als Zahlungsmethode zu verwenden.

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

Beachten Sie, dass die `methodDetails`-Eigenschaft von der `calculateDiscount()`-Funktion verwendet wird, um einen Zahlungsrabatt zu berechnen, und dann [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) aufgerufen wird, um das Ereignis mit dem berechneten Update zu aktualisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
