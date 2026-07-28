---
title: "PaymentRequest: shippingaddresschange-Ereignis"
short-title: shippingaddresschange
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`shippingaddresschange`**-Ereignis wird an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn der Benutzer eine Versandadresse auswählt oder die Details seiner Versandadresse ändert.

Dieses Ereignis kann nicht abgebrochen werden und tritt nicht in eine Blasenphase ein.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("shippingaddresschange", (event) => { })

onshippingaddresschange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Nutzungshinweise

Je nach Browser können die Informationen zur Versandadresse aus Datenschutzgründen gekürzt werden. Das heißt, die [`PaymentAddress`](/de/docs/Web/API/PaymentAddress), die die Versandadresse enthält, kann Teile ihres Inhalts verändert, verdeckt oder vollständig ausgelassen haben, um eine Identifizierung des Benutzers ohne seine Zustimmung zu verhindern (da Sie, wenn sie sich entscheiden, dass Sie Produkte an sie versenden, ihre Adresse benötigen).

## Beispiel

In diesem Beispiel wird ein Handler für das `shippingaddresschange`-Ereignis eingerichtet, um zu überprüfen, dass die Adresse die vom Webanwendung festgelegten Anforderungen erfüllt.

```js
const paymentRequest = new PaymentRequest(methodData, details, options);

paymentRequest.addEventListener("shippingaddresschange", (event) => {
  const detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
});

function checkAddress(theAddress) {
  const detailsUpdate = {};

  // Check the address, return an object with any changes or errors.

  return detailsUpdate;
}
```

Sie können auch einen Handler für `shippingaddresschange` mit der `onshippingaddresschange`-Ereignis-Handler-Eigenschaft einrichten:

```js
paymentRequest.onshippingaddresschange = (event) => {
  const detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser-Kompatibilität

{{Compat}}
