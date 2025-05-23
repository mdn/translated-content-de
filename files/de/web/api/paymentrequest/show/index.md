---
title: "PaymentRequest: show() Methode"
short-title: show()
slug: Web/API/PaymentRequest/show
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **[`PaymentRequest`](/de/docs/Web/API/PaymentRequest)**-Schnittstelle der
**`show()`**-Methode weist den Benutzeragenten an, den Prozess des Zeigens und Handhabens der Benutzeroberfläche für die Zahlungsanforderung an den Benutzer zu beginnen.

Es kann nur eine Zahlungsanforderung zur gleichen Zeit über alle Dokumente hinweg bearbeitet werden. Sobald die `show()`-Methode einer `PaymentRequest`-Instanz aufgerufen wurde, werden alle anderen Aufrufe von `show()` mit einem `AbortError` abgelehnt, bis das zurückgegebene Versprechen entweder durch eine [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), die die Ergebnisse der Zahlungsanforderung anzeigt, erfüllt oder durch einen Fehler abgelehnt wurde.

> [!NOTE]
> Obwohl die Spezifikation vorgibt, dass dies nicht möglich ist, unterstützen einige Browser, einschließlich Firefox, mehrere aktive Zahlungsanfragen gleichzeitig.

Wenn Ihre Architektur nicht alle Daten bereit hat, sobald die Zahlungsschnittstelle durch den Aufruf von `show()` instanziiert wird, geben Sie den Parameter `detailsPromise` an, indem Sie ein {{jsxref("Promise")}} bereitstellen, das erfüllt wird, sobald die Daten bereit sind. Wenn dies bereitgestellt wird, erlaubt `show()` dem Benutzer nicht, mit der Zahlungsschnittstelle zu interagieren, bis das Versprechen erfüllt ist, sodass Daten aktualisiert werden können, bevor der Benutzer mit dem Zahlungsvorgang interagiert.

Das Ergebnis zu verarbeiten und gegebenenfalls [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry) aufzurufen, um eine fehlgeschlagene Zahlung erneut zu versuchen, kann je nach Bedarf asynchron oder synchron erfolgen. Für das beste Benutzererlebnis sind asynchrone Lösungen in der Regel der beste Weg. Die meisten Beispiele auf MDN und anderswo verwenden [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um asynchron zu warten, während Ergebnisse validiert werden und so weiter.

## Syntax

```js-nolint
show()
show(details)
```

### Parameter

- `details` {{optional_inline}}

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst. Geben Sie dies an, wenn Ihre Architektur erfordert, dass die Details der Zahlungsanforderung zwischen dem Instanziieren der Zahlungsschnittstelle und dem Beginn der Interaktion des Benutzers damit aktualisiert werden müssen. Das Objekt sollte die aktualisierten Informationen enthalten:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils eine Zeilelement für die Zahlungsanforderung beschreiben. Diese repräsentieren die Positionen auf einem Beleg oder einer Rechnung, jeweils mit den folgenden Eigenschaften:

        - `amount`
          - : Ein Objekt, das den Geldwert des Elements beschreibt. Dieses Objekt enthält die folgenden Felder:
            - `currency`
              - : Ein String, der einen gültigen 3-Buchstaben-[ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)-Währungsbezeichner ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) enthält, der die für den `Wert` der Zahlung verwendete Währung angibt.
            - `value`
              - : Ein String, der einen gültigen Dezimalwert darstellt, der die Menge der Währung angibt, die den Zahlungsbetrag ausmacht. Dieser String darf nur ein optionales führendes "-" enthalten, um einen negativen Wert anzuzeigen, dann eine oder mehrere Ziffern von 0 bis 9 und einen optionalen Dezimalpunkt (".", unabhängig von der Lokalisierung) gefolgt von mindestens einer weiteren Ziffer. Kein Leerzeichen ist erlaubt.
        - `label`
          - : Ein String, der einen menschenlesbaren Namen oder eine Beschreibung des Artikels oder der Dienstleistung angibt, für die berechnet wird. Dies kann dem Benutzer vom {{Glossary("user_agent", "Benutzeragenten")}} angezeigt werden, abhängig vom Design der Oberfläche.
        - `pending`
          - : Ein Boolean-Wert, der `true` ist, wenn der angegebene `amount` noch nicht endgültig festgelegt wurde. Dies kann verwendet werden, um Artikel wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse, Versandoption usw. abhängen. Der Benutzeragent kann diese Informationen anzeigen, ist jedoch nicht verpflichtet, dies zu tun.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Ein String, der eine Fehlermeldung angibt, die dem Benutzer angezeigt werden soll. Wenn [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) aufgerufen wird, verursacht das Hinzufügen von `error` zu den aktualisierten Daten, dass der {{Glossary("user_agent", "Benutzeragent")}} den Text als allgemeine Fehlermeldung anzeigt. Für adressfeldspezifische Fehler verwenden Sie das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils einen Modifikator für bestimmte Zahlungsmethoden-Bezeichner beschreiben, jeweils mit den folgenden Eigenschaften:

        - `supportedMethods`
          - : Ein String, der den Zahlungsmethoden-Bezeichner repräsentiert. Der Zahlungsmethoden-Bezeichner gilt nur, wenn der Benutzer diese Zahlungsmethode auswählt.
        - `total` {{optional_inline}}
          - : Ein Objekt, das die `total`-Eigenschaft des `detailsPromise`-Parameters überschreibt, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Die Eigenschaft nimmt den gleichen Input wie die `total`-Eigenschaft des `detailsPromise`-Parameters.
        - `additionalDisplayItems` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von Objekten, die zusätzliche Anzeigeelemente bereitstellen, die dem `displayItems`-Eigentum des `detailsPromise`-Parameters hinzugefügt werden, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Diese Eigenschaft wird häufig verwendet, um einen Rabatt- oder Zuschlagszeilenposten hinzuzufügen, der den Grund für den unterschiedlichen Gesamtbetrag für die ausgewählte Zahlungsmethode angibt, den der Benutzeragent möglicherweise anzeigt. Die Eigenschaft nimmt den gleichen Input wie das `displayItems`-Eigentum des `detailsPromise`-Parameters.
        - `data` {{optional_inline}}
          - : Ein serialisierbares Objekt, das optionale Informationen bereitstellt, die von den unterstützten Zahlungsmethoden benötigt werden könnten.

        Zum Beispiel können Sie einen Modifikator verwenden, um den Gesamtzahlungsbetrag basierend auf der ausgewählten Zahlungsmethode anzupassen ("5% Barzahlungsrabatt!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das für jede Eigenschaft der Versandadresse, die nicht validiert werden konnte, eine Fehlermeldung enthält.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, die jeweils eine verfügbare Versandoption beschreiben, aus denen der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit den gleichen Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Gesamtsumme für die Zahlung bereitstellt. Stellen Sie sicher, dass dies der Summe aller Artikel in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, jedes Mal, wenn sich der fällige Gesamtbetrag ändert. Dies ermöglicht Ihnen Flexibilität darin, wie Sie Dinge wie Steuern, Rabatte und andere Anpassungen am Gesamtpreis handhaben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das schließlich mit einer [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) aufgelöst wird.
Das Versprechen wird aufgelöst, wenn der Benutzer die Zahlungsanforderung akzeptiert (wie durch Klicken auf eine
"Bezahlen"-Schaltfläche im Zahlungsblatt des Browsers).

### Ausnahmen

Ausnahmen werden nicht geworfen, sondern zurückgegeben, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird zurückgegeben, wenn der
    {{Glossary("user_agent", "Benutzeragent")}} bereits ein Zahlungsfenster anzeigt. Nur ein
    Zahlungsfenster darf zu einem Zeitpunkt sichtbar sein _über alle vom Benutzeragenten geladenen Dokumente hinweg_.

    Das Versprechen wird auch mit `AbortError` abgelehnt, wenn der Benutzer die
    Zahlungsanforderung abbricht.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn dieselbe Zahlung bereits für diese Anfrage angezeigt wurde (ihr Zustand ist `interactive`, weil sie bereits angezeigt wird).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Benutzeragent die beim Aufruf des
    [`PaymentRequest`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors angegebenen Zahlungsmethoden nicht unterstützt.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Aufruf von
    `show()` nicht als Reaktion auf eine Benutzeraktion wie ein [`click`](/de/docs/Web/API/Element/click_event)
    oder ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis erfolgt. Andere Gründe, warum ein `SecurityError` ausgelöst werden kann,
    liegen im Ermessen des Benutzeragenten und können Situationen wie zu viele
    Aufrufe an `show()` in kurzer Zeit oder `show()`, das aufgerufen wird, während Zahlungsanforderungen durch Kinderschutzmaßnahmen blockiert werden, umfassen.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Nutzungshinweise

Die gängigsten Muster für die Verwendung von `show()` beinhalten entweder die
[`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-
Syntax oder die Verwendung von `show().then().catch()`, um die Antwort und mögliche
Ablehnungen zu behandeln. Diese sehen folgendermaßen aus:

### async/await-Syntax

Die Verwendung von `await`, um auf die Auflösung eines Versprechens zu warten, ermöglicht es, den Code zur Zahlungsabwicklung besonders sauber zu schreiben:

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
jeweils die Versandadresse und die Versandoption, und liefern als Antwort entweder ein Objekt oder ein Versprechen, ein solches zurückzugeben;
dieses Objekt enthält die Felder in der [`PaymentResponse`](/de/docs/Web/API/PaymentResponse), die geändert werden müssen oder wurden.

Die unten stehende Methode `validateResponse()` wird aufgerufen, sobald `show()`
zurückgegeben wird, um die zurückgegebene `response` zu überprüfen und entweder die
Zahlung abzuschicken oder die Zahlung als fehlgeschlagen abzulehnen:

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

Hier sucht eine benutzerdefinierte Funktion namens `checkAllValues()` jedes Feld in der
`response` durch und stellt sicher, dass sie gültig sind, wobei `true` zurückgegeben wird, wenn
jedes Feld gültig ist, oder `false`, wenn eines nicht gültig ist. Wenn und nur wenn alle Felder
gültig sind, wird die Methode [`complete()`](/de/docs/Web/API/PaymentResponse/complete) auf der
Antwort mit dem String `"success"` aufgerufen, was angibt, dass alles
gültig ist und die Zahlung entsprechend abgeschlossen werden kann.

Wenn irgendwelche Felder unzulässige Werte haben oder wenn der vorherige
Code eine Ausnahme auslöst, wird `complete()` mit dem String `"fail"` aufgerufen, was
bedeutet, dass der Zahlungsvorgang abgeschlossen und fehlgeschlagen ist.

Anstatt sofort zu scheitern, könnten Sie sich entscheiden,
[`retry()`](/de/docs/Web/API/PaymentResponse/retry) auf dem Antwortobjekt aufzurufen, um den Benutzeragenten
zu bitten, die Zahlung erneut zu versuchen; dies sollte normalerweise nur gemacht werden, nachdem der
Benutzer die benötigten Korrekturen an der Bestellung vorgenommen hat.

Den Zahlungsvorgang zu starten, ist letztlich so einfach wie der Aufruf der
`processPayment()`-Methode.

### then/catch-Syntax

Sie können auch den älteren, auf Versprechen basierenden Ansatz verwenden, um mit Zahlungen zu arbeiten, indem Sie die
{{jsxref("Promise.then", "then()")}}- und {{jsxref("Promise.catch", "catch()")}}-
Funktionen auf dem von `show()` zurückgegebenen Versprechen verwenden:

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

Dies ist funktional gleichbedeutend mit der `processPayment()`-Methode, die die
`await`-Syntax verwendet.

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

Sie könnten `checkAllValues()` sogar als eine synchrone Funktion haben, obwohl
das Leistungsimplikationen haben könnte, mit denen Sie sich nicht auseinandersetzen möchten:

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

Wenn Sie mehr Informationen zu Versprechen benötigen, lesen Sie den Artikel [Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises).

## Beispiele

Im folgenden Beispiel wird ein `PaymentRequest`-Objekt instanziiert, bevor die
`show()`-Methode aufgerufen wird. Diese Methode löst den eingebauten
Prozess des Benutzeragenten aus, um Zahlungsinformationen vom Benutzer abzurufen. Die
`show()`-Methode gibt ein {{jsxref('Promise')}} zurück, das sich in ein [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)-Objekt auflöst,
wenn die Benutzerinteraktion abgeschlossen ist. Der Entwickler verwendet dann die Informationen im
`PaymentResponse`-Objekt, um Zahlungsdaten zu formatieren und an den Server zu senden.
Sie sollten die Zahlungsinformationen asynchron an den Server senden, damit der abschließende
Aufruf von [`paymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete) den Erfolg oder Fehlschlag der
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

Das folgende Beispiel zeigt, wie man das Zahlungsblatt aktualisiert, während es dem
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
