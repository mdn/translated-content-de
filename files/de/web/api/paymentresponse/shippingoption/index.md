---
title: "PaymentResponse: shippingOption-Eigenschaft"
short-title: shippingOption
slug: Web/API/PaymentResponse/shippingOption
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte Eigenschaft **`shippingOption`** des `PaymentRequest`-Interface gibt das ID-Attribut der vom Benutzer ausgewählten Versandoption zurück. Diese Option ist nur vorhanden, wenn die `requestShipping`-Option im `options`-Objekt, das dem [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor übergeben wird, auf `true` gesetzt ist.

## Wert

Ein String.

## Beispiele

Im unten stehenden Beispiel wird das [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)-Ereignis aufgerufen. Es ruft `updateDetails()` auf, um die Versandmethode zwischen "standard" und "express" umzuschalten.

```js
// Initialization of PaymentRequest arguments are excerpted for brevity.
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
    // Processing of paymentResponse excerpted for the same of brevity.
  })
  .catch((err) => {
    console.error("Uh oh, something bad happened", err.message);
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
    reject(`Unknown shipping option '${shippingOption}'`);
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
