---
title: "PaymentRequest: shippingaddresschange-Ereignis"
short-title: shippingaddresschange
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Das Ereignis **`shippingaddresschange`** wird an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn der Benutzer eine Lieferadresse auswählt oder Angaben zu seiner Lieferadresse ändert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("shippingaddresschange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onshippingaddresschange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Hinweise zur Verwendung

Je nach Browser können die Angaben zur Lieferadresse aus Datenschutzgründen teilweise verborgen werden. Das bedeutet, dass Inhalte der [`PaymentAddress`](/de/docs/Web/API/PaymentAddress), die die Lieferadresse enthält, verändert, unkenntlich gemacht oder vollständig weggelassen werden können. So wird verhindert, dass der Benutzer ohne seine Zustimmung identifiziert wird. Wenn er sich dafür entscheidet, dass Sie ihm Produkte zusenden, benötigen Sie seine Adresse.

## Beispiel

In diesem Beispiel wird ein Handler für das Ereignis `shippingaddresschange` eingerichtet, der überprüft, ob die Adresse die Anforderungen der Webanwendung erfüllt.

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

Sie können einen Handler für `shippingaddresschange` auch über die Event-Handler-Eigenschaft `onshippingaddresschange` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onshippingaddresschange` hinzugefügte Event-Listener ersetzt werden:

```js
paymentRequest.onshippingaddresschange = (event) => {
  const detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser-Kompatibilität

{{Compat}}
