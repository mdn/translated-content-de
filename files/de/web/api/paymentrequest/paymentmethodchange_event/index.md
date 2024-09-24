---
title: "PaymentRequest: paymentmethodchange-Ereignis"
short-title: paymentmethodchange
slug: Web/API/PaymentRequest/paymentmethodchange_event
l10n:
  sourceCommit: 5239b2990f99352463abbe4eb643dcb4267151c7
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`paymentmethodchange`**-Ereignis wird durch die [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein {{domxref("PaymentRequest")}}-Objekt ausgeliefert, wenn der Benutzer die Zahlungsmethode innerhalb eines bestimmten Zahlungshandlers ändert.

Beispielsweise, wenn der Benutzer in seinem [Apple Pay](https://www.apple.com/apple-pay/) Konto von einer Kreditkarte zu einer anderen wechselt, wird ein `paymentmethodchange`-Ereignis ausgelöst, um Sie über die Änderung zu informieren.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("paymentmethodchange", (event) => {});

onpaymentmethodchange = (event) => {};
```

## Ereignistyp

Ein {{domxref("PaymentMethodChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften enthält diese Schnittstelle Eigenschaften, die von {{domxref("PaymentRequestUpdateEvent")}} geerbt sind._

- {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} {{ReadOnlyInline}}
  - : Ein Objekt, das zahlungsmethodenspezifische Daten enthält, die nützlich sind, wenn eine Änderung der Zahlungsmethode behandelt wird. Falls keine solchen Informationen verfügbar sind, ist dieser Wert `null`.
- {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} {{ReadOnlyInline}}
  - : Ein String, der die Zahlungsmethodenkennung enthält, ein String, der eine bestimmte Zahlungsmethode eindeutig identifiziert. Diese Kennung ist normalerweise eine URL, die während des Zahlungsvorgangs verwendet wird, kann aber auch ein standardisierter String sein, der keine URL ist, wie zum Beispiel `basic-card`. Der Standardwert ist der leere String, `""`.

## Beispiele

Werfen wir einen Blick auf ein Beispiel. Dieser Code erstellt ein neues {{domxref("PaymentRequest")}}, fügt einen Handler für das `paymentmethodchange`-Ereignis hinzu, indem er den {{domxref("EventTarget.addEventListener", "addEventListener()")}} des Requests aufruft, und ruft dann {{domxref("PaymentRequest.show", "show()")}} auf, um dem Benutzer die Zahlungsoberfläche zu präsentieren.

Der Code geht von der Existenz einer Methode `detailsForTransaction()` aus, die ein Objekt zurückgibt, das als [`details`](/de/docs/Web/API/PaymentRequest/PaymentRequest#details)-Argument an den `PaymentRequest`-Konstruktor übergeben werden kann.

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

Dies beginnt mit der Überprüfung der {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}}-Eigenschaft des Ereignisses; wenn diese anzeigt, dass der Benutzer versucht, Apple Pay zu verwenden, übergeben wir die {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} an eine Funktion namens `calculateServiceFee()`, die wir erstellen könnten, um die Informationen über die Transaktion zu nehmen, wie z. B. die zugrunde liegende Kreditkarte, die zur Bearbeitung der Apple Pay-Anfrage verwendet wird, und ein Objekt zu berechnen und zurückzugeben, das Änderungen spezifiziert, die am {{domxref("PaymentRequest")}} vorgenommen werden sollen, um etwaige Servicegebühren hinzuzufügen, die die Zahlungsmethode erfordern könnte.

Bevor der Ereignis-Handler zurückkehrt, wird die Methode {{domxref("PaymentRequestUpdateEvent.updateWith()", "updateWith()")}} des Ereignisses aufgerufen, um die Änderungen in die Anfrage zu integrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}}-Ereignis
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}}-Ereignis
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}}-Ereignis
