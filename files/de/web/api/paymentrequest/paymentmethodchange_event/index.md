---
title: "PaymentRequest: paymentmethodchange Ereignis"
short-title: paymentmethodchange
slug: Web/API/PaymentRequest/paymentmethodchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`paymentmethodchange`** Ereignis wird vom [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt gesendet, wenn der Benutzer die Zahlungsmethode innerhalb eines bestimmten Zahlungsdienstleisters ändert.

Zum Beispiel, wenn der Benutzer von einer Kreditkarte zu einer anderen in seinem [Apple Pay](https://www.apple.com/apple-pay/) Konto wechselt, wird ein `paymentmethodchange` Ereignis ausgelöst, um Ihnen die Änderung mitzuteilen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("paymentmethodchange", (event) => { })

onpaymentmethodchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den untenstehenden Eigenschaften enthält dieses Interface Eigenschaften, die von [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) geerbt werden._

- [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) {{ReadOnlyInline}}
  - : Ein Objekt, das zahlungsmethodenspezifische Daten enthält, die nützlich sind, wenn eine Änderung der Zahlungsmethode bearbeitet wird. Wenn keine solchen Informationen verfügbar sind, ist dieser Wert `null`.
- [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) {{ReadOnlyInline}}
  - : Ein String, der den Bezeichner der Zahlungsmethode enthält, ein String, der eine bestimmte Zahlungsmethode eindeutig identifiziert. Dieser Bezeichner ist meist eine URL, die während des Zahlungsvorgangs verwendet wird, kann jedoch auch ein standardisierter, nicht-URL-String wie `basic-card` sein. Der Standardwert ist der leere String, `""`.

## Beispiele

Schauen wir uns ein Beispiel an. Dieser Code erstellt einen neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest), fügt einen Handler für das `paymentmethodchange` Ereignis hinzu, indem er die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Requests aufruft, und ruft dann [`show()`](/de/docs/Web/API/PaymentRequest/show) auf, um die Zahlungsoberfläche dem Benutzer zu präsentieren.

Der Code setzt die Existenz einer Methode `detailsForTransaction()` voraus, die ein Objekt zurückgibt, das als [`details`](/de/docs/Web/API/PaymentRequest/PaymentRequest#details) Argument an den `PaymentRequest` Konstruktor übergeben werden kann.

```js
const paymentRequest = new PaymentRequest(
  paymentMethods,
  detailsForTransaction(),
);

paymentRequest.addEventListener(
  "paymentmethodchange",
  handlePaymentChange,
  false,
);

paymentRequest
  .show()
  .then((response) => response.complete("success"))
  .catch((err) => console.error(`Error handling payment request: ${err}`));
```

Die Ereignis-Handler-Funktion selbst, `handlePaymentChange()`, sieht so aus:

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

Sie beginnt damit, die [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) Eigenschaft des Ereignisses zu überprüfen; falls diese anzeigt, dass der Benutzer versucht, Apple Pay zu verwenden, übergeben wir die [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) an eine Funktion namens `calculateServiceFee()`, die wir erstellen könnten, um Informationen über die Transaktion zu nehmen, wie die zugrunde liegende Kreditkarte zur Abwicklung der Apple Pay-Anfrage, und ein Objekt zu berechnen und zurückzugeben, das Änderungen angibt, die auf den [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) angewendet werden sollen, um eventuell erforderliche Servicegebühren der Zahlungsmethode hinzuzufügen.

Bevor der Ereignis-Handler zurückgibt, ruft er die [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) Methode des Ereignisses auf, um die Änderungen in die Anfrage zu integrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung des Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) Ereignis
