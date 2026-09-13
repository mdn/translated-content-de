---
title: "PaymentRequest: merchantvalidation Ereignis"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{non-standard_header}}

**`merchantvalidation`** Ereignisse werden vom [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt übermittelt, wenn ein Zahlungsanbieter verlangt, dass der Händler, der den Kauf anfordert, sich als berechtigt zur Nutzung des Zahlungsanbieters validiert.

Erfahren Sie, wie der [Händler-Validierungsprozess](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("merchantvalidation", (event) => { })

onmerchantvalidation = (event) => { }
```

## Ereignistyp

Ein [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MerchantValidationEvent")}}

## Beispiele

In diesem Beispiel wird ein Ereignishandler für das `merchantvalidation` Ereignis eingerichtet. Er verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an seinen eigenen Server mit einem Argument der Validierungs-URL der Zahlungsmethode zu senden, die aus der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) Eigenschaft des Ereignisses abgerufen wird. Der Händler-Server sollte die Validierungs-URL gemäß der Dokumentation der Zahlungsmethode aufrufen. Typischerweise sollte ein Client nicht auf die Validierungs-URL zugreifen.

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

Wie der Händler-Server die Validierung behandelt, hängt von der Implementierung des Servers und der Dokumentation der Zahlungsmethode ab. Der vom Validierungsserver bereitgestellte Inhalt wird an den Händler-Server weitergeleitet und dann im Erfolgs-Handler des `fetch()` Aufrufs an die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) Methode des Ereignisses zurückgegeben. Diese Antwort informiert den Zahlungsanbieter darüber, ob der Händler validiert ist.

Sie können auch die `onmerchantvalidation` Ereignis-Handler-Eigenschaft verwenden, um den Handler für dieses Ereignis einzurichten:

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

Für weitere Informationen siehe [Händler-Validierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung des Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- `onmerchantvalidation` Ereignis-Handler-Eigenschaft
- [Händler-Validierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation)
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event) Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) Ereignis
