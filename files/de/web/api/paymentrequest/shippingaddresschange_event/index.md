---
title: "PaymentRequest: shippingaddresschange-Ereignis"
short-title: shippingaddresschange
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`shippingaddresschange`**-Ereignis wird dem [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn der Benutzer eine Versandadresse auswählt oder Details seiner Versandadresse ändert.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("shippingaddresschange", (event) => {});

onshippingaddresschange = (event) => {};
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die Eigenschaften, die von [`Event`](/de/docs/Web/API/Event) geerbt wurden._

## Verwendungshinweise

Je nach Browser können die Informationen zur Versandadresse aus Datenschutzgründen unkenntlich gemacht werden. Das heißt, dass die [`PaymentAddress`](/de/docs/Web/API/PaymentAddress), die die Versandadresse enthält, möglicherweise in Teilen ihres Inhalts geändert, verdeckt oder vollständig ausgelassen wird, um die Identifizierung des Nutzers ohne seine Zustimmung zu verhindern (da Sie, wenn sie wählen, dass Sie Produkte an sie versenden, deren Adresse benötigen).

## Beispiel

In diesem Beispiel wird ein Handler für das `shippingaddresschange`-Ereignis eingerichtet, um zu überprüfen, ob die Adresse die vom Web-Anwendung festgelegten Anforderungen erfüllt.

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

Sie können auch einen Handler für `shippingaddresschange` mit der `onshippingaddresschange`-Ereignis-Handler-Eigenschaft einrichten:

```js
paymentRequest.onshippingaddresschange = (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser-Kompatibilität

{{Compat}}
