---
title: "PaymentResponse: retry()-Methode"
short-title: retry()
slug: Web/API/PaymentResponse/retry
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die Methode **`retry()`** des Interfaces [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) ermöglicht es, den Benutzer nach einem Fehler bei der Verarbeitung aufzufordern, eine Zahlung erneut zu versuchen.

So kann Ihre Anwendung mit Situationen wie ungültigen Lieferadressen oder abgelehnten Kreditkarten umgehen.

## Syntax

```js-nolint
retry(errorFields)
```

### Parameter

- `errorFields`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `error` {{optional_inline}}
      - : Eine allgemeine Beschreibung eines Zahlungsfehlers, den der Benutzer möglicherweise durch einen erneuten Zahlungsversuch beheben kann, gegebenenfalls nachdem er Fehler in den Zahlungsinformationen korrigiert hat. `error` kann allein angegeben werden, um nur eine allgemeine Fehlermeldung anzuzeigen, oder zusammen mit den anderen Eigenschaften als Überblick dienen, während deren Werte den Benutzer auf Fehler in bestimmten Feldern des Zahlungsformulars hinweisen.
    - `paymentMethod` {{optional_inline}}
      - : Etwaige Fehler, die für die verwendete Zahlungsmethode spezifisch sind. Der Inhalt dieses Objekts hängt von der verwendeten Zahlungsmethode ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn die Zahlung erfolgreich abgeschlossen wurde. Schlägt die Zahlung erneut fehl, wird das Promise mit einem entsprechenden Fehlerwert zurückgewiesen.

Üblicherweise rufen Sie dazu zunächst [`show()`](/de/docs/Web/API/PaymentRequest/show) auf und prüfen dann in einer Schleife oder rekursiven Funktion die [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) auf Fehler oder andere Gründe, die Zahlungsanforderung erneut zu versuchen. Ist ein erneuter Versuch nötig, ruft die Schleife `retry()` auf und prüft die eingehende Antwort erneut. Die Schleife endet erst, wenn der Benutzer die Zahlungsanforderung abbricht oder die Anforderung erfolgreich ist.

Ein ausführliches Beispiel finden Sie unter [Beispiele](#beispiele). Der grundlegende Ablauf ist:

1. Erstellen Sie eine neue [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) (`new` [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)).
2. Zeigen Sie die Zahlungsanforderung an ([`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)).
3. Wenn `show()` erfüllt wird, beschreibt die zurückgegebene [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) die angeforderte Zahlung und die vom Benutzer gewählten Optionen. Fahren Sie wie folgt fort:
   1. Validieren Sie die zurückgegebene Antwort. Wenn Werte in einem oder mehreren Feldern nicht akzeptabel sind, rufen Sie die Methode [`complete()`](/de/docs/Web/API/PaymentResponse/complete) der Antwort mit dem Wert `"fail"` auf, um einen Fehlschlag anzuzeigen.
   2. Wenn die Daten der Antwort gültig und akzeptabel sind, rufen Sie `complete("success")` auf, um die Zahlung abzuschließen und zu verarbeiten.

4. Wenn `show()` zurückgewiesen wird, ist die Zahlungsanforderung fehlgeschlagen. Dies liegt meist daran, dass bereits eine Zahlungsanforderung verarbeitet wird, der {{Glossary("user_agent", "User-Agent")}} keine der angegebenen Zahlungsmethoden unterstützt oder ein Sicherheitsproblem vorliegt. Weitere Einzelheiten finden Sie in der [Liste der Ausnahmen](/de/docs/Web/API/PaymentRequest/show#exceptions) für `show()`. Rufen Sie `complete("fail")` auf, um die Zahlungsanforderung zu schließen.

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

- Interface [`PaymentResponse`](/de/docs/Web/API/PaymentResponse).
