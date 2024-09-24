---
title: "PaymentResponse: Eigenschaft shippingAddress"
short-title: shippingAddress
slug: Web/API/PaymentResponse/shippingAddress
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`shippingAddress`**-Eigenschaft des `PaymentRequest`-Interfaces gibt ein {{domxref('PaymentAddress')}}-Objekt zurück, das die vom Benutzer angegebene Lieferadresse enthält.

## Wert

Ein {{domxref("PaymentAddress")}}-Objekt, das Details zur vom Benutzer angegebenen Lieferadresse bietet.

## Beispiele

Normalerweise füllt der User Agent die `shippingAddress`-Eigenschaft für Sie aus. Sie können dies auslösen, indem Sie `options.requestShipping` auf `true` setzen, wenn Sie den {{domxref('PaymentRequest.paymentRequest','PaymentRequest')}}-Konstruktor aufrufen.

Im untenstehenden Beispiel variieren die Versandkosten je nach geografischem Standort. Wenn das {{domxref('PaymentRequest.shippingaddresschange_event', 'shippingaddresschange')}}-Ereignis ausgelöst und erfasst wird, wird `updateDetails()` aufgerufen, um die Details des `PaymentRequest` zu aktualisieren und mithilfe von `shippingAddress` die korrekten Versandkosten festzulegen.

```js
// Die Initialisierung der PaymentRequest-Argumente wurde der Kürze halber weggelassen.

const payment = new PaymentRequest(supportedInstruments, details, options);

request.addEventListener("shippingaddresschange", (evt) => {
  evt.updateWith(
    new Promise((resolve) => {
      updateDetails(details, request.shippingAddress, resolve);
    }),
  );
});

payment
  .show()
  .then((paymentResponse) => {
    // Verarbeitung von paymentResponse wurde der Kürze halber weggelassen.
  })
  .catch((err) => {
    console.error("Oh je, etwas Schlimmes ist passiert", err.message);
  });

function updateDetails(details, shippingAddress, resolve) {
  if (shippingAddress.country === "US") {
    const shippingOption = {
      id: "",
      label: "",
      amount: { currency: "USD", value: "0.00" },
      selected: true,
    };
    if (shippingAddress.region === "MO") {
      shippingOption.id = "mo";
      shippingOption.label = "Kostenloser Versand in Missouri";
      details.total.amount.value = "55.00";
    } else {
      shippingOption.id = "us";
      shippingOption.label = "Standardversand in den USA";
      shippingOption.amount.value = "5.00";
      details.total.amount.value = "60.00";
    }
    details.displayItems.splice(2, 1, shippingOption);
    details.shippingOptions = [shippingOption];
  } else {
    delete details.shippingOptions;
  }
  resolve(details);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
