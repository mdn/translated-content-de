---
title: "PaymentRequest: shippingaddresschange Ereignis"
short-title: shippingaddresschange
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`shippingaddresschange`**-Ereignis wird an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn der Benutzer eine Versandadresse auswählt oder die Details seiner Versandadresse ändert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js
addEventListener("shippingaddresschange", (event) => {});

onshippingaddresschange = (event) => {};
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die Eigenschaften, die von [`Event`](/de/docs/Web/API/Event) geerbt werden._

## Verwendungshinweise

Je nach Browser kann die Versandadresse aus Datenschutzgründen unkenntlich gemacht werden. Das heißt, das [`PaymentAddress`](/de/docs/Web/API/PaymentAddress), das die Versandadresse enthält, kann einige Teile seines Inhalts verändert, verschleiert oder vollständig weggelassen haben, um zu verhindern, dass der Benutzer ohne seine Zustimmung identifiziert wird (da Sie, wenn der Benutzer wählt, dass Sie Produkte an ihn versenden, seine Adresse benötigen).

## Beispiel

In diesem Beispiel wird ein Handler für das `shippingaddresschange`-Ereignis eingerichtet, um zu validieren, dass die Adresse die vom Webanwendung festgelegten Anforderungen erfüllt.

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

Sie können auch einen Handler für `shippingaddresschange` mit der Ereignisbehandlungseigenschaft `onshippingaddresschange` einrichten:

```js
paymentRequest.onshippingaddresschange = (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser-Kompatibilität

{{Compat}}
