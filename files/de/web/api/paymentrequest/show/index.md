---
title: "PaymentRequest: show() Methode"
short-title: show()
slug: Web/API/PaymentRequest/show
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **[`PaymentRequest`](/de/docs/Web/API/PaymentRequest)**-Schnittstelle
**`show()`** Methode weist den Benutzeragenten an, den
Prozess des Anzeigens und Handhabens der Benutzeroberfläche für die Zahlungsanfrage an den
Benutzer zu beginnen.

Es kann nur eine Zahlungsanfrage gleichzeitig in Bearbeitung sein, über alle
Dokumente hinweg. Sobald die `show()`-Methode einer `PaymentRequest`
aufgerufen wurde, wird jeder weitere Aufruf von `show()` mit einem
`AbortError` abgelehnt, bis das zurückgegebene Versprechen abgeschlossen wurde, entweder indem es
mit einer [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) erfüllt wird, die die Ergebnisse der Zahlungsanfrage anzeigt, oder
durch Zurückweisung mit einem Fehler.

> [!NOTE]
> In der Realität, obwohl die Spezifikation besagt, dass dies nicht
> möglich sein sollte, unterstützen einige Browser, einschließlich Firefox, mehrere aktive Zahlungsanfragen gleichzeitig.

Wenn Ihre Architektur möglicherweise nicht alle Daten bereit hat, wenn
sie die Zahlungsmethode durch den Aufruf von `show()` instanziiert, geben Sie den
`detailsPromise`-Parameter an und liefern ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Daten bereit sind. Wenn dies bereitgestellt wird, erlaubt `show()` dem Benutzer nicht, mit der Benutzeroberfläche der Zahlungsmethode zu interagieren, bis das Versprechen erfüllt wird, sodass die Daten aktualisiert werden können, bevor der Benutzer mit dem Zahlungsprozess beginnt.

Das Verarbeiten des Ergebnisses und gegebenenfalls das Aufrufen von [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry)
zum erneuten Versuch einer fehlgeschlagenen Zahlung kann entweder asynchron oder synchron erfolgen,
je nach Bedarf. Für die beste Benutzererfahrung sind asynchrone Lösungen
typischerweise am besten geeignet. Die meisten Beispiele auf MDN und anderswo verwenden
[`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await),
um asynchron zu warten, während Ergebnisse validiert werden usw.

## Syntax

```js-nolint
show()
show(details)
```

### Parameter

- `details` {{optional_inline}}

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird. Geben Sie dies an, wenn Ihre Architektur erfordert,
    dass die Details der Zahlungsanfrage zwischen der Instanziierung der
    Zahlungsmittelschnittstelle und dem Beginn der Interaktion durch den Benutzer aktualisiert werden müssen. Das Objekt sollte die aktualisierten Informationen enthalten:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, das jeweils einen Posten für die Zahlungsanfrage beschreibt. Diese repräsentieren die einzelnen Posten auf einem Beleg oder einer Rechnung, jeweils mit den folgenden Eigenschaften:

        - `amount`
          - : Ein Objekt, das den Geldwert des Artikels beschreibt. Dieses Objekt enthält die folgenden Felder:
            - `currency`
              - : Ein String, der einen gültigen 3-Buchstaben-ISO 4217-Währungscode ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) angibt, der die Währung für den Zahlung `value` angibt.
            - `value`
              - : Ein String, der einen gültigen Dezimalwert darstellt, der die Währungssumme der Zahlung darstellt. Dieser String darf nur ein optionales führendes "-" enthalten, um einen negativen Wert anzuzeigen, dann eine oder mehrere Ziffern von 0 bis 9 und einen optionalen Dezimalpunkt (".", unabhängig von der Sprache) gefolgt von mindestens einer weiteren Ziffer. Kein Leerzeichen ist erlaubt.
        - `label`
          - : Ein String, der einen für den Menschen lesbaren Namen oder eine Beschreibung des abgerechneten Artikels oder Dienstes angibt. Dies kann von dem [user agent](/de/docs/Glossary/user_agent) je nach Gestaltung der Oberfläche dem Benutzer angezeigt werden.
        - `pending`
          - : Ein Boolescher Wert, der `true` ist, wenn der angegebene `amount` noch nicht finalisiert wurde. Dies kann verwendet werden, um Posten wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse, der Versandoption oder ähnlichem abhängen. Der Benutzeragent kann diese Informationen anzeigen, muss dies jedoch nicht tun.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Ein String, der eine Fehlermeldung angibt, die dem Benutzer angezeigt wird. Beim Aufrufen von [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith), bewirkt die Einbeziehung von `error` in die aktualisierten Daten, dass der [user agent](/de/docs/Glossary/user_agent) den Text als allgemeine Fehlermeldung anzeigt. Verwenden Sie für adressfeldspezifische Fehler das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}

      - : Ein Array von Objekten, das jeweils einen Modifikator für bestimmte Zahlungsmethode-Identifikatoren beschreibt, jeweils mit den folgenden Eigenschaften:

        - `supportedMethods`
          - : Ein String, der den Zahlungsanbieter-Identifikator darstellt. Der Zahlungsanbieter-Identifikator gilt nur, wenn der Benutzer diese Zahlungsmethode auswählt.
        - `total` {{optional_inline}}
          - : Ein Objekt, das die `total`-Eigenschaft des `detailsPromise`-Parameters überschreibt, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Die Eigenschaft nimmt denselben Input wie die `total`-Eigenschaft des `detailsPromise`-Parameters.
        - `additionalDisplayItems` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von Objekten bietet zusätzliche Anzeigeposten, die der `displayItems`-Eigenschaft des `detailsPromise`-Parameters hinzugefügt werden, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Diese Eigenschaft wird häufig verwendet, um ein Rabatt- oder Zuschlagposten hinzuzufügen, das den Grund für den verschiedenen Gesamtbetrag für die ausgewählte Zahlungsmethode anzeigt, die der Benutzeragent möglicherweise anzeigt. Die Eigenschaft nimmt denselben Input wie die `displayItems`-Eigenschaft des `detailsPromise`-Parameters.
        - `data` {{optional_inline}}
          - : Ein serialisierbares Objekt, das optionale Informationen bereitstellt, die von unterstützten Zahlungsmethoden benötigt werden könnten.

        Zum Beispiel können Sie einen verwenden, um den Gesamtzahlungsbetrag basierend auf der ausgewählten Zahlungsmethode anzupassen ("5% Barzahlung Rabatt!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jede Eigenschaft der Versandadresse enthält, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, das jeweils eine verfügbare Versandoption beschreibt, aus der der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit denselben Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Gesamtsumme für die Zahlung bereitstellt. Stellen Sie sicher, dass dies der Summe aller Posten in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, wenn sich der fällige Gesamtbetrag ändert. Dies gibt Ihnen Flexibilität bei der Verarbeitung von Dingen wie Steuern, Rabatten und anderen Anpassungen des insgesamt berechneten Preises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich schließlich mit einer [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) auflöst.
Das Versprechen wird aufgelöst, wenn der Benutzer die Zahlungsanfrage akzeptiert (beispielsweise durch Klicken auf eine "Bezahlen"-Schaltfläche im Zahlungsauswahlfenster des Browsers).

### Ausnahmen

Ausnahmen werden nicht geworfen, sondern zurückgegeben, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird zurückgegeben, wenn der
    [user agent](/de/docs/Glossary/user_agent) bereits ein Zahlungsfenster anzeigt. Es kann zu einem
    Zeitpunkt nur ein Zahlungsfenster sichtbar sein _über alle Dokumente, die vom Benutzeragenten geladen werden_.

    Das Versprechen wird auch mit `AbortError` abgelehnt, wenn der Benutzer die
    Zahlungsanfrage abbricht.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn dieselbe Zahlung bereits für diese Anfrage angezeigt wurde (ihr Zustand ist `interactive`, weil sie
    bereits angezeigt wird).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Benutzeragent die bei der
    [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufgerufene Zahlungsmethoden nicht unterstützt.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Aufruf von
    `show()` nicht als Reaktion auf eine Benutzeraktion, wie ein [`click`](/de/docs/Web/API/Element/click_event)
    oder [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis erfolgte. Andere Gründe, warum ein `SecurityError` geworfen werden kann,
    liegen im Ermessen des Benutzeragenten und können Situationen wie zu viele
    Aufrufe von `show()` in kurzer Zeit oder wenn `show()` aufgerufen wird, während Zahlungsanforderungen durch elterliche Steuerung blockiert sind, einschließen.

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Nutzungshinweise

Die häufigsten Muster zur Verwendung von `show()` beinhalten entweder die
[`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)
Syntax oder die Verwendung von `show().then().catch()`, um die Antwort und jede
mögliche Ablehnung zu verarbeiten. Diese sehen folgendermaßen aus:

### async/await Syntax

Das Verwenden von `await`, um auf die Auflösung eines Versprechens zu warten, ermöglicht es,
den Code zur Zahlungsabwicklung besonders sauber zu schreiben:

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

In diesem Code prüfen die Methoden `checkAddress()` und `checkShipping()`,
bzw. die Änderungen an der Versandadresse und der Versandoption und liefern als Antwort entweder ein Objekt oder ein Versprechen, eines zurückzugeben;
dieses Objekt enthält die Felder in der [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), die geändert wurden oder
geändert werden müssen.

Die Methode `validateResponse()` unten wird aufgerufen, sobald `show()`
zurückkehrt, um die zurückgegebene `response` zu untersuchen und entweder die
Zahlung zu übermitteln oder die Zahlung als fehlgeschlagen abzulehnen:

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

Hier prüft eine benutzerdefinierte Funktion namens `checkAllValues()` jeden Wert in der
`response` und stellt sicher, dass sie gültig sind. Sie gibt `true` zurück,
wenn jedes Feld gültig ist, oder `false`, wenn eines davon nicht gültig ist. Nur wenn jedes Feld
gültig ist, wird die Methode [`complete()`](/de/docs/Web/API/PaymentResponse/complete) mit dem String `"success"` auf der
Antwort aufgerufen, was anzeigt, dass alles
gültig ist und die Zahlung entsprechend abgeschlossen werden kann.

Wenn irgendwelche Felder unzulässige Werte haben oder wenn eine Ausnahme vom vorherigen
Code geworfen wird, wird `complete()` mit dem String `"fail"` aufgerufen, was
anzeigt, dass der Bezahlvorgang abgeschlossen und fehlgeschlagen ist.

Anstatt sofort zu scheitern, könnten Sie den
[`retry()`](/de/docs/Web/API/PaymentResponse/retry) auf dem Antwortobjekt aufrufen, um den Benutzeragenten zu bitten,
den Zahlungsvorgang erneut zu versuchen; dies sollte in der Regel nur erfolgen, nachdem der
Benutzer die erforderlichen Korrekturen an der Bestellung vorgenommen hat.

Am Ende ist der Beginn des Zahlungsvorgangs so einfach wie der Aufruf der
Methode `processPayment()`.

### then/catch Syntax

Sie können auch den älteren, auf Versprechen basierenden Ansatz verwenden, um mit Zahlungen zu arbeiten, indem Sie die
{{jsxref("Promise.then", "then()")}}- und {{jsxref("Promise.catch", "catch()")}}
Funktionen auf dem Versprechen verwenden, das von `show()` zurückgegeben wird:

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

Dies ist funktionell äquivalent zur `processPayment()`-Methode unter Verwendung
der `await`-Syntax.

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

Sie könnten sogar `checkAllValues()` eine synchrone Funktion sein lassen, obwohl
das möglicherweise Leistungsprobleme verursacht, die Sie nicht haben möchten:

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

Lesen Sie den Artikel [Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises) für weitere Informationen über die Arbeit mit
Versprechen, falls Sie weitere Informationen benötigen.

## Beispiele

Im folgenden Beispiel wird ein `PaymentRequest`-Objekt instanziiert, bevor
die Methode `show()` aufgerufen wird. Diese Methode löst den eingebauten
Prozess des Benutzeragenten aus, um Zahlungsinformationen vom Benutzer abzurufen. Die Methode `show()` gibt ein {{jsxref('Promise')}} zurück, das zu einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt aufgelöst wird,
wenn die Benutzerinteraktion abgeschlossen ist. Der Entwickler verwendet dann die Informationen im
`PaymentResponse`-Objekt, um Zahlungsdaten zu formatieren und an den Server zu senden.
Sie sollten die Zahlungsinformationen asynchron an den Server senden, damit der endgültige
Aufruf von [`paymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) den Erfolg oder Misserfolg der
Zahlung anzeigen kann.

```js
button.onclick = async function handlePurchase() {
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

Das folgende Beispiel zeigt, wie das Zahlungsfenster aktualisiert wird, während es dem Endbenutzer präsentiert wird.

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
