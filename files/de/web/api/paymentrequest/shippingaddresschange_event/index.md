---
title: "PaymentRequest: shippingaddresschange Ereignis"
short-title: shippingaddresschange
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`shippingaddresschange`** Ereignis wird an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt gesendet, wenn der Benutzer eine Lieferadresse auswählt oder Details seiner Lieferadresse ändert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("shippingaddresschange", (event) => { })

onshippingaddresschange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die von [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften._

## Hinweise zur Verwendung

Abhängig vom Browser können die Informationen zur Lieferadresse aus Datenschutzgründen unkenntlich gemacht werden. Das bedeutet, dass die [`PaymentAddress`](/de/docs/Web/API/PaymentAddress), die die Lieferadresse enthält, möglicherweise einige Teile ihres Inhalts verändert, verdeckt oder vollständig weggelassen werden, um eine Identifizierung des Benutzers ohne seine Zustimmung zu verhindern (da Sie, wenn sie entscheiden, dass Sie Produkte an sie versenden sollen, ihre Adresse benötigen).

## Beispiel

In diesem Beispiel wird ein Handler für das `shippingaddresschange` Ereignis eingerichtet, um zu überprüfen, ob die Adresse die vom Webanwendung festgelegten Anforderungen erfüllt.

```js
const paymentRequest = new PaymentRequest(methodData, details, options);

paymentRequest.addEventListener(
  "shippingaddresschange",
  (event) => {
    let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
    event.updateWith(detailsUpdate);
  },
  false,
);

const checkAddress = (theAddress) => {
  let detailsUpdate = {};

  // Check the address, return an object with any changes or errors.

  return detailsUpdate;
};
```

Sie können auch einen Handler für `shippingaddresschange` über die `onshippingaddresschange` Ereignis-Handler-Eigenschaft einrichten:

```js
paymentRequest.onshippingaddresschange = (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser-Kompatibilität

{{Compat}}
