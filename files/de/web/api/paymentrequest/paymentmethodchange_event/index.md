---
title: "PaymentRequest: paymentmethodchange Ereignis"
short-title: paymentmethodchange
slug: Web/API/PaymentRequest/paymentmethodchange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`paymentmethodchange`** Ereignis wird über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn der Benutzer die Zahlungsmethode innerhalb eines bestimmten Zahlungshandlers ändert.

Wenn der Benutzer beispielsweise von einer Kreditkarte zu einer anderen in seinem [Apple Pay](https://www.apple.com/apple-pay/) Konto wechselt, wird ein `paymentmethodchange` Ereignis ausgelöst, um Sie über die Änderung zu informieren.

Dieses Ereignis ist nicht abbrechbar und wird nicht geblubbert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("paymentmethodchange", (event) => { })

onpaymentmethodchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## Beispiele

Werfen wir einen Blick auf ein Beispiel. Dieser Code erstellt ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest), fügt einen Handler für das `paymentmethodchange` Ereignis hinzu, indem er die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode des Requests aufruft und anschließend [`show()`](/de/docs/Web/API/PaymentRequest/show) aufruft, um die Zahlungsoberfläche dem Benutzer zu präsentieren.

Der Code geht von der Existenz einer Methode `detailsForTransaction()` aus, die ein Objekt zurückgibt, das als [`details`](/de/docs/Web/API/PaymentRequest/PaymentRequest#details)-Argument an den `PaymentRequest`-Konstruktor übergeben werden kann.

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

Die Ereignis-Handler-Funktion selbst, `handlePaymentChange()`, sieht folgendermaßen aus:

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

Dies beginnt, indem es die [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName)-Eigenschaft des Ereignisses betrachtet; wenn diese anzeigt, dass der Benutzer versucht, Apple Pay zu verwenden, übergeben wir die [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) an eine Funktion namens `calculateServiceFee()`. Diese Funktion könnten wir erstellen, um die Informationen über die Transaktion, wie z. B. die zugrunde liegende Kreditkarte, die zur Bearbeitung der Apple Pay-Anfrage verwendet wird, zu nehmen und ein Objekt zu berechnen und zurückzugeben, das Änderungen angibt, die auf das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) angewendet werden sollen, um gegebenenfalls erforderliche Servicegebühren für die Zahlungsmethode hinzuzufügen.

Bevor der Ereignis-Handler zurückkehrt, ruft er die [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith)-Methode des Ereignisses auf, um die Änderungen in die Anfrage zu integrieren.

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
