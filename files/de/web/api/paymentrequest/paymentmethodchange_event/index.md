---
title: "PaymentRequest: paymentmethodchange Ereignis"
short-title: paymentmethodchange
slug: Web/API/PaymentRequest/paymentmethodchange_event
l10n:
  sourceCommit: 5239b2990f99352463abbe4eb643dcb4267151c7
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`paymentmethodchange`** Ereignis wird über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt gesendet, wenn der Benutzer die Zahlungsmethode innerhalb eines bestimmten Zahlungsdienstes ändert.

Zum Beispiel, wenn der Benutzer innerhalb seines [Apple Pay](https://www.apple.com/apple-pay/) Kontos von einer Kreditkarte zu einer anderen wechselt, wird ein `paymentmethodchange` Ereignis ausgelöst, um Sie über die Änderung zu informieren.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js
addEventListener("paymentmethodchange", (event) => {});

onpaymentmethodchange = (event) => {};
```

## Ereignistyp

Ein [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten stehenden Eigenschaften enthält dieses Interface auch Eigenschaften, die von [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) geerbt wurden._

- [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) {{ReadOnlyInline}}
  - : Ein Objekt, das zahlungsmethodenspezifische Daten enthält, die nützlich beim Umgang mit einer Zahlungsmethodenänderung sind. Wenn solche Informationen nicht verfügbar sind, ist dieser Wert `null`.
- [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den Bezeichner der Zahlungsmethode enthält, eine Zeichenkette, die eine bestimmte Zahlungsmethode eindeutig identifiziert. Dieser Bezeichner ist normalerweise eine URL, die während des Zahlungsvorganges verwendet wird, kann aber auch ein standardisierter, nicht-URL-String sein, wie z.B. `basic-card`. Der Standardwert ist die leere Zeichenkette, `""`.

## Beispiele

Schauen wir uns ein Beispiel an. Dieser Code erstellt ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest), fügt einen Handler für das `paymentmethodchange` Ereignis hinzu, indem er die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufruft, und ruft dann [`show()`](/de/docs/Web/API/PaymentRequest/show) auf, um die Zahlungsoberfläche dem Benutzer zu präsentieren.

Der Code geht von der Existenz einer Methode `detailsForTransaction()` aus, die ein Objekt zurückgeben wird, das als [`details`](/de/docs/Web/API/PaymentRequest/PaymentRequest#details) Argument an den `PaymentRequest` Konstruktor übergeben werden kann.

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

Die Ereignishandler-Funktion selbst, `handlePaymentChange()`, sieht folgendermaßen aus:

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

Zu Beginn wird die [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) Eigenschaft des Ereignisses überprüft; wenn diese angibt, dass der Benutzer versucht, Apple Pay zu verwenden, übergeben wir die [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) an eine Funktion namens `calculateServiceFee()`, die wir erstellen könnten, um die Informationen über die Transaktion, wie die zugrunde liegende Kreditkarte, die zur Abwicklung der Apple Pay-Anfrage verwendet wird, zu nutzen und ein Objekt zu berechnen und zu retournieren, das die Änderungen spezifiziert, die am [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) vorgenommen werden müssen, um etwaige Servicegebühren hinzuzufügen, die die Zahlungsmethode erfordern könnte.

Bevor der Ereignishandler zurückkehrt, ruft er die [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) Methode des Ereignisses auf, um die Änderungen in die Anfrage zu integrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) Ereignis
