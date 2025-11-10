---
title: "PaymentResponse: complete()-Methode"
short-title: complete()
slug: Web/API/PaymentResponse/complete
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die Methode [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) **`complete()`** der [Payment Request API](/de/docs/Web/API/Payment_Request_API) benachrichtigt den {{Glossary("user_agent", "User Agent")}}, dass die Benutzerinteraktion abgeschlossen ist, und sorgt dafür, dass alle verbleibenden Benutzeroberflächen geschlossen werden.

Diese Methode muss aufgerufen werden, nachdem der Benutzer die Zahlungsanforderung akzeptiert hat und das {{jsxref("Promise")}}, das von der Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) zurückgegeben wird, aufgelöst ist.

## Syntax

```js-nolint
complete()
complete(result)
```

### Parameter

- `result` {{optional_inline}}

  - : Ein String, der den Zustand der Zahlungsoperation nach Abschluss angibt. Er muss einer der folgenden sein:

    - `success`
      - : Die Zahlung wurde erfolgreich verarbeitet. Der User Agent kann dem Benutzer eine Art "Zahlung erfolgreich"-Anzeige präsentieren oder auch nicht.
    - `fail`
      - : Die Zahlung wurde nicht erfolgreich verarbeitet. Das Scheitern kann vom User Agent dem Benutzer mitgeteilt werden oder nicht, abhängig vom Design.
    - `unknown`
      - : Der Erfolg oder Misserfolg der Transaktion ist unbekannt oder irrelevant, und der User Agent sollte keine Benachrichtigung anzeigen, selbst wenn er es normalerweise tun würde.
        _Dies ist der Standardwert._

    > [!NOTE]
    > In älteren Versionen der Spezifikation wurde ein leerer String,
    > `""`, anstelle von `unknown` verwendet, um einen Abschluss ohne bekannten Ergebniszustand zu kennzeichnen. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) unten für Details.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich ohne Eingabewert auflöst, sobald die Zahlungsoberfläche vollständig geschlossen ist. Wenn ein Fehler auftritt, wird das Versprechen stattdessen abgelehnt und gibt eine der unten aufgeführten Ausnahmen zurück.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Dokument, in dem die Zahlungsanforderung stattfindet, inaktiv wurde, während die Benutzeroberfläche angezeigt wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Zahlung bereits abgeschlossen ist oder `complete()` aufgerufen wurde, während eine Anfrage zur Wiederholung der Zahlung aussteht. Sie können eine Zahlung nicht als abgeschlossen behandeln, nachdem verlangt wurde, dass die Zahlung erneut versucht wird.

## Beispiele

Das folgende Beispiel sendet Zahlungsinformationen mit der [Fetch API](/de/docs/Web/API/Fetch_API) an einen sicheren Server. Es ruft `complete()` mit einer Antwort auf, die dem Status in der Antwort entspricht.

```js
// Initialization of PaymentRequest arguments are excerpted for the
//   sake of brevity.
const payment = new PaymentRequest(supportedInstruments, details, options);

payment
  .show()
  .then((paymentResponse) => {
    const fetchOptions = {
      method: "POST",
      credentials: include,
      body: JSON.stringify(paymentResponse),
    };
    const serverPaymentRequest = new Request("secure/payment/endpoint");
    fetch(serverPaymentRequest, fetchOptions)
      .then((response) => {
        if (response.status < 400) {
          paymentResponse.complete("success");
        } else {
          paymentResponse.complete("fail");
        }
      })
      .catch((reason) => {
        paymentResponse.complete("fail");
      });
  })
  .catch((err) => {
    console.error("Uh oh, something bad happened", err.message);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
