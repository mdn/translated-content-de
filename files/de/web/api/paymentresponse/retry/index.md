---
title: "PaymentResponse: retry() Methode"
short-title: retry()
slug: Web/API/PaymentResponse/retry
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`retry()`**-Methode des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Interfaces ermöglicht es, den Benutzer aufzufordern, eine Zahlung erneut zu versuchen, nachdem während der Verarbeitung ein Fehler aufgetreten ist.

Dies ermöglicht es Ihrer App, Situationen wie ungültige Versandadressen oder abgelehnte Kreditkarten elegant zu behandeln.

## Syntax

```js-nolint
retry(errorFields)
```

### Parameter

- `errorFields`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `error` {{optional_inline}}
      - : Eine allgemeine Beschreibung eines Zahlungsfehlers, bei dem der Benutzer versuchen kann, ihn durch erneutes Versuchen der Zahlung zu beheben, möglicherweise nachdem Fehler in den Zahlungsinformationen korrigiert wurden. `error` kann allein angegeben werden, um nur eine generische Fehlermeldung bereitzustellen, oder zusammen mit anderen Eigenschaften, um einen Überblick zu geben, während die Werte der anderen Eigenschaften den Benutzer zu Fehlern in bestimmten Feldern des Zahlungsformulars führen.
    - `paymentMethod` {{optional_inline}}
      - : Alle spezifisch für die Zahlungsmethode aufgetretenen Fehler. Der Inhalt dieses Objekts variiert je nach verwendeter Zahlungsmethode.

### Rückgabewert

Ein {{jsxref("Promise")}}, der aufgelöst wird, wenn die Zahlung erfolgreich abgeschlossen ist. Das Promise wird mit einem entsprechenden Ausnahmefehler abgelehnt, wenn die Zahlung erneut fehlschlägt.

Normalerweise verwendet man dies, indem man [`show()`](/de/docs/Web/API/PaymentRequest/show) aufruft und dann in eine Schleife oder rekursive Funktion eintritt, die die [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) auf Fehler oder andere Gründe überprüft, um die Zahlungsanforderung erneut auszuführen. Wenn ein erneuter Versuch erforderlich ist, ruft die Schleife `retry()` auf und kehrt dann zurück, um die Antwort zu überprüfen, wenn sie eintrifft. Die Schleife endet nur, wenn der Benutzer entweder die Zahlungsanforderung storniert oder die Anfrage erfolgreich ist.

Siehe das [Beispiel](#beispiele) unten für ein ausführliches Beispiel, aber das grundlegende Konzept, in Umrissform, ist:

1. Erstellen Sie eine neue [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)
   (`new` [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest))
2. Zeigen Sie die Zahlungsanforderung an ([`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
3. Wenn `show()` aufgelöst wird, beschreibt die zurückgegebene [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) die angeforderte Zahlung und die vom Benutzer gewählten Optionen. Fahren Sie mit den folgenden Schritten fort:
   1. Validieren Sie die zurückgegebene Antwort; wenn es Felder gibt, deren Werte nicht akzeptabel sind, rufen Sie die Methode [`complete()`](/de/docs/Web/API/PaymentResponse/complete) der Antwort mit einem Wert `"fail"` auf, um das Scheitern anzuzeigen.
   2. Wenn die Daten der Antwort gültig und akzeptabel sind, rufen Sie `complete("success")` auf, um die Zahlung abzuschließen und zu verarbeiten.

4. Wenn `show()` abgelehnt wird, ist die Zahlungsanforderung fehlgeschlagen, normalerweise weil entweder bereits eine bearbeitet wird, der {{Glossary("user_agent", "Benutzeragent")}} keine der angegebenen Zahlungsmethoden unterstützt oder wegen eines Sicherheitsproblems. Siehe die [Liste der Ausnahmen](/de/docs/Web/API/PaymentRequest/show#exceptions) für `show()` für weitere Details. Rufen Sie `complete("fail")` auf, um die Zahlungsanforderung zu schließen.

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
