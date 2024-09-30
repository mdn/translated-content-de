---
title: "PaymentRequest: merchantvalidation Ereignis"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}

**`merchantvalidation`** Ereignisse werden vom [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekt gesendet, wenn ein Zahlungshandler erfordert, dass der Händler, der den Kauf anfragt, sich als berechtigt identifiziert, den Zahlungshandler zu nutzen.

Erfahren Sie, wie der [Händlervalidierungsprozess](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("merchantvalidation", (event) => {});

onmerchantvalidation = (event) => {};
```

## Ereignistyp

Ein [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MerchantValidationEvent")}}

## Ereigniseigenschaften

- [`MerchantValidationEvent.methodName`](/de/docs/Web/API/MerchantValidationEvent/methodName)
  - : Ein String, der eine eindeutige Zahlungsidentifikationsmethode für den Zahlungshandler bereitstellt, der eine Validierung erfordert. Dies kann entweder einer der Standard-Zahlungsmethoden-Identifikationsstrings oder eine URL sein, die sowohl identifiziert als auch Anfragen für den Zahlungshandler behandelt, wie z. B. `https://apple.com/apple-pay`.
- [`MerchantValidationEvent.validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL)
  - : Ein String, der eine URL angibt, von der die Website oder App spezifische Validierungsinformationen des Zahlungshandlers abrufen kann. Sobald diese Daten abgerufen sind, sollten die Daten (oder ein Versprechen, das die Validierungsdaten auflöst) in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden, um zu bestätigen, dass die Zahlungsanforderung von einem autorisierten Händler stammt.

## Beispiele

In diesem Beispiel wird ein Ereignishandler für das `merchantvalidation` Ereignis eingerichtet. Er verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an seinen eigenen Server mit einem Argument der Validierungs-URL der Zahlungsmethode zu senden, die von der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) Eigenschaft des Ereignisses bezogen wurde. Der Händler-Server sollte die Validierungs-URL gemäß der Zahlungshandlerrichtlinien aufrufen. Normalerweise sollte ein Client die Validierungs-URL nicht aufrufen.

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

Wie der Händler-Server die Validierung handhabt, hängt von der Serverimplementierung und den Zahlungshandlerrichtlinien ab. Der vom Validierungsserver bereitgestellte Inhalt wird an den Händler-Server weitergeleitet und dann vom Erfüllungshandler des `fetch()`-Aufrufs an die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) Methode des Ereignisses zurückgegeben. Diese Antwort gibt dem Zahlungshandler an, ob der Händler validiert ist.

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

Weitere Informationen finden Sie unter [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung des Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- `onmerchantvalidation` Ereignis-Handler-Eigenschaft
- [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation)
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event) Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) Ereignis
