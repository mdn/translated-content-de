---
title: "PaymentRequest: paymentmethodchange-Ereignis"
short-title: paymentmethodchange
slug: Web/API/PaymentRequest/paymentmethodchange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das Ereignis **`paymentmethodchange`** wird von der [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn der Benutzer die Zahlungsmethode innerhalb eines bestimmten Zahlungsdienstes ändert.

Wenn der Benutzer beispielsweise in seinem [Apple Pay](https://www.apple.com/apple-pay/)-Konto von einer Kreditkarte zu einer anderen wechselt, wird ein `paymentmethodchange`-Ereignis ausgelöst, um Sie über die Änderung zu informieren.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("paymentmethodchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpaymentmethodchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## Beispiele

Betrachten wir ein Beispiel. Dieser Code erstellt ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest), fügt durch Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem Request einen Handler für das Ereignis `paymentmethodchange` hinzu und ruft anschließend [`show()`](/de/docs/Web/API/PaymentRequest/show) auf, um dem Benutzer die Zahlungsschnittstelle anzuzeigen.

Der Code setzt voraus, dass eine Methode `detailsForTransaction()` vorhanden ist. Sie gibt ein Objekt zurück, das als Argument [`details`](/de/docs/Web/API/PaymentRequest/PaymentRequest#details) an den `PaymentRequest`-Konstruktor übergeben werden kann.

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

Die Event-Handler-Funktion `handlePaymentChange()` selbst sieht so aus:

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

Zunächst wird die Eigenschaft [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) des Ereignisses geprüft. Wenn sie anzeigt, dass der Benutzer Apple Pay verwenden möchte, übergeben wir [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) an eine Funktion namens `calculateServiceFee()`. Diese Funktion könnten wir so implementieren, dass sie anhand von Informationen zur Transaktion – etwa der Kreditkarte, mit der die Apple-Pay-Zahlung abgewickelt wird – ein Objekt berechnet und zurückgibt. Dieses Objekt legt die Änderungen fest, die am [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) vorgenommen werden müssen, um etwaige Gebühren der Zahlungsmethode hinzuzufügen.

Bevor der Event-Handler zurückkehrt, ruft er die Methode [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) des Ereignisses auf, um die Änderungen in den Request zu übernehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- Ereignis [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)
- Ereignis [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)
- Ereignis [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)
