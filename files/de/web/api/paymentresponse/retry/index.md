---
title: "PaymentResponse: retry() Methode"
short-title: retry()
slug: Web/API/PaymentResponse/retry
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`retry()`** Methode des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Interfaces ermöglicht es, den Benutzer aufzufordern, eine Zahlung nach einem Fehler während der Bearbeitung erneut zu versuchen.

Dies ermöglicht es Ihrer App, Situationen wie ungültige Lieferadressen oder abgelehnte Kreditkarten elegant zu behandeln.

## Syntax

```js-nolint
retry(errorFields)
```

### Parameter

- `errorFields`

  - : Ein Objekt mit folgenden Eigenschaften:
    - `error` {{optional_inline}}
      - : Eine allgemeine Beschreibung eines Zahlungsfehlers, von dem sich der Benutzer möglicherweise erholen kann, indem er die Zahlung erneut versucht, möglicherweise nachdem Fehler in den Zahlungsinformationen korrigiert wurden. `error` kann alleine bereitgestellt werden, um nur eine generische Fehlermeldung bereitzustellen, oder in Verbindung mit den anderen Eigenschaften, um als Übersicht zu dienen, während die Werte anderer Eigenschaften den Benutzer zu Fehlern in bestimmten Feldern des Zahlungsformulars führen.
    - `paymentMethod {{optional_inline}}
      - : Alle spezifischen Fehler, die bei der Zahlungsmethode aufgetreten sein könnten. Der Inhalt dieses Objekts variiert je nach verwendeter Zahlungsmethode.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Zahlung erfolgreich abgeschlossen ist. Das Promise wird mit einem entsprechenden Ausnahme-Wert abgelehnt, wenn die Zahlung erneut fehlschlägt.

Normalerweise verwenden Sie dies, indem Sie [`show()`](/de/docs/Web/API/PaymentRequest/show) aufrufen und dann eine Schleife oder rekursive Funktion betreten, die die [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) auf Fehler oder andere Gründe überprüft, um die Zahlungsanforderung erneut zu versuchen. Wenn ein erneuter Versuch erforderlich ist, ruft die Schleife `retry()` auf und kehrt dann zur Überprüfung der Antwort zurück, wenn sie eingeht. Die Schleife wird nur beendet, wenn der Benutzer entweder die Zahlungsanfrage storniert oder die Anfrage erfolgreich ist.

Siehe das [Beispiel](#beispiele) unten für ein ausführliches Beispiel, aber das Grundkonzept in Umrissform ist:

1. Erstellen Sie eine neue [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) (`new` [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest))
2. Zeigen Sie die Zahlungsanfrage an ([`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
3. Wenn `show()` aufgelöst wird, beschreibt die zurückgegebene [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) die angeforderte Zahlung und die vom Benutzer gewählten Optionen. Fahren Sie mit den folgenden Schritten fort:

   1. Überprüfen Sie die zurückgegebene Antwort; wenn es Felder gibt, deren Werte nicht akzeptabel sind, rufen Sie die [`complete()`](/de/docs/Web/API/PaymentResponse/complete) Methode der Antwort mit einem Wert von `"fail"` auf, um ein Scheitern anzuzeigen.
   2. Wenn die Daten der Antwort gültig und akzeptabel sind, rufen Sie
      `complete("success")` auf, um die Zahlung abzuschließen und zu verarbeiten.

4. Wenn `show()` abgelehnt wird, ist die Zahlungsanforderung fehlgeschlagen, normalerweise weil
   entweder bereits eine bearbeitet wird, weil der {{Glossary("user_agent", "User Agent")}}
   keine der angegebenen Zahlungsmethoden unterstützt oder wegen eines Sicherheitsproblems.
   Siehe die [Liste der Ausnahmen](/de/docs/Web/API/PaymentRequest/show#exceptions) für `show()` für weitere Details. Rufen Sie
   `complete("fail")` auf, um die Zahlungsanforderung zu schließen.

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

- [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Interface.
