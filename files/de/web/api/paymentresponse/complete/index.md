---
title: "PaymentResponse: complete() Methode"
short-title: complete()
slug: Web/API/PaymentResponse/complete
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Methode **`complete()`** der [Payment Request API](/de/docs/Web/API/Payment_Request_API) benachrichtigt den [User Agent](/de/docs/Glossary/user_agent), dass die Benutzerinteraktion beendet ist und schließt gegebenenfalls verbleibende Benutzeroberflächenelemente.

Diese Methode muss aufgerufen werden, nachdem der Benutzer die Zahlungsanforderung akzeptiert hat und das {{jsxref("Promise")}}, das von der Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) zurückgegeben wird, aufgelöst ist.

## Syntax

```js-nolint
complete()
complete(result)
```

### Parameter

- `result` {{optional_inline}}

  - : Ein String, der den Zustand der Zahlungsvorgangs nach Abschluss angibt. Er muss einer der folgenden sein:

    - `success`
      - : Die Zahlung wurde erfolgreich bearbeitet. Der User Agent kann eine Art "Zahlung erfolgreich"-Indikation dem Benutzer präsentieren oder nicht.
    - `fail`
      - : Die Zahlung wurde nicht erfolgreich bearbeitet. Das Versagen kann vom User Agent dem Benutzer mitgeteilt werden oder auch nicht, je nach dessen Design.
    - `unknown`
      - : Der Erfolg oder Misserfolg der Transaktion ist unbekannt oder irrelevant, und der User Agent sollte keine Benachrichtigung präsentieren, selbst wenn er normalerweise würde. _Dies ist der Standardwert._

    > [!NOTE]
    > In älteren Versionen der Spezifikation wurde ein leerer String, `""`, anstelle von `unknown` verwendet, um einen Abschluss ohne bekannten Ergebniszustand anzuzeigen. Weitere Einzelheiten finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) unten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit keinem Eingabewert auflöst, sobald die Zahlungsoberfläche vollständig geschlossen wurde. Wenn ein Fehler auftritt, wird das Promise stattdessen abgelehnt und gibt eine der unten aufgeführten Ausnahmen zurück.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Dokument, in dem die Zahlungsanforderung stattfindet, inaktiv wurde, während die Benutzeroberfläche angezeigt wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Zahlung bereits abgeschlossen wurde oder `complete()` aufgerufen wurde, während eine Anfrage für einen erneuten Versuch der Zahlung aussteht. Eine Zahlung kann nicht als abgeschlossen behandelt werden, nachdem die Wiederholung der Zahlung angefordert wurde.

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
