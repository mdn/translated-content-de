---
title: "PaymentRequest: Eigenschaft shippingAddress"
short-title: shippingAddress
slug: Web/API/PaymentRequest/shippingAddress
l10n:
  sourceCommit: 0ee5b41dca22ac5c3cd7f2c6523f76125c2526e9
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

Die **`shippingAddress`** schreibgeschützte Eigenschaft des
{{domxref('PaymentRequest')}}-Interfaces gibt die vom Benutzer angegebene Lieferadresse zurück. Sie ist standardmäßig `null`.

## Wert

## Beispiele

Im Allgemeinen wird der Wert der Eigenschaft `shippingAddress` vom Benutzeragenten ausgefüllt.
Sie können dies auslösen, indem Sie
`options.requestShipping` auf `true` setzen, wenn Sie den
`PaymentRequest`-Konstruktor aufrufen.

Im untenstehenden Beispiel variieren die Versandkosten je nach geografischer Lage. Wenn das
{{domxref('PaymentRequest.shippingaddresschange_event', 'shippingaddresschange')}}-Ereignis
aufgerufen wird, wird `updateDetails()` aufgerufen, um die Details des
`PaymentRequest` zu aktualisieren, wobei `shippingAddress` verwendet wird, um die korrekten
Versandkosten festzulegen.

```js
// Die Initialisierung der PaymentRequest-Argumente ist der Kürze halber
//   ausgeschrieben.
const payment = new PaymentRequest(supportedInstruments, details, options);

payment.addEventListener("shippingaddresschange", (evt) => {
  evt.updateWith(
    new Promise((resolve) => {
      updateDetails(details, request.shippingAddress, resolve);
    }),
  );
});

payment
  .show()
  .then((paymentResponse) => {
    // Verarbeitung von paymentResponse ist der Kürze halber ausgeschrieben.
  })
  .catch((err) => {
    console.error("Uh oh, something bad happened", err.message);
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

## Browser-Kompatibilität

{{Compat}}
