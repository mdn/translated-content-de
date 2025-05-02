---
title: "PaymentResponse: payerdetailchange-Ereignis"
short-title: payerdetailchange
slug: Web/API/PaymentResponse/payerdetailchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Ein **`payerdetailchange`**-Ereignis wird von der [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt ausgelöst, wenn der Benutzer seine persönlichen Informationen während des Ausfüllens eines Zahlungsanforderungsformulars ändert. Dies kann passieren, wenn der Zahler versucht, seine Angaben nach einem erkannten Fehler erneut abzusenden.

Der Ereignis-Handler für `payerdetailchange` sollte jeden Wert im Formular prüfen, der geändert wurde, und sicherstellen, dass die Werte gültig sind. Wenn einer ungültig ist, sollten geeignete Fehlermeldungen konfiguriert werden und die [`retry()`](/de/docs/Web/API/PaymentResponse/retry)-Methode sollte an der [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) aufgerufen werden, um den Benutzer zu bitten, die ungültigen Einträge zu aktualisieren.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("payerdetailchange", (event) => { })

onpayerdetailchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

Obwohl dieser Ereignistyp [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) ist, implementiert er keine Eigenschaften, die nicht bereits auf [`Event`](/de/docs/Web/API/Event) vorhanden sind.

## Beispiele

Im untenstehenden Beispiel wird `onpayerdetailchange` verwendet, um einen Listener für das `payerdetailchange`-Ereignis einzurichten, um die vom Benutzer eingegebenen Informationen zu validieren und gegebenenfalls die Korrektur von Fehlern anzufordern.

```js
// Options for PaymentRequest(), indicating that shipping address,
// payer email address, name, and phone number all be collected.

const options = {
  requestShipping: true,
  requestPayerEmail: true,
  requestPayerName: true,
  requestPayerPhone: true,
};
const request = new PaymentRequest(methods, details, options);
const response = request.show();

// Get the data from the response

let {
  payerName: oldPayerName,
  payerEmail: oldPayerEmail,
  payerPhone: oldPayerPhone,
} = response;

// Set up a handler for payerdetailchange events, to
// request corrections as needed.

response.onpayerdetailchange = async (ev) => {
  const promisesToValidate = [];
  const { payerName, payerEmail, payerPhone } = response;

  // Validate each value which changed by calling a function
  // that validates each type of data, returning a promise which
  // resolves if the data is valid.

  if (oldPayerName !== payerName) {
    promisesToValidate.push(validateName(payerName));
    oldPayerName = payerName;
  }
  if (oldPayerEmail !== payerEmail) {
    promisesToValidate.push(validateEmail(payerEmail));
    oldPayerEmail = payerEmail;
  }
  if (oldPayerPhone !== payerPhone) {
    promisesToValidate.push(validatePhone(payerPhone));
    oldPayerPhone = payerPhone;
  }

  // As each validation promise resolves, add the results of the
  // validation to the errors list

  const errors = await Promise.all(promisesToValidate).then((results) =>
    results.reduce((errors, result), Object.assign(errors, result)),
  );

  // If we found any errors, wait for them to be corrected

  if (Object.getOwnPropertyNames(errors).length) {
    await response.retry(errors);
  } else {
    // We have a good payment; send the data to the server
    await fetch("/pay-for-things/", { method: "POST", body: response.json() });
    response.complete("success");
  }
};

await response.retry({
  payer: {
    email: "invalid domain.",
    phone: "invalid number.",
  },
});
```

### addEventListener-Äquivalent

Sie können den Ereignis-Handler auch mit der Methode `addEventListener()` einrichten:

```js
response.addEventListener("payerdetailchange", async (ev) => {
  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)
