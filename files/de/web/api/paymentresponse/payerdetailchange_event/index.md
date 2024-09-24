---
title: "PaymentResponse: payerdetailchange Ereignis"
short-title: payerdetailchange
slug: Web/API/PaymentResponse/payerdetailchange_event
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Ein **`payerdetailchange`** Ereignis wird durch die [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein {{domxref("PaymentResponse")}}-Objekt ausgelöst, wenn der Benutzer seine persönlichen Informationen während des Ausfüllens eines Zahlungsanforderungsformulars ändert. Dies kann passieren, wenn der Zahler versucht, seine Details erneut einzureichen, nachdem ein Fehler festgestellt wurde.

Der Ereignis-Handler für `payerdetailchange` sollte jede geänderte Eingabe im Formular überprüfen und sicherstellen, dass die Werte gültig sind. Wenn einige ungültig sind, sollten geeignete Fehlermeldungen konfiguriert werden und die Methode {{domxref("PaymentResponse.retry", "retry()")}} sollte auf dem {{domxref("PaymentResponse")}} aufgerufen werden, um den Benutzer aufzufordern, die ungültigen Eingaben zu aktualisieren.

Dieses Ereignis kann nicht abgebrochen werden und verbreitet sich nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("payerdetailchange", async (event) => {});

onpayerdetailchange = async (event) => {};
```

## Ereignistyp

Ein {{domxref("PaymentRequestUpdateEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

Obwohl es sich bei diesem Ereignistyp um ein {{domxref("PaymentRequestUpdateEvent")}} handelt, implementiert es keine Eigenschaften, die nicht bereits auf {{domxref("Event")}} vorhanden sind.

## Beispiele

Im untenstehenden Beispiel wird `onpayerdetailchange` verwendet, um einen Listener für das `payerdetailchange`-Ereignis einzurichten, um die vom Benutzer eingegebenen Informationen zu validieren und eventuell gemachte Fehler zu korrigieren.

```js
// Optionen für PaymentRequest(), die angeben, dass die Versandadresse,
// die E-Mail-Adresse des Zahlers, der Name und die Telefonnummer erfasst werden sollen.

const options = {
  requestShipping: true,
  requestPayerEmail: true,
  requestPayerName: true,
  requestPayerPhone: true,
};
const request = new PaymentRequest(methods, details, options);
const response = request.show();

// Die Daten aus der Antwort abrufen

let {
  payerName: oldPayerName,
  payerEmail: oldPayerEmail,
  payerPhone: oldPayerPhone,
} = response;

// Einen Handler für payerdetailchange-Ereignisse einrichten,
// um bei Bedarf Korrekturen anzufordern.

response.onpayerdetailchange = async (ev) => {
  const promisesToValidate = [];
  const { payerName, payerEmail, payerPhone } = response;

  // Jede geänderte Eingabe validieren, indem eine Funktion aufgerufen wird,
  // die jeden Datentyp validiert und ein Promise zurückgibt, das aufgelöst wird, wenn die Daten gültig sind.

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

  // Sobald jedes Validierungs-Promise aufgelöst ist, die Ergebnisse zur
  // Fehlerliste hinzufügen

  const errors = await Promise.all(promisesToValidate).then((results) =>
    results.reduce((errors, result), Object.assign(errors, result)),
  );

  // Wenn wir Fehler gefunden haben, warten, bis sie korrigiert sind

  if (Object.getOwnPropertyNames(errors).length) {
    await response.retry(errors);
  } else {
    // Wir haben eine gültige Zahlung; die Daten an den Server senden
    await fetch("/pay-for-things/", { method: "POST", body: response.json() });
    response.complete("success");
  }
};

await response.retry({
  payer: {
    email: "ungültige Domain.",
    phone: "ungültige Nummer.",
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
- {{domxref("PaymentResponse")}}
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)
