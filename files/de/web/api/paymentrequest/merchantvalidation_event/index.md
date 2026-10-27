---
title: "PaymentRequest: merchantvalidation-Ereignis"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{non-standard_header}}

**`merchantvalidation`**-Ereignisse werden von der [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt übermittelt, wenn ein Zahlungsabwickler verlangt, dass der Händler, der die Zahlung anfordert, nachweist, dass er den Zahlungsabwickler verwenden darf.

Erfahren Sie, wie die [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("merchantvalidation", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmerchantvalidation = (event) => { }
```

## Ereignistyp

Ein [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MerchantValidationEvent")}}

## Beispiele

In diesem Beispiel wird ein Ereignishandler für das `merchantvalidation`-Ereignis eingerichtet. Er verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an den eigenen Server zu senden. Als Argument übergibt er die Validierungs-URL der Zahlungsmethode, die er aus der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL)-Eigenschaft des Ereignisses erhält. Der Server des Händlers sollte gemäß der Dokumentation der Zahlungsmethode auf die Validierungs-URL zugreifen. In der Regel sollte ein Client nicht auf die Validierungs-URL zugreifen.

```js
request.addEventListener("merchantvalidation", (event) => {
  event.complete(async () => {
    const merchantServerUrl = `${
      window.location.origin
    }/validate?url=${encodeURIComponent(event.validationURL)}`;
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then((response) => response.text());
  }, false);
});

const response = await request.show();
```

Wie der Server des Händlers die Validierung durchführt, hängt von der Serverimplementierung und der Dokumentation der Zahlungsmethode ab. Der vom Validierungsserver gelieferte Inhalt wird an den Server des Händlers weitergeleitet und anschließend vom Fulfillment-Handler des `fetch()`-Aufrufs an die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode des Ereignisses zurückgegeben. Durch diese Antwort erfährt der Zahlungsabwickler, ob der Händler validiert wurde.

Sie können den Handler für dieses Ereignis auch über die Ereignishandler-Eigenschaft `onmerchantvalidation` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmerchantvalidation` hinzugefügte Ereignis-Listener ersetzt werden:

```js
request.onmerchantvalidation = (event) => {
  event.complete(async () => {
    const merchantServerUrl = `${
      window.location.origin
    }/validate?url=${encodeURIComponent(event.validationURL)}`;
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then((response) => response.text());
  });
};

const response = await request.show();
```

Weitere Informationen finden Sie unter [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Die Payment Request API verwenden](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- Ereignishandler-Eigenschaft `onmerchantvalidation`
- [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation)
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)-Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)-Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)-Ereignis
