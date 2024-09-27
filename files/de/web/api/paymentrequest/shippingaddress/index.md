---
title: "PaymentRequest: shippingAddress-Eigenschaft"
short-title: shippingAddress
slug: Web/API/PaymentRequest/shippingAddress
l10n:
  sourceCommit: 0ee5b41dca22ac5c3cd7f2c6523f76125c2526e9
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

Die **`shippingAddress`** schreibgeschützte Eigenschaft des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Interfaces gibt die vom Benutzer angegebene Lieferadresse zurück. Standardmäßig ist sie `null`.

## Wert

## Beispiele

In der Regel wird der Benutzeragent den Wert der `shippingAddress`-Eigenschaft ausfüllen. Sie können dies auslösen, indem Sie `options.requestShipping` auf `true` setzen, wenn Sie den `PaymentRequest`-Konstruktor aufrufen.

Im folgenden Beispiel variiert die Versandkosten je nach Geographie. Wenn das [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) Ereignis aufgerufen wird, wird `updateDetails()` aufgerufen, um die Details des `PaymentRequest` zu aktualisieren, wobei `shippingAddress` verwendet wird, um die korrekten Versandkosten festzulegen.

```js
// Initialization of PaymentRequest arguments are excerpted for the sake of
//   brevity.
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
    // Processing of paymentResponse excerpted for brevity.
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
      shippingOption.label = "Free shipping in Missouri";
      details.total.amount.value = "55.00";
    } else {
      shippingOption.id = "us";
      shippingOption.label = "Standard shipping in US";
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
