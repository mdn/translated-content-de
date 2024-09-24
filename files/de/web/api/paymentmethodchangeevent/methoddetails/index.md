---
title: "PaymentMethodChangeEvent: Eigenschaft methodDetails"
short-title: methodDetails
slug: Web/API/PaymentMethodChangeEvent/methodDetails
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte Eigenschaft **`methodDetails`** der Schnittstelle {{domxref("PaymentMethodChangeEvent")}} ist ein Objekt, das alle Daten enthält, die der Zahlungsdienstleister möglicherweise bereitstellt, um die Änderung zu beschreiben, die der Benutzer an seiner Zahlungsmethode vorgenommen hat. Der Wert ist `null`, wenn keine Details verfügbar sind.

## Wert

Ein Objekt, das alle benötigten Daten zur Beschreibung der Änderungen an der Zahlungsmethode enthält. Der Inhalt variiert je nach gewählter Zahlungsmethode, daher müssen Sie zunächst auf die Eigenschaft {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} verweisen und anschließend die `methodDetails` interpretieren.

Der Standardwert ist `null`, was darauf hinweist, dass keine zusätzlichen Details verfügbar sind.

## Beispiele

Dieses Beispiel verwendet das {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} Ereignis, um Änderungen der für Apple Pay ausgewählten Zahlungsmethode zu überwachen, um einen Rabatt zu berechnen, wenn der Benutzer sich entscheidet, eine Visa-Karte als Zahlungsmethode zu verwenden.

```js
request.onpaymentmethodchange = (ev) => {
  const { type: cardType } = ev.methodDetails;
  const newStuff = {};
  if (ev.methodName === "https://apple.com/apple-pay") {
    switch (cardType) {
      case "visa": {
        // Spezifische Handhabung für Visa-Karten bei Apple Pay…
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

Beachten Sie, dass die Eigenschaft `methodDetails` von der Funktion `calculateDiscount()` verwendet wird, um etwaige Zahlungsrabatte zu berechnen, und dann {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} aufgerufen wird, um das Ereignis mit dem berechneten Update zu aktualisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
