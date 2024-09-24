---
title: "PaymentMethodChangeEvent: Eigenschaft methodName"
short-title: methodName
slug: Web/API/PaymentMethodChangeEvent/methodName
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`methodName`**-Eigenschaft der {{domxref("PaymentMethodChangeEvent")}}-Schnittstelle ist ein Zeichenfolge, die den aktuell vom Benutzer ausgewählten Zahlungsdienstanbieter eindeutig identifiziert. Der Zahlungsdienstanbieter kann eine Zahlungstechnologie wie Apple Pay oder Android Pay sein, und jeder Zahlungsdienstanbieter kann mehrere Zahlungsmethoden unterstützen; Änderungen der Zahlungsmethode innerhalb des Zahlungsdienstanbieters werden durch das `PaymentMethodChangeEvent` beschrieben.

## Wert

Eine Zeichenfolge, die den aktuell ausgewählten Zahlungsdienstanbieter eindeutig identifiziert. Dies kann eine Zeichenfolge aus der Liste der standardisierten Zahlungsmethoden-Identifikatoren sein oder eine URL, die vom Zahlungsbearbeitungsdienst verwendet wird. Weitere Informationen finden Sie unter [Payment method identifiers](/de/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers).

Der Standardwert ist die leere Zeichenfolge, `""`.

## Beispiele

Dieses Beispiel verwendet das {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}}-Ereignis, um Änderungen der für Apple Pay ausgewählten Zahlungsmethode zu überwachen, um einen Rabatt zu berechnen, wenn der Benutzer sich entscheidet, eine Visa-Karte als Zahlungsmethode zu verwenden.

```js
request.onpaymentmethodchange = (ev) => {
  const { type: cardType } = ev.methodDetails;
  const newStuff = {};
  if (ev.methodName === "https://apple.com/apple-pay") {
    switch (cardType) {
      case "visa": {
        // spezifische Handhabung für Visa-Karten bei Apple Pay…
        // methodDetails enthält die Karteninformationen
        const discount = calculateDiscount(ev.methodDetails);
        Object.assign(newStuff, discount);
        break;
      }
    }
  }
  // schließlich…
  ev.updateWith(newStuff);
};
const response = await request.show();
```

Beachten Sie, dass die `methodDetails`-Eigenschaft von der `calculateDiscount()`-Funktion verwendet wird, um etwaige Zahlungsrabatte zu berechnen. Danach wird {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} aufgerufen, um das Ereignis mit dem berechneten Update zu aktualisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
