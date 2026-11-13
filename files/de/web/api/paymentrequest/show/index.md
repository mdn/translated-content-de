---
title: "PaymentRequest: Methode show()"
short-title: show()
slug: Web/API/PaymentRequest/show
l10n:
  sourceCommit: fe63d654201609c9fcbec752284da5bffa40e1b4
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die Methode **`show()`** der Schnittstelle **[`PaymentRequest`](/de/docs/Web/API/PaymentRequest)** weist den User Agent an, die Benutzeroberfläche für die Zahlungsanfrage anzuzeigen und zu verarbeiten.

Über alle Dokumente hinweg kann jeweils nur eine Zahlungsanfrage verarbeitet werden. Nachdem `show()` für ein `PaymentRequest`-Objekt aufgerufen wurde, wird jeder weitere Aufruf von `show()` mit einem `AbortError` abgelehnt, bis das zurückgegebene Promise entweder mit einer [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) erfüllt wurde, die das Ergebnis der Zahlungsanfrage angibt, oder mit einem Fehler abgelehnt wurde.

> [!NOTE]
> Obwohl die Spezifikation dies nicht vorsieht, unterstützen einige Browser, darunter Firefox, tatsächlich mehrere gleichzeitig aktive Zahlungsanfragen.

Wenn in Ihrer Architektur beim Aufruf von `show()` noch nicht alle Daten vorliegen, geben Sie den Parameter `detailsPromise` an. Übergeben Sie dafür ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Daten bereitstehen. Ist dieser Parameter angegeben, erlaubt `show()` dem Benutzer erst dann die Interaktion mit der Zahlungsoberfläche, wenn das Promise erfüllt wurde. So können die Daten aktualisiert werden, bevor der Benutzer mit dem Zahlungsvorgang beginnt.

Die Verarbeitung des Ergebnisses und, falls erforderlich, ein Aufruf von [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry), um eine fehlgeschlagene Zahlung erneut zu versuchen, können je nach Bedarf asynchron oder synchron erfolgen. Für eine gute Benutzererfahrung sind asynchrone Lösungen in der Regel vorzuziehen. Die meisten Beispiele auf MDN und anderswo verwenden [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um asynchron auf die Validierung der Ergebnisse und weitere Vorgänge zu warten.

## Syntax

```js-nolint
show()
show(details)
```

### Parameter

- `details` {{optional_inline}}
  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird. Geben Sie diesen Parameter an, wenn Ihre Architektur erfordert, dass die Details der Zahlungsanfrage zwischen der Initialisierung der Zahlungsoberfläche und dem Beginn der Benutzerinteraktion aktualisiert werden. Das Objekt sollte die aktualisierten Informationen enthalten:
    - `displayItems` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils einen Posten der Zahlungsanfrage beschreiben. Diese entsprechen den Posten auf einem Beleg oder einer Rechnung und haben jeweils die folgenden Eigenschaften:
        - `amount`
          - : Ein Objekt, das den Geldwert des Postens beschreibt. Es enthält die folgenden Felder:
            - `currency`
              - : Eine Zeichenfolge mit einem gültigen dreibuchstabigen [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html)-Währungscode ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)), der die für den Zahlungswert `value` verwendete Währung angibt.
            - `value`
              - : Eine Zeichenfolge mit einem gültigen Dezimalwert, der den Zahlungsbetrag angibt. Sie darf nur aus einem optionalen vorangestellten „-“ für einen negativen Wert, einer oder mehreren Ziffern von 0 bis 9 und einem optionalen Dezimalpunkt („.“, unabhängig vom Gebietsschema) mit mindestens einer weiteren Ziffer bestehen. Leerzeichen sind nicht zulässig.
        - `label`
          - : Eine Zeichenfolge mit einem für Menschen lesbaren Namen oder einer Beschreibung des berechneten Postens oder der Dienstleistung. Je nach Gestaltung der Oberfläche kann der {{Glossary("user_agent", "User Agent")}} sie dem Benutzer anzeigen.
        - `pending`
          - : Ein boolescher Wert, der `true` ist, wenn der angegebene `amount` noch nicht endgültig feststeht. Damit können beispielsweise Versandkosten oder Steuern gekennzeichnet werden, die von der gewählten Versandadresse oder Versandoption abhängen. Der User Agent kann diese Information anzeigen, muss es aber nicht.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Eine Zeichenfolge mit einer Fehlermeldung für den Benutzer. Wenn Sie [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) aufrufen und `error` in die aktualisierten Daten aufnehmen, zeigt der {{Glossary("user_agent", "User Agent")}} den Text als allgemeine Fehlermeldung an. Verwenden Sie für Fehler in bestimmten Adressfeldern das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils eine Anpassung für bestimmte Zahlungsmethodenkennungen beschreiben. Jedes Objekt hat die folgenden Eigenschaften:
        - `supportedMethods`
          - : Eine Zeichenfolge, die die Zahlungsmethodenkennung darstellt. Die Anpassung gilt nur, wenn der Benutzer diese Zahlungsmethode auswählt.
        - `total` {{optional_inline}}
          - : Ein Objekt, das die Eigenschaft `total` des Parameters `detailsPromise` überschreibt, wenn der Benutzer diese Zahlungsmethode auswählt. Es akzeptiert dieselben Eingaben wie die Eigenschaft `total` des Parameters `detailsPromise`.
        - `additionalDisplayItems` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von Objekten mit zusätzlichen anzuzeigenden Posten, die an die Eigenschaft `displayItems` des Parameters `detailsPromise` angehängt werden, wenn der Benutzer diese Zahlungsmethode auswählt. Diese Eigenschaft wird häufig verwendet, um einen Rabatt oder Zuschlag als Posten hinzuzufügen und so den abweichenden Gesamtbetrag für die ausgewählte Zahlungsmethode zu erklären, den der User Agent anzeigen kann. Sie akzeptiert dieselben Eingaben wie die Eigenschaft `displayItems` des Parameters `detailsPromise`.
        - `data` {{optional_inline}}
          - : Ein serialisierbares Objekt mit optionalen Informationen, die von den unterstützten Zahlungsmethoden benötigt werden könnten.

        Sie können eine solche Anpassung beispielsweise verwenden, um den Gesamtbetrag abhängig von der gewählten Zahlungsmethode zu ändern („5 % Rabatt bei Barzahlung!“).

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt mit einer Fehlermeldung für jede Eigenschaft der Versandadresse, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, die jeweils eine verfügbare Versandoption beschreiben, aus denen der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit denselben Eigenschaften wie die Objekte in `displayItems`, das einen aktualisierten Gesamtbetrag für die Zahlung angibt. Stellen Sie sicher, dass dieser der Summe aller Posten in `displayItems` entspricht. _Er wird nicht automatisch berechnet._ Sie müssen diesen Wert jedes Mal selbst aktualisieren, wenn sich der fällige Gesamtbetrag ändert. So können Sie flexibel festlegen, wie Steuern, Rabatte und andere Anpassungen des Gesamtpreises berücksichtigt werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das schließlich mit einer [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) erfüllt wird. Das Promise wird erfüllt, wenn der Benutzer die Zahlungsanfrage annimmt, beispielsweise indem er im Zahlungsdialog des Browsers auf eine Schaltfläche „Bezahlen“ klickt.

### Ausnahmen

Die folgenden Ausnahmen können zurückgegeben werden, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn:

    - Der Benutzer die Zahlungsanfrage abbricht.
    - Der {{Glossary("user_agent", "User Agent")}} bereits einen Zahlungsdialog anzeigt. Es darf jeweils nur ein Zahlungsdialog sichtbar sein, _über alle vom User Agent geladenen Dokumente hinweg_.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn dieselbe Zahlung für diese Anfrage bereits angezeigt wurde (ihr Zustand ist `interactive`, weil sie bereits angezeigt wird).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der User Agent die beim Aufruf des Konstruktors [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest) angegebenen Zahlungsmethoden nicht unterstützt.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, um einen internen Fehler in der zugrunde liegenden App anzuzeigen, die die Zahlung verarbeitet.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn `show()` nicht als Reaktion auf eine Benutzeraktion aufgerufen wurde, etwa auf ein [`click`](/de/docs/Web/API/Element/click_event)- oder [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis. Ob ein `SecurityError` aus weiteren Gründen ausgelöst wird, liegt im Ermessen des User Agents. Dazu kann gehören, dass `show()` innerhalb kurzer Zeit zu oft aufgerufen wird oder dass ein Aufruf erfolgt, während Zahlungsanfragen durch eine Kindersicherung blockiert sind.

## Sicherheit

Eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Damit diese Funktion verwendet werden kann, muss der Benutzer mit der Seite oder einem Element der Benutzeroberfläche interagieren.

## Hinweise zur Verwendung

Die gebräuchlichsten Muster für die Verwendung von `show()` sind die Syntax [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder `show().then().catch()`, um die Antwort und eine mögliche Ablehnung zu verarbeiten. Sie sehen wie folgt aus:

### async/await-Syntax

Wenn Sie mit `await` auf die Erfüllung eines Promise warten, lässt sich der Code zur Verarbeitung von Zahlungen besonders übersichtlich schreiben:

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

In diesem Code prüfen die Methoden `checkAddress()` und `checkShipping()` die Änderungen der Versandadresse beziehungsweise der Versandoption. Als Antwort liefern sie entweder ein Objekt oder ein Promise, das ein solches Objekt zurückgibt. Dieses Objekt enthält die Felder der [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), die geändert wurden oder geändert werden müssen.

Die unten stehende Methode `validateResponse()` wird aufgerufen, sobald `show()` zurückkehrt. Sie prüft die zurückgegebene `response` und übermittelt entweder die Zahlung oder lehnt sie als fehlgeschlagen ab:

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

Hier prüft eine benutzerdefinierte Funktion namens `checkAllValues()` jeden Wert in der `response` auf Gültigkeit. Sie gibt `true` zurück, wenn alle Felder gültig sind, und andernfalls `false`. Nur wenn alle Felder gültig sind, wird die Methode [`complete()`](/de/docs/Web/API/PaymentResponse/complete) für die Antwort mit der Zeichenfolge `"success"` aufgerufen. Dies gibt an, dass alles gültig ist und die Zahlung entsprechend abgeschlossen werden kann.

Wenn Felder unzulässige Werte enthalten oder der vorangehende Code eine Ausnahme auslöst, wird `complete()` mit der Zeichenfolge `"fail"` aufgerufen. Dies gibt an, dass der Zahlungsvorgang abgeschlossen und fehlgeschlagen ist.

Statt die Zahlung sofort als fehlgeschlagen zu behandeln, können Sie [`retry()`](/de/docs/Web/API/PaymentResponse/retry) für das Antwortobjekt aufrufen, um den User Agent zu einem erneuten Verarbeitungsversuch aufzufordern. Dies sollte in der Regel erst geschehen, nachdem der Benutzer alle erforderlichen Korrekturen an der Bestellung vorgenommen hat.

Um den Zahlungsvorgang zu starten, genügt schließlich ein Aufruf der Methode `processPayment()`.

### then/catch-Syntax

Sie können Zahlungen auch mit dem älteren Promise-basierten Ansatz verarbeiten. Verwenden Sie dazu die Funktionen {{jsxref("Promise.then", "then()")}} und {{jsxref("Promise.catch", "catch()")}} für das von `show()` zurückgegebene Promise:

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

Dies ist funktional gleichwertig mit der Methode `processPayment()` unter Verwendung der `await`-Syntax.

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

`checkAllValues()` könnte sogar eine synchrone Funktion sein. Das kann allerdings unerwünschte Auswirkungen auf die Leistung haben:

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

Weitere Informationen zur Arbeit mit Promises finden Sie im Artikel [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises).

## Beispiele

Im folgenden Beispiel wird ein `PaymentRequest`-Objekt initialisiert, bevor die Methode `show()` aufgerufen wird. Die Methode startet den integrierten Vorgang des User Agents, um Zahlungsinformationen vom Benutzer abzurufen. `show()` gibt ein {{jsxref('Promise')}} zurück, das mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt erfüllt wird, sobald die Benutzerinteraktion abgeschlossen ist. Anschließend verwendet der Entwickler die Informationen im `PaymentResponse`-Objekt, um die Zahlungsdaten zu formatieren und an den Server zu senden. Sie sollten die Zahlungsinformationen asynchron an den Server senden, damit der abschließende Aufruf von [`paymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) den Erfolg oder Misserfolg der Zahlung angeben kann.

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

Das folgende Beispiel zeigt, wie Sie den Zahlungsdialog während seiner Anzeige für den Benutzer aktualisieren können.

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
