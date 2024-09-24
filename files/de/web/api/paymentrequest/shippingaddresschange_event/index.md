---
title: "PaymentRequest: shippingaddresschange Ereignis"
short-title: shippingaddresschange
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`shippingaddresschange`** Ereignis wird an das {{domxref("PaymentRequest")}} Objekt gesendet, wenn der Benutzer eine Lieferadresse auswählt oder Details seiner Lieferadresse ändert.

Dieses Ereignis ist nicht abbruchsbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("shippingaddresschange", (event) => {});

onshippingaddresschange = (event) => {};
```

## Ereignistyp

Ein {{domxref("PaymentRequestUpdateEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die von {{domxref("Event")}} geerbten Eigenschaften._

## Verwendungshinweise

Abhängig vom Browser können die Informationen zur Lieferadresse aus Datenschutzgründen unkenntlich gemacht werden. Das heißt, die {{domxref("PaymentAddress")}}, die die Lieferadresse enthält, kann in einigen Teilen ihres Inhalts verändert, verdeckt oder vollständig ausgelassen werden, um eine Identifizierung des Benutzers ohne dessen Zustimmung zu verhindern (da Sie, wenn er sich entscheidet, dass Sie ihm Produkte zusenden, seine Adresse benötigen).

## Beispiel

In diesem Beispiel wird ein Handler für das `shippingaddresschange` Ereignis eingerichtet, um zu validieren, dass die Adresse die von der Webanwendung festgelegten Anforderungen erfüllt.

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

  // Überprüfen Sie die Adresse, geben Sie ein Objekt mit Änderungen oder Fehlern zurück.

  return detailsUpdate;
};
```

Sie können auch einen Handler für `shippingaddresschange` mit der `onshippingaddresschange` Ereignishandler-Eigenschaft festlegen:

```js
paymentRequest.onshippingaddresschange = (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser-Kompatibilität

{{Compat}}
