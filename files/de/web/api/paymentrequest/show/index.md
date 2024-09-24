---
title: "PaymentRequest: show()-Methode"
short-title: show()
slug: Web/API/PaymentRequest/show
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **{{domxref('PaymentRequest')}}**-Schnittstelle verwendet die
Methode **`show()`**, um den Benutzeragenten anzuweisen, mit dem Einblenden und Verarbeiten der Benutzeroberfläche für die Zahlungsanforderung zu beginnen.

Es kann immer nur eine Zahlungsanforderung gleichzeitig bearbeitet werden, über alle
Dokumente hinweg. Sobald die `show()`-Methode einer `PaymentRequest` aufgerufen wurde, werden alle weiteren Aufrufe von `show()` mit einem
`AbortError` abgelehnt, bis das zurückgegebene Promise entweder durch einen {{domxref("PaymentResponse")}} als Ergebnis der Zahlungsanforderung erfüllt oder mit einem Fehler abgelehnt wurde.

> [!NOTE]
> In der Realität, trotz der Tatsache, dass die Spezifikation vorsieht, dass dies
> nicht möglich ist, unterstützen einige Browser, einschließlich Firefox, mehrere aktive Zahlungsanforderungen gleichzeitig.

Wenn Ihre Architektur nicht notwendigerweise alle Daten bereit hat, sobald sie die Zahlungsmethoden-Schnittstelle durch Aufrufen von `show()` instanziiert, geben Sie den `detailsPromise`-Parameter an, wobei ein {{jsxref("Promise")}} übergeben wird, welches erfüllt wird, sobald die Daten bereit sind. Wenn dies bereitgestellt wird, lässt `show()` den Benutzer nicht mit der Zahlungsmethoden-Schnittstelle interagieren, bis das Promise erfüllt ist, damit die Daten aktualisiert werden können, bevor der Benutzer mit dem Zahlungsvorgang beginnt.

Die Verarbeitung des Ergebnisses und gegebenenfalls der Aufruf von {{domxref("PaymentResponse.retry()")}} zur Wiederholung einer fehlgeschlagenen Zahlung kann entweder asynchron oder synchron erfolgen, je nach Bedarf. Für die beste Benutzererfahrung sind asynchrone Lösungen typischerweise der beste Weg. Die meisten Beispiele auf MDN und anderswo verwenden
[`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await),
um asynchron zu warten, während Ergebnisse validiert werden, und so weiter.

## Syntax

```js-nolint
show()
show(details)
```

### Parameter

- `details` {{optional_inline}}

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird. Verwenden Sie dies, wenn Ihre Architektur erfordert,
    dass die Details der Zahlungsanforderung aktualisiert werden müssen, bevor die Zahlungsmethoden-Schnittstelle instanziiert und der Benutzer mit ihr interagiert. Das Objekt sollte die aktualisierten Informationen enthalten:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, von denen jedes eine Zeile der Zahlungsanforderung beschreibt. Diese stellen die Positionen auf einem Beleg oder einer Rechnung dar, jeweils mit den folgenden Eigenschaften:

        - `amount`
          - : Ein Objekt, das den Geldwert des Elements beschreibt. Dieses Objekt umfasst die folgenden Felder:
            - `currency`
              - : Eine Zeichenkette, die eine gültige 3-Buchstaben [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) Währungskennzeichnung ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) enthält, die die für die Zahlung `value` verwendete Währung angibt.
            - `value`
              - : Eine Zeichenkette, die einen gültigen Dezimalwert darstellt, der den Betrag der Währung zur Zahlungsdeckung repräsentiert. Diese Zeichenkette darf nur ein optionales führendes "-" zur Angabe eines negativen Wertes enthalten, dann eine oder mehrere Ziffern von 0 bis 9 und einen optionalen Dezimalpunkt (".", unabhängig von der Sprache) gefolgt von mindestens einer weiteren Ziffer. Kein Leerraum ist erlaubt.
        - `label`
          - : Eine Zeichenkette, die einen menschlich lesbaren Namen oder eine Beschreibung des Elements oder der Dienstleistung angibt, die in Rechnung gestellt wird. Dies kann vom {{Glossary("user agent")}} dem Benutzer angezeigt werden, abhängig vom Entwurf der Oberfläche.
        - `pending`
          - : Ein Boolescher Wert, der `true` ist, wenn der angegebene `amount` noch nicht abgeschlossen wurde. Dies kann verwendet werden, um Positionen wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse, der Versandoption oder Ähnlichem abhängen. Der Benutzeragent kann diese Information anzeigen, muss es jedoch nicht.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Eine Zeichenkette, die eine Fehlermeldung angibt, die dem Benutzer angezeigt werden soll. Beim Aufruf von {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}}, führt das Einfügen von `error` in die aktualisierten Daten dazu, dass der {{Glossary("user agent")}} den Text als allgemeine Fehlermeldung anzeigt. Für adressfeldspezifische Fehler verwenden Sie das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}

      - : Ein Array von Objekten, von denen jedes einen Modifikator für bestimmte Zahlungsmethoden-Identifikatoren beschreibt, mit folgenden Eigenschaften:

        - `supportedMethods`
          - : Eine Zeichenkette, die den Identifikator der Zahlungsmethode darstellt. Der Zahlungsidentifikator gilt nur, wenn der Benutzer diese Zahlungsmethode auswählt.
        - `total` {{optional_inline}}
          - : Ein Objekt, das die `total` Eigenschaft des `detailsPromise` Parameters überschreibt, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Die Eigenschaft nimmt die gleichen Eingaben an wie die `total` Eigenschaft des `detailsPromise` Parameters.
        - `additionalDisplayItems` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von Objekten, das zusätzliche Anzeigepositionen bereitstellt, die der `displayItems` Eigenschaft des `detailsPromise` Parameters hinzugefügt werden, wenn diese Zahlungsmethode vom Benutzer ausgewählt wird. Diese Eigenschaft wird häufig verwendet, um eine Rabatt- oder Zuschlagszeile hinzuzufügen, die den Grund für den unterschiedlichen Gesamtbetrag für die ausgewählte Zahlungsmethode angibt, die der Benutzeragent möglicherweise anzeigt. Die Eigenschaft nimmt die gleichen Eingaben an wie die `displayItems` Eigenschaft des `detailsPromise` Parameters.
        - `data` {{optional_inline}}
          - : Ein serialisierbares Objekt, das optionale Informationen bietet, die von den unterstützten Zahlungsmethoden benötigt werden könnten.

        Beispielsweise kann eine Anpassung des Gesamtbetrags der Zahlung basierend auf der ausgewählten Zahlungsmethode vorgenommen werden ("5% Rabatt bei Barzahlung!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jede Eigenschaft der Versandadresse enthält, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, von denen jedes eine verfügbare Versandoption beschreibt, aus denen der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit den gleichen Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Gesamtsumme für die Zahlung bietet. Stellen Sie sicher, dass dies der Summe aller Artikel in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, jedes Mal, wenn sich der zu zahlende Gesamtbetrag ändert. So haben Sie die Flexibilität, wie Sie Dinge wie Steuern, Rabatte und andere Anpassungen am insgesamt berechneten Preis handhaben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das schließlich mit einem {{domxref("PaymentResponse")}} aufgelöst wird.
Das Promise wird erfüllt, wenn der Benutzer die Zahlungsanforderung akzeptiert (zum Beispiel durch Klicken auf eine
"Bezahle"-Schaltfläche im Zahlungsfenster des Browsers).

### Ausnahmen

Ausnahmen werden nicht geworfen, sondern zurückgegeben, wenn das {{jsxref("Promise")}} abgelehnt wird.

- `AbortError` {{domxref("DOMException")}}

  - : Wird zurückgegeben, wenn der
    {{Glossary("user agent")}} bereits ein Zahlungsfenster anzeigt. Es darf zu einem Zeitpunkt nur ein Zahlungsfenster
    _über alle vom Benutzeragenten geladenen Dokumente_ hinweg sichtbar sein.

    Das Promise wird auch mit `AbortError` abgelehnt, wenn der Benutzer die Zahlungsanforderung abbricht.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die gleiche Zahlung bereits für diese Anfrage angezeigt wurde (ihr Zustand ist `interactive`, da sie bereits angezeigt wird).
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Benutzeragent die bei der Erstellung der {{domxref("PaymentRequest.PaymentRequest","PaymentRequest")}} angegebenen Zahlungsmethoden nicht unterstützt.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Aufruf von `show()` nicht als Reaktion auf eine Benutzeraktion, wie zum Beispiel ein {{domxref("Element/click_event", "Klick")}} oder {{domxref("Element/keyup_event", "Tastendruck")}}-Ereignis, erfolgt ist. Andere Gründe, warum ein `SecurityError` ausgelöst werden kann, liegen im Ermessen des Benutzeragenten und können Situationen wie zu viele Anrufe von `show()` in kurzer Zeit oder `show()`-Aufrufe, während Zahlungsanforderungen durch Kindersicherungen blockiert sind, umfassen.

## Sicherheit

[Temporäre Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Anwendungshinweise

Die gängigsten Muster für die Verwendung von `show()` umfassen entweder die
[`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await)
Syntax oder die Verwendung von `show().then().catch()`, um die Antwort und mögliche Ablehnungen zu behandeln. Diese sehen folgendermaßen aus:

### async/await Syntax

Die Verwendung von `await`, um auf die Erfüllung eines Promise zu warten, ermöglicht es, den Code zur Zahlungsbearbeitung besonders sauber zu schreiben:

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

In diesem Code überprüfen die Methoden `checkAddress()` und `checkShipping()` die geänderte Versandadresse beziehungsweise die Versandoption und liefern als Antwort entweder ein Objekt oder ein Promise zurück;
dieses Objekt enthält die Felder in der {{domxref("PaymentResponse")}}, die geändert wurden oder geändert werden müssen.

Die Methode `validateResponse()`, unten aufgeführt, wird aufgerufen, sobald `show()`
zurückkehrt, um die zurückgegebene `response` zu prüfen und entweder die Zahlung
vorzunehmen oder die Zahlung als gescheitert abzulehnen:

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

Hierbei überprüft eine benutzerdefinierte Funktion namens `checkAllValues()`, ob alle Werte im
`response` gültig sind, und gibt `true` zurück, wenn
alle Felder gültig sind, oder `false`, wenn eines nicht gültig ist. Nur wenn alle Felder
gültig sind, wird die Methode {{domxref("PaymentResponse.complete", "complete()")}} auf der
Antwort mit der Zeichenkette `"success"` aufgerufen, was angibt, dass alles
gültig ist und die Zahlung entsprechend abgeschlossen werden kann.

Sollten einige Felder unzulässige Werte haben oder sollte eine Ausnahme durch den vorherigen
Code ausgelöst werden, wird `complete()` mit der Zeichenkette `"fail"` aufgerufen, um
anzugeben, dass der Zahlungsvorgang abgeschlossen ist und fehlgeschlagen ist.

Anstelle des sofortigen Scheiterns könnten Sie auch `retry()` auf dem Antwort-Objekt verwenden, um den Benutzeragenten zu bitten, den Zahlungsvorgang erneut zu versuchen; dies sollte in der Regel nur geschehen, nachdem der Benutzer alle erforderlichen Korrekturen an der Bestellung vorgenommen hat.

Um den Zahlungsvorgang zu starten, reicht es im Endeffekt aus, die Methode
`processPayment()` aufzurufen.

### dann/catch Syntax

Sie können auch den älteren, auf Promise-basierten Ansatz verwenden, um mit Zahlungen zu arbeiten, indem Sie die
{{jsxref("Promise.then", "then()")}}- und {{jsxref("Promise.catch", "catch()")}}
Funktionen auf dem Promise verwenden, das von `show()` zurückgegeben wird:

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

Dies ist funktional äquivalent zur Methode `processPayment()` mit
`await` Syntax.

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

Sie könnten sogar `checkAllValues()` als eine synchrone Funktion haben, obwohl
dies möglicherweise Leistungsauswirkungen hat, mit denen Sie sich nicht befassen möchten:

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

Lesen Sie den Artikel [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) für weitere Informationen, wenn Sie mehr über die Arbeit mit
Promises erfahren möchten.

## Beispiele

Im folgenden Beispiel wird ein `PaymentRequest`-Objekt instanziiert, bevor die
`show()`-Methode aufgerufen wird. Diese Methode löst den eingebauten Prozess des Benutzeragenten zum Abrufen von Zahlungsinformationen vom Benutzer aus. Die Methode `show()` gibt ein {{jsxref('Promise')}} zurück, das zu einem {{domxref("PaymentResponse")}}-Objekt aufgelöst wird, wenn die Benutzerinteraktion abgeschlossen ist. Der Entwickler verwendet dann die Informationen im
`PaymentResponse`-Objekt, um Zahlungsdaten zu formatieren und an den Server zu senden.
Sie sollten die Zahlungsinformationen asynchron an den Server senden, sodass der endgültige Aufruf von {{domxref("paymentResponse.complete()")}} den Erfolg oder Misserfolg der
Zahlung angeben kann.

```js
button.onclick = async function handlePurchase() {
  // Die Initialisierung der PaymentRequest-Argumente wurde der Kürze halber
  // ausgelassen.
  const payment = new PaymentRequest(methods, details, options);
  try {
    const response = await payment.show();
    // Bearbeiten Sie hier die Antwort, einschließlich des Sendens von Zahlungsinstrumenten
    // (z.B. Kreditkarten-)Informationen an den Server.
    // paymentResponse.methodName enthält die ausgewählte Zahlungsmethode
    // paymentResponse.details enthält eine speziell für die Zahlungsmethode angepasste Antwort
    await response.complete("success");
  } catch (err) {
    console.error("Oh nein, etwas Schlimmes ist passiert", err.message);
  }
};
```

Das folgende Beispiel zeigt, wie das Zahlungsfenster aktualisiert werden kann, während es dem Endbenutzer präsentiert wird.

```js
async function requestPayment() {
  // Wir beginnen mit AU$0 als Gesamtbetrag.
  const initialDetails = {
    total: {
      label: "Gesamt",
      amount: { value: "0", currency: "AUD" },
    },
  };
  const request = new PaymentRequest(methods, initialDetails, options);
  // Prüfen, ob der Benutzer die `methods` unterstützt
  if (!(await request.canMakePayment())) {
    return; // nein, also verwenden Sie stattdessen ein Webformular.
  }
  // Lassen Sie uns die Gesamtsumme aktualisieren, während das Fenster angezeigt wird
  const updatedDetails = {
    total: {
      label: "Gesamt",
      amount: { value: "20", currency: "AUD" },
    },
  };
  const response = await request.show(updatedDetails);
  // Überprüfen Sie die Antwort usw.
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
- {{domxref('PaymentRequest.abort()')}}
- {{domxref("PaymentResponse")}}
- {{domxref("PaymentResponse.retry()")}}
- {{domxref("PaymentResponse.complete()")}}
