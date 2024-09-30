---
title: "PaymentRequest: show() Methode"
short-title: show()
slug: Web/API/PaymentRequest/show
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **[`PaymentRequest`](/de/docs/Web/API/PaymentRequest)**-Schnittstelle enthält die
**`show()`**-Methode, die den User-Agent anweist, den Vorgang zu starten, die Benutzeroberfläche für die Zahlungsanforderung dem Benutzer zu zeigen und zu verarbeiten.

Es kann jeweils nur eine Zahlungsanforderung auf einmal, in allen Dokumenten, bearbeitet werden. Sobald die `show()`-Methode einer `PaymentRequest`-Instanz aufgerufen wird, wird jeder andere Aufruf von `show()` mit einem `AbortError` abgelehnt, bis das zurückgegebene Versprechen abgeschlossen ist, entweder durch Erfüllung mit einer [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), die die Ergebnisse der Zahlungsanforderung angibt, oder durch Zurückweisung mit einem Fehler.

> [!NOTE]
> In der Realität unterstützen einige Browser, einschließlich Firefox, entgegen der Spezifikation, mehrere aktive Zahlungsanforderungen gleichzeitig.

Wenn Ihre Architektur nicht unbedingt alle Daten bereit hat, sie jedoch die Zahlungsoberfläche durch den Aufruf von `show()` instanziiert, geben Sie den Parameter `detailsPromise` an und übergeben Sie eine {{jsxref("Promise")}}, die erfüllt wird, sobald die Daten bereit sind. Falls vorhanden, lässt `show()` nicht zu, dass der Benutzer mit der Zahlungsoberfläche interagiert, bis das Versprechen erfüllt ist, damit Daten vor der Interaktion des Benutzers mit dem Zahlungsprozess aktualisiert werden können.

Die Verarbeitung des Ergebnisses und, falls notwendig, der Aufruf von [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry), um eine fehlgeschlagene Zahlung zu wiederholen, kann entweder asynchron oder synchron erfolgen, je nach Bedarf. Für das beste Benutzererlebnis sind asynchrone Lösungen typischerweise die beste Wahl. Die meisten Beispiele auf MDN und anderswo verwenden [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um asynchron zu warten, während Ergebnisse validiert werden usw.

## Syntax

```js-nolint
show()
show(details)
```

### Parameter

- `details` {{optional_inline}}

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird. Geben Sie dies an, wenn Ihre Architektur erfordert, dass die Details der Zahlungsanforderung zwischen der Instanziierung der Zahlungsoberfläche und dem Beginn der Benutzerinteraktion aktualisiert werden müssen. Das Objekt sollte die aktualisierten Informationen enthalten:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils einen Posten für die Zahlungsanforderung beschreiben. Diese repräsentieren die Posten auf einem Beleg oder Rechnung, jeweils mit folgenden Eigenschaften:

        - `amount`
          - : Ein Objekt, das den Geldwert des Artikels beschreibt. Dieses Objekt beinhaltet folgende Felder:
            - `currency`
              - : Ein String, der einen gültigen 3-Buchstaben- [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) Währungsidentifikator enthält ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)), der die für die Zahlung verwendete Währung angibt.
            - `value`
              - : Ein String, der einen gültigen Dezimalwert darstellt, der den Betrag der Währung, die die Zahlungssumme bildet, beinhaltet. Dieser String darf nur ein optionales führendes "-" enthalten, um einen negativen Wert anzugeben, dann eine oder mehrere Ziffern von 0 bis 9, und ein optionaler Dezimalpunkt (".", unabhängig von der Sprache) gefolgt von mindestens einer weiteren Ziffer. Keine Leerzeichen sind erlaubt.
        - `label`
          - : Ein String, der einen menschenlesbaren Namen oder eine Beschreibung des Artikels oder der Dienstleistung angibt, für den/die berechnet wird. Dies kann dem Benutzer vom [User-Agent](/de/docs/Glossary/user_agent) angezeigt werden, je nach Gestaltung der Oberfläche.
        - `pending`
          - : Ein boolescher Wert, der `true` ist, wenn der angegebene `amount` noch nicht endgültig ist. Dies kann verwendet werden, um Posten wie Liefer- oder Steuerbeträge zu zeigen, die von der Auswahl der Lieferadresse, der Lieferoption oder Ähnlichem abhängen. Der User-Agent kann diese Informationen anzeigen, ist jedoch nicht dazu verpflichtet.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Ein String, der eine Fehlermeldung angibt, die dem Benutzer angezeigt werden soll. Wenn `updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) aufgerufen wird und `error` in den aktualisierten Daten enthalten ist, zeigt der [User-Agent](/de/docs/Glossary/user_agent) den Text als allgemeine Fehlermeldung an. Für feldspezifische Adressfehler verwenden Sie das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils einen Modifikator für bestimmte Zahlungsmethoden-Identifikatoren beschreiben, jeweils mit folgenden Eigenschaften:

        - `supportedMethods`
          - : Ein String, der den Zahlungsmodifikator-Identifikator repräsentiert. Der Zahlungsmodifikator-Identifikator gilt nur, wenn der Benutzer diese Zahlungsmethode auswählt.
        - `total` {{optional_inline}}
          - : Ein Objekt, das die `total`-Eigenschaft des `detailsPromise`-Parameters überschreibt, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Die Eigenschaft nimmt dieselben Eingaben wie die `total`-Eigenschaft des `detailsPromise`-Parameters.
        - `additionalDisplayItems` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von Objekten, die zusätzliche Anzeigeartikel bereitstellen, die der `displayItems`-Eigenschaft des `detailsPromise`-Parameters hinzugefügt werden, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Diese Eigenschaft wird häufig verwendet, um eine Rabatt- oder Aufschlagszeile hinzuzufügen, die den Grund für den unterschiedlichen Gesamtbetrag für die ausgewählte Zahlungsmethode angibt, den der User-Agent anzeigen kann. Die Eigenschaft nimmt dieselben Eingaben wie die `displayItems`-Eigenschaft des `detailsPromise`-Parameters.
        - `data` {{optional_inline}}
          - : Ein serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten.

        Zum Beispiel könnte man einen verwenden, um den Gesamtzahlungsbetrag basierend auf der ausgewählten Zahlungsmethode anzupassen ("5% Rabatt bei Barzahlung!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jede Eigenschaft der Lieferadresse enthält, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, die jeweils eine verfügbare Lieferoption beschreiben, aus denen der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit denselben Eigenschaften wie die Objekte in `displayItems`, das einen aktualisierten Gesamtbetrag für die Zahlung bereitstellt. Stellen Sie sicher, dass dieser der Summe aller Artikel in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, wann immer sich der Gesamtbetrag ändert. Dies gibt Ihnen die Flexibilität, wie Sie mit Steuern, Rabatten und anderen Anpassungen des Gesamtpreises verfahren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das schließlich mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) aufgelöst wird. Das Versprechen wird aufgelöst, wenn der Benutzer die Zahlungsanforderung akzeptiert (z.B. durch Klicken auf eine "Bezahlen"-Schaltfläche im Zahlungsblatt des Browsers).

### Ausnahmen

Ausnahmen werden zurückgegeben, wenn das {{jsxref("Promise")}} zurückgewiesen wird.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird zurückgegeben, wenn der
    [User-Agent](/de/docs/Glossary/user_agent) bereits ein Zahlungsfenster anzeigt. Es darf jeweils nur ein Zahlungsfenster sichtbar sein _über alle vom User-Agent geladenen Dokumente_.

    Das Versprechen wird auch mit `AbortError` zurückgewiesen, wenn der Benutzer die
    Zahlungsanforderung abbricht.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn dieselbe Zahlung bereits für diese Anfrage angezeigt wurde (ihr Zustand ist `interactive`, da sie bereits angezeigt wird).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der User-Agent die bei der Erstellung der [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest) angegebene Zahlungsmethode nicht unterstützt.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Aufruf von `show()` nicht als Reaktion auf eine Benutzeraktion erfolgt, wie ein [`click`](/de/docs/Web/API/Element/click_event) oder ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis. Andere Gründe, warum ein `SecurityError` ausgelöst werden könnte, liegen im Ermessen des User-Agents und können Situationen wie zu viele Aufrufe von `show()` in kurzer Zeit oder `show()`-Aufrufe umfassen, wenn Zahlungsanforderungen durch Kindersicherungen blockiert werden.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Verwendungsnotizen

Die gebräuchlichsten Muster zur Verwendung von `show()` umfassen entweder die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Syntax oder die Verwendung von `show().then().catch()`, um die Antwort und mögliche Zurückweisungen zu verarbeiten. Diese sehen so aus:

### async/await-Syntax

Die Verwendung von `await`, um darauf zu warten, dass ein Versprechen aufgelöst wird, ermöglicht es, den Code zur Bearbeitung von Zahlungen besonders klar zu schreiben:

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

In diesem Code überprüfen die Methoden `checkAddress()` und `checkShipping()` jeweils die Änderungen an der Lieferadresse und der Lieferoption und geben als Antwort entweder ein Objekt oder ein Versprechen zurück, das eines zurückgibt; dieses Objekt enthält die Felder in der [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), die geändert wurden oder geändert werden müssen.

Die `validateResponse()`-Methode wird aufgerufen, wenn `show()` zurückkehrt, um die zurückgegebene `response` zu prüfen und entweder die Zahlung zu übermitteln oder die Zahlung als fehlgeschlagen abzulehnen:

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

Hier überprüft eine benutzerdefinierte Funktion namens `checkAllValues()` jeden Wert in der `response` und stellt sicher, dass sie gültig sind, und gibt `true` zurück, wenn alle Felder gültig sind, oder `false`, wenn eines nicht ist. Nur wenn alle Felder gültig sind, wird die Methode [`complete()`](/de/docs/Web/API/PaymentResponse/complete) mit dem String `"success"` aufgerufen, was angibt, dass alles gültig ist und die Zahlung entsprechend abgeschlossen werden kann.

Wenn Felder unakzeptable Werte haben oder wenn der vorherige Code eine Ausnahme wirft, wird `complete()` mit dem String `"fail"` aufgerufen, was darauf hinweist, dass der Zahlungsvorgang abgeschlossen und fehlgeschlagen ist.

Anstatt sofort zu scheitern, könnten Sie sich entscheiden, [`retry()`](/de/docs/Web/API/PaymentResponse/retry) für das Antwortobjekt aufzurufen, um den Benutzer-Agent zu bitten, die Zahlung erneut zu versuchen; dies sollte normalerweise nur erfolgen, nachdem der Benutzer alle notwendigen Korrekturen an der Bestellung vorgenommen hat.

Den Zahlungsvorgang zu starten, ist schließlich so einfach wie den Aufruf der `processPayment()`-Methode.

### then/catch-Syntax

Sie können auch den älteren, auf Versprechen basierenden Ansatz verwenden, um mit Zahlungen zu arbeiten, indem Sie die {{jsxref("Promise.then", "then()")}}- und {{jsxref("Promise.catch", "catch()")}}-Funktionen für das Versprechen verwenden, das von `show()` zurückgegeben wird:

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

Dies ist funktional äquivalent zur `processPayment()`-Methode, die die `await`-Syntax verwendet.

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

Sie könnten sogar `checkAllValues()` als synchrone Funktion haben, obwohl das möglicherweise unerwünschte Leistungsimplikationen hat:

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

Lesen Sie den Artikel [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) für weitere Informationen, falls Sie mehr darüber erfahren möchten, wie Sie mit Versprechen arbeiten.

## Beispiele

Im folgenden Beispiel wird ein `PaymentRequest`-Objekt instanziiert, bevor die `show()`-Methode aufgerufen wird. Diese Methode löst den eingebauten Prozess des User-Agents aus, um Zahlungsinformationen vom Benutzer abzurufen. Die `show()`-Methode gibt ein {{jsxref('Promise')}} zurück, das in ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt aufgelöst wird, wenn die Benutzerinteraktion abgeschlossen ist. Der Entwickler verwendet dann die Informationen im `PaymentResponse`-Objekt, um die Zahlungsdaten zu formatieren und an den Server zu senden. Sie sollten die Zahlungsinformationen asynchron an den Server senden, damit der abschließende Aufruf von [`paymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) den Erfolg oder Misserfolg der Zahlung anzeigen kann.

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

Das folgende Beispiel zeigt, wie das Zahlungsformular aktualisiert wird, während es dem Endbenutzer präsentiert wird.

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
