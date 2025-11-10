---
title: "PaymentRequest: merchantvalidation Ereignis"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}

**`merchantvalidation`**-Ereignisse werden von der [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn ein Zahlungsabwickler verlangt, dass der Händler, der den Kauf anfordert, sich als berechtigt zur Nutzung des Zahlungsabwicklers validiert.

Erfahren Sie, wie der [Händler-Validierungsprozess](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("merchantvalidation", (event) => { })

onmerchantvalidation = (event) => { }
```

## Ereignistyp

Ein [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MerchantValidationEvent")}}

## Ereigniseigenschaften

- [`MerchantValidationEvent.methodName`](/de/docs/Web/API/MerchantValidationEvent/methodName)
  - : Ein String, der einen eindeutigen Zahlungsmethoden-Identifikator für den Zahlungsabwickler bereitstellt, der die Validierung erfordert. Dies kann entweder einer der standardmäßigen Zahlungsmethoden-Identifikationsstrings oder eine URL sein, die sowohl den Zahlungsabwickler identifiziert als auch Anfragen für diesen bearbeitet, wie z.B. `https://apple.com/apple-pay`.
- [`MerchantValidationEvent.validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL)
  - : Ein String, der eine URL spezifiziert, von der die Webseite oder App zahlungsabwicklerspezifische Validierungsinformationen abrufen kann. Sobald diese Daten abgerufen wurden, sollten die Daten (oder ein Versprechen, das zu den Validierungsdaten führt) in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden, um zu validieren, dass die Zahlungsanfrage von einem autorisierten Händler stammt.

## Beispiele

In diesem Beispiel wird ein Ereignishandler für das `merchantvalidation`-Ereignis eingerichtet. Es verwendet die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode, um eine Anfrage an den eigenen Server mit einem Argument der Validierungs-URL der Zahlungsmethode zu senden, die aus der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL)-Eigenschaft des Ereignisses erhalten wurde. Der Händler-Server sollte die Validierungs-URL gemäß der Dokumentation der Zahlungsmethode aufrufen. Typischerweise sollte ein Client die Validierungs-URL nicht aufrufen.

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

Wie der Händler-Server die Validierung behandelt, hängt von der Serverimplementierung und der Dokumentation der Zahlungsmethode ab. Der Inhalt, der vom Validierungsserver bereitgestellt wird, wird an den Händler-Server weitergeleitet und dann aus dem Erfüllungshandler des `fetch()`-Aufrufs an die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode des Ereignisses zurückgegeben. Diese Antwort lässt den Zahlungsabwickler wissen, ob der Händler validiert ist.

Sie können auch die `onmerchantvalidation`-Ereignishandler-Eigenschaft verwenden, um den Handler für dieses Ereignis einzurichten:

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
