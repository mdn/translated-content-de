---
title: "PaymentResponse: retry() Methode"
short-title: retry()
slug: Web/API/PaymentResponse/retry
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`retry()`**-Methode des {{domxref("PaymentResponse")}}-Interfaces ermöglicht es, den Benutzer aufzufordern, eine Zahlung nach einem Fehler während der Verarbeitung erneut zu versuchen.

Dies ermöglicht es Ihrer App, Situationen wie ungültige Lieferadressen oder abgelehnte Kreditkarten elegant zu behandeln.

## Syntax

```js-nolint
retry(errorFields)
```

### Parameter

- `errorFields`

  - : Ein Objekt mit den folgenden Eigenschaften:
    - `error` {{optional_inline}}
      - : Eine allgemeine Beschreibung eines Zahlungsfehlers, von dem sich der Benutzer möglicherweise erholen kann, indem er die Zahlung wiederholt, möglicherweise nachdem er Fehler in den Zahlungsinformationen korrigiert hat. `error` kann alleine bereitgestellt werden, um nur eine generische Fehlermeldung anzugeben, oder in Kombination mit den anderen Eigenschaften, um als Übersicht zu dienen, während andere Eigenschaftswerte den Benutzer zu Fehlern in bestimmten Feldern im Zahlungsformular führen.
    - `paymentMethod` {{optional_inline}}
      - : Alle zahlungsmethodenspezifischen Fehler, die aufgetreten sein könnten. Der Inhalt dieses Objekts variiert abhängig von der genutzten Zahlungsmethode.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Zahlung erfolgreich abgeschlossen ist. Das Versprechen wird mit einem geeigneten Ausnahmefehler abgelehnt, wenn die Zahlung erneut fehlschlägt.

Typischerweise verwenden Sie dies, indem Sie {{domxref("PaymentRequest.show", "show()")}} aufrufen, dann eine Schleife oder rekursive Funktion durchführen, die die {{domxref("PaymentResponse")}} auf Fehler oder andere Gründe überprüft, um die Zahlungsanforderung erneut zu versuchen. Wenn ein erneuter Versuch erforderlich ist, ruft die Schleife `retry()` auf und kehrt dann zurück, um die Antwort beim Eintreffen zu überprüfen. Die Schleife wird nur beendet, wenn der Benutzer entweder die Zahlungsanforderung abbricht oder die Anforderung erfolgreich ist.

Siehe das [Beispiel](#beispiele) unten für ein ausführliches Beispiel, aber das Grundkonzept lautet in Umrissen:

1. Erstellen Sie eine neue {{domxref("PaymentRequest")}}
   (`new` {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}})
2. Zeigen Sie die Zahlungsanforderung an ({{domxref("PaymentRequest.show()")}})
3. Wenn `show()` aufgelöst wird, beschreibt die zurückgegebene {{domxref("PaymentResponse")}} die angeforderte Zahlung und die vom Benutzer gewählten Optionen. Fahren Sie mit den folgenden Schritten fort:

   1. Validieren Sie die zurückgegebene Antwort; wenn es Felder gibt, deren Werte nicht akzeptabel sind, rufen Sie die {{domxref("PaymentResponse.complete", "complete()")}}-Methode der Antwort mit einem Wert von `"fail"` auf, um ein Scheitern anzuzeigen.
   2. Wenn die Antwortdaten gültig und akzeptabel sind, rufen Sie `complete("success")` auf, um die Zahlung abzuschließen und zu verarbeiten.

4. Wenn `show()` abgelehnt wird, ist die Zahlungsanforderung fehlgeschlagen, normalerweise weil entweder bereits eine verarbeitet wird, weil der {{Glossary("user agent")}} keine der angegebenen Zahlungsmethoden unterstützt oder wegen eines Sicherheitsproblems. Siehe die [Liste der Ausnahmen](/de/docs/Web/API/PaymentRequest/show#exceptions) für `show()` für weitere Details. Rufen Sie `complete("fail")` auf, um die Zahlungsanforderung abzuschließen.

```js
async function handlePayment() {
  const payRequest = new PaymentRequest(methodData, details, options);

  try {
    let payResponse = await payRequest.show();

    while (validate(payResponse)) {
      /* dem Benutzer erlauben, die Zahlungsinformationen zu bearbeiten,
         warten, bis sie sie einreichen */
      await response.retry();
    }
    await payResponse.complete("success");
  } catch (err) {
    /* Ausnahme behandeln */
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

// Immer wieder validieren, bis die Daten gut aussehen!
async function recursiveValidate(request, response) {
  const promisesToFixThings = [];
  const errors = await validate(request, response);
  if (!errors) {
    return;
  }
  if (errors.shippingAddress) {
    // „shippingaddresschange“ wird am Anfrageobjekt ausgelöst
    const promise = fixField(
      request,
      "shippingaddresschange",
      shippingValidator,
    );
    promisesToFixThings.push(promise);
  }
  if (errors.payer) {
    // „payerdetailchange“ wird am Antwortobjekt ausgelöst
    const promise = fixField(response, "payerdetailchange", payerValidator);
    promisesToFixThings.push(promise);
  }
  await Promise.all([response.retry(errors), ...promisesToFixThings]);
  await recursiveValidate(request, response);
}

function fixField(requestOrResponse, event, validator) {
  return new Promise((resolve) => {
    // Der Browser ruft dies immer wieder auf, bis das Versprechen erfüllt ist.
    requestOrResponse.addEventListener(event, async function listener(ev) {
      const promiseToValidate = validator(requestOrResponse);
      ev.updateWith(promiseToValidate);
      const errors = await promiseToValidate;
      if (!errors) {
        // Juhu! Behoben!
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

- {{domxref("PaymentResponse")}} Schnittstelle.
