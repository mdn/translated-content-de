---
title: "PaymentResponse: payerdetailchange-Ereignis"
short-title: payerdetailchange
slug: Web/API/PaymentResponse/payerdetailchange_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Ein **`payerdetailchange`**-Ereignis wird von der [Payment Request API](/de/docs/Web/API/Payment_Request_API) für ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt ausgelöst, wenn der Benutzer beim Ausfüllen eines Zahlungsformulars seine persönlichen Angaben ändert. Dies kann geschehen, wenn der Zahlende nach einem festgestellten Fehler erneut versucht, seine Angaben zu übermitteln.

Der Ereignishandler für `payerdetailchange` sollte jeden geänderten Wert im Formular prüfen und sicherstellen, dass die Werte gültig sind. Wenn Werte ungültig sind, sollten entsprechende Fehlermeldungen festgelegt und die Methode [`retry()`](/de/docs/Web/API/PaymentResponse/retry) für das [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt aufgerufen werden, um den Benutzer zur Korrektur der ungültigen Einträge aufzufordern.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht in der Ereigniskette nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("payerdetailchange", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpayerdetailchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Beispiele

Im folgenden Beispiel wird mit `onpayerdetailchange` ein Listener für das `payerdetailchange`-Ereignis eingerichtet, um die vom Benutzer eingegebenen Informationen zu prüfen und die Korrektur etwaiger Fehler anzufordern. Beachten Sie, dass dadurch gegebenenfalls andere mit `onpayerdetailchange` hinzugefügte Ereignis-Listener ersetzt werden.

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
    results.reduce((errors, result) => Object.assign(errors, result)),
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

### Verwendung von addEventListener()

Sie können den Ereignishandler auch mit der Methode `addEventListener()` einrichten:

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
