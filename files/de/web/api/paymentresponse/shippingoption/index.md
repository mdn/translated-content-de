---
title: "PaymentResponse: Versand-Optionseigenschaft"
short-title: Versandoption
slug: Web/API/PaymentResponse/shippingOption
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`shippingOption`**-Eigenschaft des `PaymentRequest`-Interfaces gibt das ID-Attribut der vom Benutzer ausgewählten Versandoption zurück. Diese Option ist nur vorhanden, wenn die `requestShipping`-Option auf `true` im `options`-Objekt gesetzt ist, das dem {{domxref('PaymentRequest.PaymentRequest','PaymentRequest')}}-Konstruktor übergeben wird.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel wird das {{domxref('PaymentRequest.shippingoptionchange_event', 'shippingoptionchange')}}-Ereignis aufgerufen. Es ruft `updateDetails()` auf, um die Versandmethode zwischen "standard" und "express" umzuschalten.

```js
// Die Initialisierung der PaymentRequest-Argumente wird der Kürze halber weggelassen.
const payment = new PaymentRequest(supportedInstruments, details, options);

request.addEventListener("shippingoptionchange", (evt) => {
  evt.updateWith(
    new Promise((resolve, reject) => {
      updateDetails(details, request.shippingOption, resolve, reject);
    }),
  );
});

payment
  .show()
  .then((paymentResponse) => {
    // Die Verarbeitung von paymentResponse wird der Kürze halber weggelassen.
  })
  .catch((err) => {
    console.error("Oh nein, etwas Schlechtes ist passiert", err.message);
  });

function updateDetails(details, shippingOption, resolve, reject) {
  let selectedShippingOption;
  let otherShippingOption;
  if (shippingOption === "standard") {
    selectedShippingOption = details.shippingOptions[0];
    otherShippingOption = details.shippingOptions[1];
    details.total.amount.value = "55.00";
  } else if (shippingOption === "express") {
    selectedShippingOption = details.shippingOptions[1];
    otherShippingOption = details.shippingOptions[0];
    details.total.amount.value = "67.00";
  } else {
    reject(`Unbekannte Versandoption '${shippingOption}'`);
    return;
  }
  selectedShippingOption.selected = true;
  otherShippingOption.selected = false;
  details.displayItems.splice(2, 1, selectedShippingOption);
  resolve(details);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
