---
title: "PaymentRequest: paymentmethodchange-Ereignis"
short-title: paymentmethodchange
slug: Web/API/PaymentRequest/paymentmethodchange_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`paymentmethodchange`**-Ereignis wird vom [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt übermittelt, wenn der Benutzer die Zahlungsmethode innerhalb eines bestimmten Zahlungshandlers ändert.

Zum Beispiel, wenn der Benutzer von einer Kreditkarte zu einer anderen in seinem [Apple Pay](https://www.apple.com/apple-pay/) Konto wechselt, wird ein `paymentmethodchange`-Ereignis ausgelöst, um Sie über die Änderung zu informieren.

Dieses Ereignis ist nicht abbrechbar und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("paymentmethodchange", (event) => { })

onpaymentmethodchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten stehenden Eigenschaften umfasst diese Schnittstelle Eigenschaften, die von [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) geerbt werden._

- [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) {{ReadOnlyInline}}
  - : Ein Objekt, das zahlungsmethodenspezifische Daten enthält, die beim Umgang mit einer Änderung der Zahlungsmethode nützlich sind. Wenn keine solchen Informationen verfügbar sind, hat dieser Wert `null`.
- [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) {{ReadOnlyInline}}
  - : Ein String, der den Zahlungsmethoden-Identifikator enthält, ein String, der eine bestimmte Zahlungsmethode eindeutig identifiziert. Dieser Identifikator ist normalerweise eine URL, die während des Bezahlvorgangs verwendet wird, kann aber auch eine standardisierte Nicht-URL-Zeichenkette sein, wie `basic-card`. Der Standardwert ist der leere String, `""`.

## Beispiele

Schauen wir uns ein Beispiel an. Dieser Code erstellt eine neue [`PaymentRequest`](/de/docs/Web/API/PaymentRequest), fügt einen Handler für das `paymentmethodchange`-Ereignis hinzu, indem er die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Requests aufruft, und ruft dann [`show()`](/de/docs/Web/API/PaymentRequest/show) auf, um dem Benutzer die Zahlungsschnittstelle zu präsentieren.

Der Code setzt die Existenz einer Methode `detailsForTransaction()` voraus, die ein Objekt zurückgibt, das als [`details`](/de/docs/Web/API/PaymentRequest/PaymentRequest#details)-Argument an den `PaymentRequest`-Konstruktor übergeben werden kann.

```js
const paymentRequest = new PaymentRequest(
  paymentMethods,
  detailsForTransaction(),
);

paymentRequest.addEventListener("paymentmethodchange", handlePaymentChange);

paymentRequest
  .show()
  .then((response) => response.complete("success"))
  .catch((err) => console.error(`Error handling payment request: ${err}`));
```

Die Ereignishandlungsfunktion selbst, `handlePaymentChange()`, sieht so aus:

```js
handlePaymentChange = (event) => {
  const detailsUpdate = {};

  if (event.methodName === "https://apple.com/apple-pay") {
    const serviceFeeInfo = calculateServiceFee(event.methodDetails);
    Object.assign(detailsUpdate, serviceFeeInfo);
  }

  event.updateWith(detailsUpdate);
};
```

Dies beginnt mit der Überprüfung der [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName)-Eigenschaft des Ereignisses; wenn das anzeigt, dass der Benutzer versucht, Apple Pay zu verwenden, übergeben wir die [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) an eine Funktion namens `calculateServiceFee()`, die wir erstellen könnten, um die Informationen über die Transaktion zu verarbeiten, wie z.B. die zugrunde liegende Kreditkarte, die für die Apple Pay-Anfrage verwendet wird, und ein Objekt zu berechnen und zurückzugeben, das Änderungen spezifiziert, die an dem [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) angewendet werden sollen, um etwaige Servicegebühren hinzuzufügen, die die Zahlungsmethode erfordern könnte.

Bevor der Ereignishandler zurückkehrt, ruft er die [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith)-Methode des Ereignisses auf, um die Änderungen in die Anfrage zu integrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung des Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)-Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)-Ereignis
