---
title: "PaymentRequest: shippingaddresschange-Ereignis"
short-title: shippingaddresschange
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`shippingaddresschange`**-Ereignis wird an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn der Benutzer eine Versandadresse auswählt oder Details seiner Versandadresse ändert.

Dieses Ereignis ist nicht abbruchbar und löst keine Bubbling-Effekte aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("shippingaddresschange", (event) => { })

onshippingaddresschange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die von [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften._

## Nutzungshinweise

Je nach Browser können Informationen zur Versandadresse aus Datenschutzgründen unkenntlich gemacht werden. Das heißt, die [`PaymentAddress`](/de/docs/Web/API/PaymentAddress), die die Versandadresse enthält, kann einige Teile ihres Inhalts geändert, verschleiert oder vollständig ausgelassen haben, um zu verhindern, dass der Benutzer ohne seine Zustimmung identifiziert wird (da Sie, wenn sie sich entscheiden, Produkte an Sie versenden zu lassen, deren Adresse benötigen).

## Beispiel

In diesem Beispiel wird ein Handler für das `shippingaddresschange`-Ereignis eingerichtet, um zu validieren, dass die Adresse den vom Webanwendung festgelegten Anforderungen entspricht.

```js
const paymentRequest = new PaymentRequest(methodData, details, options);

paymentRequest.addEventListener("shippingaddresschange", (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
});

const checkAddress = (theAddress) => {
  let detailsUpdate = {};

  // Check the address, return an object with any changes or errors.

  return detailsUpdate;
};
```

Sie können auch einen Handler für `shippingaddresschange` über die `onshippingaddresschange`-Ereignishandler-Eigenschaft festlegen:

```js
paymentRequest.onshippingaddresschange = (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser-Kompatibilität

{{Compat}}
