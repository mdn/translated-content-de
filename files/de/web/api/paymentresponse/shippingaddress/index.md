---
title: "PaymentResponse: shippingAddress Eigenschaft"
short-title: shippingAddress
slug: Web/API/PaymentResponse/shippingAddress
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die schreibgeschützte **`shippingAddress`**-Eigenschaft der
`PaymentRequest`-Schnittstelle gibt ein [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Objekt zurück,
das die vom Benutzer angegebene Lieferadresse enthält.

## Wert

Ein [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Objekt, das Details zur
vom Benutzer angegebenen Lieferadresse bereitstellt.

## Beispiele

Im Allgemeinen wird die `shippingAddress`-Eigenschaft standardmäßig vom Benutzeragenten ausgefüllt.
Sie können dies auslösen, indem Sie
`options.requestShipping` auf `true` setzen, wenn Sie den
[`PaymentRequest`](/de/docs/Web/API/PaymentRequest/paymentRequest)-Konstruktor aufrufen.

Im untenstehenden Beispiel variieren die Versandkosten je nach geografischer Lage. Wenn das
[`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)-Ereignis
ausgelöst und empfangen wird, wird `updateDetails()` aufgerufen, um die Details des
`PaymentRequest` zu aktualisieren und dabei `shippingAddress` zu verwenden, um die korrekten
Versandkosten festzulegen.

```js
// Initialization of PaymentRequest arguments are excerpted for brevity.

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
    // Processing of paymentResponse excerpted for the same of brevity.
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
