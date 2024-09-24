---
title: "PaymentResponse: complete() Methode"
short-title: complete()
slug: Web/API/PaymentResponse/complete
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die {{domxref("PaymentRequest")}} Methode **`complete()`** der [Payment Request API](/de/docs/Web/API/Payment_Request_API) benachrichtigt den {{Glossary("user agent")}}, dass die Benutzerinteraktion beendet ist und schließt alle verbleibenden Benutzeroberflächen.

Diese Methode muss aufgerufen werden, nachdem der Benutzer die Zahlungsanforderung akzeptiert hat und der durch die {{jsxref("Promise")}} zurückgegeben wurde, der von der {{domxref('PaymentRequest.show()')}} Methode aufgelöst wurde.

## Syntax

```js-nolint
complete()
complete(result)
```

### Parameter

- `result` {{optional_inline}}

  - : Ein String, der den Status der Zahlungsoperation bei Abschluss angibt. Es muss einer der folgenden sein:

    - `success`
      - : Die Zahlung wurde erfolgreich verarbeitet. Der User Agent kann dem Benutzer möglicherweise eine Form der "Zahlung erfolgreich" Anzeige präsentieren.
    - `fail`
      - : Die Zahlung wurde nicht erfolgreich verarbeitet. Der Fehler könnte je nach Gestaltung des User Agents dem Benutzer mitgeteilt werden oder nicht.
    - `unknown`
      - : Der Erfolg oder Misserfolg der Transaktion ist unbekannt oder irrelevant, und der User Agent soll keine Benachrichtigung anzeigen, selbst wenn er es normalerweise tun würde. _Dies ist der Standardwert._

    > [!NOTE]
    > In älteren Versionen der Spezifikation wurde ein leerer String,
    > `""`, anstelle von `unknown` verwendet, um einen Abschluss
    > ohne bekannten Ergebnisstatus anzuzeigen. Details finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) unten.

### Rückgabewert

Ein {{jsxref("Promise")}}, der ohne Eingabewert aufgelöst wird, sobald die Zahlungsoberfläche vollständig geschlossen ist. Wenn ein Fehler auftritt, wird das Promise stattdessen abgelehnt und gibt eine der unten aufgeführten Ausnahmen zurück.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das Dokument, in dem die Zahlungsanforderung stattfindet, inaktiv wurde, während die Benutzeroberfläche angezeigt wurde.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die Zahlung bereits abgeschlossen wurde oder `complete()` aufgerufen wurde, während eine Anforderung, die Zahlung zu wiederholen, aussteht. Sie können eine Zahlung nicht als abgeschlossen behandeln, nachdem Sie die Wiederholung der Zahlung angefordert haben.

## Beispiele

Das folgende Beispiel sendet Zahlungsinformationen mit der [Fetch API](/de/docs/Web/API/Fetch_API) an einen sicheren Server. Es ruft `complete()` mit einer Antwort auf, die dem Status in der Antwort entspricht.

```js
// Initialisierung von PaymentRequest-Argumenten wurde der Kürze halber ausgelassen.
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
