---
title: "PaymentRequest: merchantvalidation Ereignis"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{non-standard_header}}

**`merchantvalidation`** Ereignisse werden von der [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt geliefert, wenn ein Zahlungsabwickler erfordert, dass der Händler, der den Kauf anfordert, sich als berechtigt validiert, den Zahlungsabwickler zu verwenden.

Erfahren Sie, wie der [Händler-Validierungsprozess](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

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

In diesem Beispiel wird ein Ereignis-Handler für das `merchantvalidation` Ereignis eingerichtet. Es verwendet die [`fetch()`](/de/docs/Web/API/Window/fetch) Funktion, um eine Anfrage an seinen eigenen Server mit einem Argument der Validierungs-URL des Zahlungsmittels zu senden, die über die [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) Eigenschaft des Ereignisses erhalten wird. Der Händler-Server sollte die Validierungs-URL gemäß der Dokumentation des Zahlungsmittels aufrufen. Typischerweise sollte ein Client die Validierungs-URL nicht direkt aufrufen.

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

Wie der Händler-Server die Validierung durchführt, hängt von der Server-Implementierung und der Dokumentation des Zahlungsmittels ab. Der vom Validierungs-Server gelieferte Inhalt wird an den Händler-Server weitergeleitet und dann vom Erfüllungs-Handler des `fetch()` Aufrufs an die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) Methode auf dem Ereignis zurückgegeben. Diese Antwort informiert den Zahlungsabwickler darüber, ob der Händler validiert ist.

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
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- `onmerchantvalidation` Ereignis-Handler-Eigenschaft
- [Händler-Validierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation)
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event) Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) Ereignis
