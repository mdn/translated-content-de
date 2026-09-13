---
title: "PaymentRequest: shippingaddresschange-Ereignis"
short-title: shippingaddresschange
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Das **`shippingaddresschange`**-Ereignis wird an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn der Benutzer eine Versandadresse auswählt oder Details seiner Versandadresse ändert.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("shippingaddresschange", (event) => { })

onshippingaddresschange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Nutzungshinweise

Abhängig vom Browser können die Informationen zur Versandadresse aus Datenschutzgründen redigiert werden. Das heißt, die [`PaymentAddress`](/de/docs/Web/API/PaymentAddress), die die Versandadresse enthält, kann in einigen Teilen ihres Inhalts geändert, verdeckt oder vollständig weggelassen sein, um zu verhindern, dass der Benutzer ohne seine Zustimmung identifiziert wird (da Sie, wenn sie sich entscheiden, dass Sie Produkte an sie versenden sollen, ihre Adresse benötigen).

## Beispiel

In diesem Beispiel wird ein Handler für das `shippingaddresschange`-Ereignis eingerichtet, um zu validieren, dass die Adresse die von der Webanwendung festgelegten Anforderungen erfüllt.

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

Sie können auch einen Handler für `shippingaddresschange` mit der `onshippingaddresschange`-Ereignis-Handler-Eigenschaft festlegen:

```js
paymentRequest.onshippingaddresschange = (event) => {
  const detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser-Kompatibilität

{{Compat}}
