---
title: "PaymentResponse: retry()-Methode"
short-title: retry()
slug: Web/API/PaymentResponse/retry
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`retry()`**-Methode des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Interfaces ermöglicht es, den Benutzer zu bitten, eine Zahlung nach Auftreten eines Fehlers während der Verarbeitung erneut zu versuchen.

Damit kann Ihre Anwendung auf elegante Weise mit Situationen wie ungültigen Versandadressen oder abgelehnten Kreditkarten umgehen.

## Syntax

```js-nolint
retry(errorFields)
```

### Parameter

- `errorFields`

  - : Ein Objekt mit den folgenden Eigenschaften:
    - `error` {{optional_inline}}
      - : Eine allgemeine Beschreibung eines Zahlungsfehlers, von dem sich der Benutzer möglicherweise erholen kann, indem er die Zahlung erneut versucht, eventuell nachdem Fehler in den Zahlungsinformationen korrigiert wurden. `error` kann allein bereitgestellt werden, um nur eine allgemeine Fehlermeldung bereitzustellen, oder in Kombination mit den anderen Eigenschaften, um als Überblick zu dienen, während die Werte der anderen Eigenschaften den Benutzer auf Fehler in bestimmten Feldern des Zahlungsformulars hinweisen.
    - `paymentMethod {{optional_inline}}
      - : Alle zahlungsmethodenspezifischen Fehler, die möglicherweise aufgetreten sind. Der Inhalt dieses Objekts variiert je nach verwendeter Zahlungsmethode.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Zahlung erfolgreich abgeschlossen ist. Das Versprechen wird mit einem entsprechenden Ausnahmewert abgelehnt, wenn die Zahlung erneut fehlschlägt.

Normalerweise verwenden Sie dies, indem Sie [`show()`](/de/docs/Web/API/PaymentRequest/show) aufrufen, dann eine Schleife oder rekursive Funktion eingeben, die die [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) auf Fehler oder andere Gründe überprüft, den Zahlungsantrag erneut zu versuchen.
Wenn ein erneuter Versuch erforderlich ist, ruft die Schleife `retry()` auf, und kehrt dann zur Überprüfung der Antwort zurück, sobald sie eintrifft. Die Schleife endet nur, wenn der Benutzer entweder den Zahlungsantrag abbricht oder der Antrag erfolgreich ist.

Sehen Sie sich das [Beispiel](#beispiele) unten für ein ausführliches Beispiel an, aber das grundlegende Konzept in Umrissform ist:

1. Erstellen Sie eine neue [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)
   (`new` [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest))
2. Zeigen Sie den Zahlungsantrag an ([`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show))
3. Wenn `show()` aufgelöst wird, beschreibt die zurückgegebene [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)
   die angeforderte Zahlung und die vom Benutzer gewählten Optionen. Fahren Sie mit den folgenden Schritten fort:

   1. Validieren Sie die zurückgegebene Antwort; wenn es Felder gibt, deren Werte nicht akzeptabel sind, rufen Sie die [`complete()`](/de/docs/Web/API/PaymentResponse/complete)-Methode der Antwort mit einem Wert von `"fail"` auf, um einen Fehler anzuzeigen.
   2. Wenn die Daten der Antwort gültig und akzeptabel sind, rufen Sie `complete("success")` auf, um die Zahlung abzuschließen und zu verarbeiten.

4. Wenn `show()` abgelehnt wird, ist der Zahlungsantrag fehlgeschlagen, in der Regel, weil entweder bereits einer verarbeitet wird, der [User Agent](/de/docs/Glossary/user_agent) keine der angegebenen Zahlungsmethoden unterstützt oder aufgrund eines Sicherheitsproblems.
   Siehe die [Liste der Ausnahmen](/de/docs/Web/API/PaymentRequest/show#exceptions) für `show()` für weitere Details. Rufen Sie `complete("fail")` auf, um den Zahlungsantrag zu schließen.

```js
async function handlePayment() {
  const payRequest = new PaymentRequest(methodData, details, options);

  try {
    let payResponse = await payRequest.show();

    while (validate(payResponse)) {
      /* let the user edit the payment information,
         wait until they submit */
      await response.retry();
    }
    await payResponse.complete("success");
  } catch (err) {
    /* handle the exception */
  }
}
```

## Beispiele

```js
async function doPaymentRequest() {
  const request = new PaymentRequest(methodData, details, options);
  const response = await request.show();
  await recursiveValidate(request, response);
  await response.complete("success");
}

// Keep validating until the data looks good!
async function recursiveValidate(request, response) {
  const promisesToFixThings = [];
  const errors = await validate(request, response);
  if (!errors) {
    return;
  }
  if (errors.shippingAddress) {
    // "shippingaddresschange" fired at request object
    const promise = fixField(
      request,
      "shippingaddresschange",
      shippingValidator,
    );
    promisesToFixThings.push(promise);
  }
  if (errors.payer) {
    // "payerdetailchange" fired at response object
    const promise = fixField(response, "payerdetailchange", payerValidator);
    promisesToFixThings.push(promise);
  }
  await Promise.all([response.retry(errors), ...promisesToFixThings]);
  await recursiveValidate(request, response);
}

function fixField(requestOrResponse, event, validator) {
  return new Promise((resolve) => {
    // Browser keeps calling this until promise resolves.
    requestOrResponse.addEventListener(event, async function listener(ev) {
      const promiseToValidate = validator(requestOrResponse);
      ev.updateWith(promiseToValidate);
      const errors = await promiseToValidate;
      if (!errors) {
        // yay! fixed!
        event.removeEventListener(event, listener);
        resolve();
      }
    });
  });
}

doPaymentRequest();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Interface.
