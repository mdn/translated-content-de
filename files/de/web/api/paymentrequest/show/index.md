---
title: "PaymentRequest: show()-Methode"
short-title: show()
slug: Web/API/PaymentRequest/show
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **[`PaymentRequest`](/de/docs/Web/API/PaymentRequest)**-Schnittstelle enthält die Methode **`show()`**, die den Benutzeragenten anweist, den Vorgang zum Anzeigen und Bearbeiten der Benutzeroberfläche für die Zahlungsanforderung gegenüber dem Benutzer zu beginnen.

Es kann nur eine Zahlungsanforderung gleichzeitig bearbeitet werden, selbst über alle Dokumente hinweg. Sobald die `show()`-Methode eines `PaymentRequest` aufgerufen wurde, wird jeder andere Aufruf von `show()` mit einem `AbortError` abgelehnt, bis das zurückgegebene Versprechen entweder durch ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), das die Ergebnisse der Zahlungsanforderung angibt, erfüllt oder durch einen Fehler abgelehnt wird.

> [!NOTE]
> In der Realität unterstützen einige Browser, einschließlich Firefox, mehrere aktive Zahlungsanforderungen gleichzeitig, obwohl in der Spezifikation steht, dass dies nicht möglich ist.

Wenn Ihre Architektur nicht unbedingt alle Daten bereit hat, wenn sie die Zahlungsoberfläche durch Aufrufen von `show()` instanziiert, geben Sie den Parameter `detailsPromise` an, indem Sie ein {{jsxref("Promise")}} bereitstellen, das erfüllt wird, wenn die Daten bereit sind. Wird dies angegeben, erlaubt `show()` dem Nutzer nicht, mit der Zahlungsoberfläche zu interagieren, bis das Versprechen erfüllt ist, sodass die Daten vor dem Engagement des Nutzers mit dem Zahlungsprozess aktualisiert werden können.

Die Verarbeitung des Ergebnisses und, falls erforderlich, das Aufrufen von [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry) zum Wiederholen einer fehlgeschlagenen Zahlung kann entweder asynchron oder synchron erfolgen, je nach Bedarf. Für die beste Benutzererfahrung sind asynchrone Lösungen in der Regel der beste Weg. Die meisten Beispiele auf MDN und anderswo verwenden [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um asynchron zu warten, während Ergebnisse validiert und so weiter.

## Syntax

```js-nolint
show()
show(details)
```

### Parameter

- `details` {{optional_inline}}
  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird. Geben Sie dies an, falls Ihre Architektur erfordert, dass die Zahlungsanforderungsdetails zwischen dem Instanziieren der Zahlungsoberfläche und dem Beginn der Interaktion des Nutzers aktualisiert werden müssen. Das Objekt sollte die aktualisierten Informationen enthalten:
    - `displayItems` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils ein Zeilenobjekt für die Zahlungsanforderung beschreiben. Diese repräsentieren die Zeilenobjekte auf einer Quittung oder Rechnung, jeweils mit den folgenden Eigenschaften:
        - `amount`
          - : Ein Objekt, das den Geldwert des Artikels beschreibt. Dieses Objekt umfasst die folgenden Felder:
            - `currency`
              - : Eine Zeichenfolge mit einem gültigen dreistelligen [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)-Währungskennzeichen ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)), das die für den Zahlungswert verwendete Währung angibt.
            - `value`
              - : Eine Zeichenfolge mit einem gültigen Dezimalwert, der die Mengenangabe der Währung darstellt, die den Zahlungsbetrag ausmacht. Diese Zeichenfolge darf nur optional ein führendes "-" enthalten, um einen negativen Wert anzuzeigen, gefolgt von einer oder mehreren Ziffern von 0 bis 9, und einem optionalen Dezimalpunkt (".", unabhängig von der Spracheinstellung), gefolgt von mindestens einer weiteren Ziffer. Kein Leerraum ist erlaubt.
        - `label`
          - : Eine Zeichenfolge, die einen menschenlesbaren Namen oder eine Beschreibung des Artikels oder der Dienstleistung spezifiziert, für die eine Gebühr erhoben wird. Dies kann dem Benutzer durch den {{Glossary("user_agent", "Benutzeragenten")}} angezeigt werden, je nach Design der Schnittstelle.
        - `pending`
          - : Ein boolescher Wert, der `true` ist, wenn der angegebene `amount` noch nicht finalisiert wurde. Dies kann verwendet werden, um Elemente wie Versandkosten oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse, der Versandoption oder Ähnlichem abhängen. Der Benutzeragent kann diese Informationen anzeigen, muss es aber nicht.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Eine Zeichenfolge, die eine Fehlermeldung angibt, die dem Benutzer angezeigt werden soll. Beim Aufruf von [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) führt die Einbeziehung von `error` in die aktualisierten Daten dazu, dass der {{Glossary("user_agent", "Benutzeragent")}} den Text als allgemeine Fehlermeldung anzeigt. Für feldspezifische Adressfehler verwenden Sie das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils einen Modifikator für bestimmte Zahlungsmethodenkennzeichen beschreiben, jeweils mit den folgenden Eigenschaften:
        - `supportedMethods`
          - : Eine Zeichenfolge, die das Zahlungsmethodenkennzeichen darstellt. Das Zahlungsmethodenkennzeichen gilt nur, wenn der Benutzer diese Zahlungsmethode auswählt.
        - `total` {{optional_inline}}
          - : Ein Objekt, das die Eigenschaft `total` des Parameters `detailsPromise` überschreibt, falls diese Zahlungsmethode vom Benutzer ausgewählt wird. Die Eigenschaft nimmt denselben Eingabewert wie die Eigenschaft `total` des Parameters `detailsPromise`.
        - `additionalDisplayItems` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von Objekten bietet zusätzliche Anzeigeelemente, die der Eigenschaft `displayItems` des Parameters `detailsPromise` hinzugefügt werden, falls diese Zahlungsmethode vom Benutzer ausgewählt wird. Diese Eigenschaft wird häufig verwendet, um ein Rabatt- oder Zuschlagselement hinzuzufügen, das den Grund für den unterschiedlichen Gesamtbetrag für die ausgewählte Zahlungsmethode angibt, den der Benutzeragent anzeigen kann. Die Eigenschaft nimmt denselben Eingabewert wie die Eigenschaft `displayItems` des Parameters `detailsPromise`.
        - `data` {{optional_inline}}
          - : Ein serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten.

        Zum Beispiel können Sie einen verwenden, um den gesamten Zahlungsbetrag basierend auf der ausgewählten Zahlungsmethode anzupassen ("5% Barzahlungsrabatt!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jede Eigenschaft der Lieferadresse enthält, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, die jeweils eine verfügbare Versandoption beschreiben, aus der der Benutzer auswählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit denselben Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Gesamtsumme für die Zahlung bereitstellt. Stellen Sie sicher, dass dies der Summe aller Elemente in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, jedes Mal, wenn sich der zu zahlende Gesamtbetrag ändert. Dies gibt Ihnen Flexibilität, wie Sie mit Steuern, Rabatten und anderen Anpassungen des Gesamtpreises umgehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das schließlich mit einem [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) aufgelöst wird. Das Versprechen wird erfüllt, wenn der Benutzer die Zahlungsanforderung akzeptiert (zum Beispiel durch Klicken auf eine „Bezahlen“-Schaltfläche im Zahlungsschirm des Browsers).

### Ausnahmen

Ausnahmen werden nicht ausgelöst, sondern zurückgegeben, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der {{Glossary("user_agent", "Benutzeragent")}} bereits ein Zahlungsfenster anzeigt. Es kann zu einem Zeitpunkt _gemeinsam mit allen von dem Benutzeragent geladenen Dokumenten_ nur ein Zahlungsfenster sichtbar sein.

    Das Versprechen wird auch mit `AbortError` abgelehnt, wenn der Benutzer die Zahlungsanforderung abbricht.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn dieselbe Zahlung bereits für diese Anfrage angezeigt wurde (ihr Status ist `interactive`, da sie bereits angezeigt wird).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Benutzeragent die in der Konstruktorfunktion von [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest) angegebenen Zahlungsmethoden nicht unterstützt.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Aufruf von `show()` nicht als Reaktion auf eine Benutzeraktion, wie z. B. einem [`click`](/de/docs/Web/API/Element/click_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis, erfolgte. Andere Gründe für das Auslösen eines `SecurityError` liegen im Ermessen des Benutzeragenten und können Situationen umfassen, wie zu viele `show()`-Aufrufe in kurzer Zeit oder `show()`-Aufrufe, während Zahlungsanforderungen durch Kindersicherungen blockiert sind.

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Nutzungshinweise

Die gängigsten Muster zur Verwendung von `show()` beinhalten entweder die [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Syntax oder die Verwendung von `show().then().catch()`, um die Antwort und jede mögliche Ablehnung zu handhaben. Diese sehen folgendermaßen aus:

### async/await-Syntax

Das Verwenden von `await`, um auf das Auflösen eines Versprechens zu warten, ermöglicht das besonders saubere Schreiben von Code zur Zahlungsabwicklung:

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

In diesem Code überprüfen die Methoden `checkAddress()` und `checkShipping()`, ob die Lieferadresse und die Versandoptionen geändert wurden, und liefern als Antwort entweder ein Objekt oder ein Versprechen für eines; dieses Objekt enthält die Felder des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), die geändert wurden oder werden müssen.

Die `validateResponse()`-Methode unten wird aufgerufen, sobald `show()` zurückkehrt, um die zurückgegebene `response` anzusehen und entweder die Zahlung einzureichen oder die Zahlung als fehlgeschlagen abzulehnen:

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

Hier prüft eine benutzerdefinierte Funktion namens `checkAllValues()` jeden Wert in der `response` und stellt sicher, dass sie gültig sind, und gibt `true` zurück, wenn alle Felder gültig sind, oder `false`, wenn eines nicht ist. Nur wenn alle Felder gültig sind, wird die Methode [`complete()`](/de/docs/Web/API/PaymentResponse/complete) auf der Antwort mit dem String `"success"` aufgerufen, was anzeigt, dass alles gültig ist und die Zahlung entsprechend abgeschlossen werden kann.

Wenn eines der Felder unzulässige Werte aufweist oder wenn vom vorherigen Code eine Ausnahme ausgelöst wird, wird `complete()` mit dem String `"fail"` aufgerufen, der anzeigt, dass der Zahlungsvorgang abgeschlossen und fehlgeschlagen ist.

Statt sofort zu scheitern, könnten Sie sich entscheiden, [`retry()`](/de/docs/Web/API/PaymentResponse/retry) auf dem Antwortobjekt aufzurufen, um den Benutzeragenten zu bitten, den Zahlungsvorgang erneut zu versuchen; dies sollte normalerweise nur geschehen, nachdem der Benutzer alle erforderlichen Korrekturen an der Bestellung vorgenommen hat.

Den Zahlungsvorgang zu starten ist letztendlich so einfach wie das Aufrufen der Methode `processPayment()`.

### then/catch-Syntax

Sie können auch den älteren, versprechensbasierten Ansatz verwenden, um mit Zahlungen zu arbeiten, indem Sie die Funktionen {{jsxref("Promise.then", "then()")}} und {{jsxref("Promise.catch", "catch()")}} auf das von `show()` zurückgegebene Versprechen anwenden:

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

Dies ist funktional äquivalent zur Methode `processPayment()` mit der `await`-Syntax.

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

Sie könnten `checkAllValues()` sogar als synchrone Funktion haben, obwohl das möglicherweise Leistungsauswirkungen hat, die Sie nicht handhaben möchten:

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

Lesen Sie den Artikel [Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises), um weitere Informationen zu erhalten, wenn Sie mehr darüber erfahren möchten, wie Sie mit Versprechen arbeiten.

## Beispiele

Im folgenden Beispiel wird ein `PaymentRequest`-Objekt instanziiert, bevor die Methode `show()` aufgerufen wird. Diese Methode löst den eingebauten Prozess des Benutzeragenten aus, um Zahlungsinformationen vom Benutzer abzurufen. Die Methode `show()` gibt ein {{jsxref('Promise')}} zurück, das in ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt aufgelöst wird, wenn die Benutzerinteraktion abgeschlossen ist. Der Entwickler verwendet dann die Informationen im `PaymentResponse`-Objekt, um Zahlungsdaten an den Server zu formatieren und zu senden. Sie sollten die Zahlungsinformationen asynchron an den Server senden, damit der endgültige Aufruf von [`paymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) den Erfolg oder Misserfolg der Zahlung anzeigen kann.

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

Das folgende Beispiel zeigt, wie das Zahlungsblatt während seiner Präsentation an den Endnutzer aktualisiert werden kann.

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
