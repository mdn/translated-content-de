---
title: "PaymentRequest: show() Methode"
short-title: show()
slug: Web/API/PaymentRequest/show
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **[`PaymentRequest`](/de/docs/Web/API/PaymentRequest)**-Schnittstelle
verwendet die Methode **`show()`**, um den Benutzeragenten anzuweisen, den
Prozess zum Anzeigen und Verwalten der Benutzeroberfläche für die Zahlungsanforderung
zu starten.

Es kann immer nur eine Zahlungsanforderung gleichzeitig bearbeitet werden, und zwar über
alle Dokumente hinweg. Sobald die `show()`-Methode einer `PaymentRequest`
aufgerufen wurde, wird jeder weitere Aufruf von `show()` mit einem
`AbortError` abgelehnt, bis das zurückgegebene Versprechen entweder mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) abgeschlossen wird, das die Ergebnisse der Zahlungsanfrage angibt, oder mit einem Fehler abgelehnt wird.

> [!NOTE]
> In Wirklichkeit unterstützen einige Browser, einschließlich Firefox, mehrere aktive Zahlungsanfragen gleichzeitig, obwohl die Spezifikation dies nicht erlaubt.

Wenn Ihre Architektur nicht unbedingt alle Daten bereit hat, wenn die Zahlungsoberfläche durch den Aufruf von `show()` instanziiert wird, geben Sie den Parameter `detailsPromise` an und liefern Sie ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Daten bereit sind. Falls dies bereitgestellt wird, erlaubt `show()` dem Benutzer nicht, mit der Zahlungsoberfläche zu interagieren, bis das Versprechen erfüllt ist, damit die Daten aktualisiert werden können, bevor der Benutzer den Zahlungsprozess aufnimmt.

Die Verarbeitung des Ergebnisses und, falls erforderlich, der Aufruf von [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry) zur erneuten Durchführung einer fehlgeschlagenen Zahlung kann entweder asynchron oder synchron erfolgen, je nach Ihren Bedürfnissen. Für die beste Benutzererfahrung sind asynchrone Lösungen in der Regel der beste Weg. Die meisten Beispiele auf MDN und anderswo verwenden [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um asynchron zu warten, während Ergebnisse validiert werden und so weiter.

## Syntax

```js-nolint
show()
show(details)
```

### Parameter

- `details` {{optional_inline}}

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird. Geben Sie dies an, wenn Ihre Architektur erfordert, dass die Details der Zahlungsanforderung zwischen der Instanziierung der Zahlungsoberfläche und dem Benutzerinteraktion aktualisiert werden müssen. Das Objekt sollte die aktualisierten Informationen enthalten:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils einen Einzelposten der Zahlungsanforderung beschreiben. Diese repräsentieren die Einzelposten auf einem Beleg oder einer Rechnung, jeweils mit den folgenden Eigenschaften:
        - `amount`
          - : Ein Objekt, das den Geldwert des Postens beschreibt. Dieses Objekt enthält die folgenden Felder:
            - `currency`
              - : Eine Zeichenkette, die eine gültige 3-Buchstaben-Währungskennung gemäß [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) ([ISO 4217](https://de.wikipedia.org/wiki/ISO_4217)) enthält, die die für den Zahlungs`wert` verwendete Währung angibt.
            - `value`
              - : Eine Zeichenkette, die einen gültigen Dezimalwert für die Zahlungsmenge angibt. Diese Zeichenkette darf nur ein optionales führendes "-" enthalten, um einen negativen Wert anzugeben, dann eine oder mehrere Ziffern von 0 bis 9 und einen optionalen Dezimalpunkt (".", unabhängig von der Region) gefolgt von mindestens einer weiteren Ziffer. Leerzeichen sind nicht gestattet.
        - `label`
          - : Eine Zeichenkette, die einen für Menschen lesbaren Namen oder eine Beschreibung des Artikels oder der Dienstleistung angibt, für die abgerechnet wird. Dies kann von dem {{Glossary("user_agent", "Benutzeragenten")}} angezeigt werden, abhängig vom Design der Benutzeroberfläche.
        - `pending`
          - : Ein Boolean-Wert, der `true` ist, wenn der angegebene `amount` noch nicht finalisiert wurde. Dies kann verwendet werden, um Artikel wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse, Versandoption oder ähnlichem abhängen. Der Benutzeragent kann diese Informationen anzeigen, ist aber nicht dazu verpflichtet.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Eine Zeichenkette, die eine Fehlermeldung angibt, die dem Benutzer präsentiert werden soll. Wenn `updateWith()` aufgerufen wird, führt das Einfügen von `error` in die aktualisierten Daten dazu, dass der {{Glossary("user_agent", "Benutzeragent")}} den Text als allgemeine Fehlermeldung anzeigt. Für spezifische Fehler bei Adressfeldern verwenden Sie das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils einen Modifikator für bestimmte Zahlungsmethoden-Identifikatoren beschreiben, jeweils mit den folgenden Eigenschaften:

        - `supportedMethods`
          - : Eine Zeichenkette, die den Identifikator der Zahlungsmethode darstellt. Der Identifikator der Zahlungsmethode gilt nur, wenn der Benutzer diese Zahlungsmethode auswählt.
        - `total` {{optional_inline}}
          - : Ein Objekt, das die `total`-Eigenschaft des `detailsPromise`-Parameters überschreibt, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Die Eigenschaft nimmt denselben Input wie die `total`-Eigenschaft des `detailsPromise`-Parameters.
        - `additionalDisplayItems` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von Objekten, die zusätzliche Anzeigeposten bereitstellen, die an die `displayItems`-Eigenschaft des `detailsPromise`-Parameters angehängt werden, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Diese Eigenschaft wird häufig verwendet, um einen Rabatt- oder Zuschlagsposten hinzuzufügen, der den Grund für den unterschiedlichen Gesamtbetrag für die ausgewählte Zahlungsmethode angibt, den der Benutzeragent anzeigen kann. Die Eigenschaft nimmt denselben Input wie die `displayItems`-Eigenschaft des `detailsPromise`-Parameters.
        - `data` {{optional_inline}}
          - : Ein serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten.

        Sie können zum Beispiel einen Modifikator verwenden, um den Gesamtzahlungsbetrag basierend auf der ausgewählten Zahlungsmethode anzupassen ("5% Barzahlungsrabatt!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jedes Feld der Versandadresse enthält, das nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, die jeweils eine verfügbare Versandoption beschreiben, aus der der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit denselben Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Summe für die Zahlung angibt. Stellen Sie sicher, dass diese der Summe aller Posten in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, jedes Mal wenn sich der fällige Gesamtbetrag ändert. Dies gibt Ihnen Flexibilität, wie Sie Dinge wie Steuern, Rabatte und andere Anpassungen des insgesamt berechneten Preises handhaben möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das schließlich mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)
aufgelöst wird. Das Versprechen wird erfüllt, wenn der Benutzer die Zahlungsanforderung akzeptiert (z. B. durch Klicken auf eine
"Zahlen"-Schaltfläche im Zahlungssheet des Browsers).

### Ausnahmen

Ausnahmen werden nicht ausgelöst, sondern zurückgegeben, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird zurückgegeben, wenn der {{Glossary("user_agent", "Benutzeragent")}} bereits ein Zahlungspanel anzeigt. Es darf nur ein Zahlungspanel gleichzeitig sichtbar sein _über alle Dokumente, die vom Benutzeragenten geladen werden_.

    Das Versprechen wird auch mit `AbortError` abgelehnt, wenn der Benutzer die Zahlungsanforderung abbricht.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn dieselbe Zahlung für diese Anfrage bereits angezeigt wurde (ihr Zustand ist `interactive`, weil sie bereits angezeigt wird).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Benutzeragent die zum Zeitpunkt des Aufrufs des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors angegebenen Zahlungsmethoden nicht unterstützt.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Aufruf von `show()` nicht als Reaktion auf eine Benutzeraktion erfolgt ist, wie z. B. auf ein [`click`](/de/docs/Web/API/Element/click_event)- oder [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis. Andere Gründe, warum ein `SecurityError` ausgelöst werden kann, liegen im Ermessen des Benutzeragenten und können Situationen umfassen, wie zu viele Aufrufe von `show()` in kurzer Zeit oder wenn `show()` aufgerufen wird, während Zahlungsanforderungen durch Jugendschutz gesperrt sind.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Verwendungsnotizen

Die gebräuchlichsten Muster zur Verwendung von `show()` beinhalten entweder die
[`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Syntax oder die Verwendung von `show().then().catch()`, um die Antwort und eventuelle Ablehnungen zu bearbeiten. Diese sehen wie folgt aus:

### async/await-Syntax

Der Einsatz von `await`, um auf die Auflösung eines Versprechens zu warten, ermöglicht es, den Code zur Zahlungsabwicklung besonders sauber zu schreiben:

```js
async function processPayment() {
  try {
    const payRequest = new PaymentRequest(methodData, details, options);

    payRequest.onshippingaddresschange = (ev) =>
      ev.updateWith(checkAddress(payRequest));
    payRequest.onshippingoptionchange = (ev) =>
      ev.updateWith(checkShipping(payRequest));

    const response = await payRequest.show();
    await validateResponse(response);
  } catch (err) {
    /* handle the error; AbortError usually means a user cancellation */
  }
}
```

In diesem Code prüfen die Methoden `checkAddress()` und `checkShipping()` jeweils die Änderungen an der Versandadresse und der Versandoption und liefern in der Antwort entweder ein Objekt oder ein Versprechen, um eines zurückzugeben; dieses Objekt enthält die Felder im [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), die geändert wurden oder geändert werden müssen.

Die unten stehende Methode `validateResponse()` wird aufgerufen, sobald `show()` zurückkehrt, um die zurückgegebene `response` zu überprüfen und entweder die Zahlung zu senden oder die Zahlung als fehlgeschlagen abzulehnen:

```js
async function validateResponse(response) {
  try {
    if (await checkAllValues(response)) {
      await response.complete("success");
    } else {
      await response.complete("fail");
    }
  } catch (err) {
    await response.complete("fail");
  }
}
```

Hier überprüft eine benutzerdefinierte Funktion namens `checkAllValues()` jeden Wert in der
`response` und stellt sicher, dass sie gültig sind. Sie gibt `true` zurück, wenn
jedes Feld gültig ist, oder `false`, wenn eines nicht gültig ist. Nur wenn jedes Feld
gültig ist, wird die Methode [`complete()`](/de/docs/Web/API/PaymentResponse/complete) auf
die Antwort mit der Zeichenkette `"success"` aufgerufen, die angibt, dass alles
gültig ist und dass die Zahlung entsprechend abgeschlossen werden kann.

Wenn ein Feld unzulässige Werte hat oder wenn durch den vorherigen
Code eine Ausnahme ausgelöst wird, wird `complete()` mit der Zeichenkette `"fail"` aufgerufen, was
bedeutet, dass der Zahlungsvorgang abgeschlossen und fehlgeschlagen ist.

Anstatt sofort zu scheitern, könnten Sie sich entscheiden, `retry()` auf dem Antwortobjekt aufzurufen, um den Benutzeragenten zu bitten, die Zahlung erneut zu bearbeiten; dies sollte normalerweise nur nach den
erforderlichen Anpassungen der Bestellung durch den Nutzer erfolgen.

Das Starten des Zahlungsprozesses ist letztendlich so einfach wie der Aufruf der
Methode `processPayment()`.

### then/catch-Syntax

Sie können auch den älteren, auf Versprechen basierenden Ansatz verwenden, um mit Zahlungen zu arbeiten, indem Sie die {{jsxref("Promise.then", "then()")}}- und {{jsxref("Promise.catch", "catch()")}}-Funktionen auf das von `show()` zurückgegebene Versprechen anwenden:

```js
function processPayment() {
  const payRequest = new PaymentRequest(methodData, details, options);

  payRequest.onshippingaddresschange = (ev) =>
    ev.updateWith(checkAddress(payRequest));
  payRequest.onshippingoptionchange = (ev) =>
    ev.updateWith(checkShipping(payRequest));

  payRequest
    .show()
    .then((response) => validateResponse(response))
    .catch((err) => handleError(err));
}
```

Dies ist funktional äquivalent zu der `processPayment()`-Methode, die die
`await`-Syntax verwendet.

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

Sie könnten `checkAllValues()` sogar als synchrone Funktion verwenden, obwohl
das möglicherweise Leistungsprobleme mit sich bringt, die Sie vermeiden möchten:

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

Weitere Informationen finden Sie im Artikel [Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises), wenn Sie mehr über die Arbeit mit
Versprechen erfahren müssen.

## Beispiele

Im folgenden Beispiel wird ein `PaymentRequest`-Objekt instanziiert, bevor die
`show()`-Methode aufgerufen wird. Diese Methode löst den eingebauten
Prozess des Benutzeragenten zum Abrufen von Zahlungsinformationen vom Benutzer aus. Die Methode `show()` gibt ein {{jsxref('Promise')}} zurück, das zu einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt aufgelöst wird
wenn die Benutzerinteraktion abgeschlossen ist. Der Entwickler verwendet dann die Informationen im
`PaymentResponse`-Objekt, um die Zahlungsdaten zu formatieren
und an den Server zu senden. Sie sollten die Zahlungsinformationen asynchron an den Server senden, damit der endgültige
Aufruf an [`paymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) den Erfolg oder das Scheitern der
Zahlung anzeigen kann.

```js
button.onclick = async () => {
  // Initialization of PaymentRequest arguments are excerpted for the sake of
  // brevity.
  const payment = new PaymentRequest(methods, details, options);
  try {
    const response = await payment.show();
    // Process response here, including sending payment instrument
    // (e.g., credit card) information to the server.
    // paymentResponse.methodName contains the selected payment method
    // paymentResponse.details contains a payment method specific response
    await response.complete("success");
  } catch (err) {
    console.error("Uh oh, something bad happened", err.message);
  }
};
```

Das folgende Beispiel zeigt, wie das Zahlungssheet aktualisiert wird, während es dem
Endbenutzer präsentiert wird.

```js
async function requestPayment() {
  // We start with AU$0 as the total.
  const initialDetails = {
    total: {
      label: "Total",
      amount: { value: "0", currency: "AUD" },
    },
  };
  const request = new PaymentRequest(methods, initialDetails, options);
  // Check if the user supports the `methods`
  if (!(await request.canMakePayment())) {
    return; // no, so use a web form instead.
  }
  // Let's update the total as the sheet is shown
  const updatedDetails = {
    total: {
      label: "Total",
      amount: { value: "20", currency: "AUD" },
    },
  };
  const response = await request.show(updatedDetails);
  // Check response, etc.
}

document.getElementById("buyButton").onclick = requestPayment;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort)
- [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)
- [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry)
- [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete)
