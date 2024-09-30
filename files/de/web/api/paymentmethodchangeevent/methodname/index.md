---
title: "PaymentMethodChangeEvent: Eigenschaft methodName"
short-title: methodName
slug: Web/API/PaymentMethodChangeEvent/methodName
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`methodName`**-Eigenschaft der [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)-Schnittstelle ist ein String, der den vom Benutzer derzeit ausgewählten Zahlungshandler eindeutig identifiziert. Der Zahlungshandler kann eine Zahlungstechnologie wie Apple Pay oder Android Pay sein, und jeder Zahlungshandler kann mehrere Zahlungsmethoden unterstützen; Änderungen der Zahlungsmethode innerhalb des Zahlungshandlers werden durch das `PaymentMethodChangeEvent` beschrieben.

## Wert

Ein String, der den aktuell ausgewählten Zahlungshandler eindeutig identifiziert. Dies kann eine Auswahl aus der Liste standardisierter Zahlungsmethoden-Identifikatoren sein oder eine URL, die vom Zahlungsdienstleister verwendet wird. Weitere Informationen finden Sie unter [Zahlungsmethoden-Identifikatoren](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers).

Der Standardwert ist der leere String, `""`.

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

Beachten Sie, dass die `methodDetails`-Eigenschaft von der `calculateDiscount()`-Funktion genutzt wird, um eventuelle Zahlungsrabatte zu berechnen, und anschließend wird [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) aufgerufen, um das Ereignis mit dem berechneten Update zu aktualisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
