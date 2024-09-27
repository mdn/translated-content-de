---
title: "PaymentRequest: merchantvalidation-Ereignis"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}

**`merchantvalidation`**-Ereignisse werden vom [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt gesendet, wenn ein Zahlungsabwickler verlangt, dass der Händler, der den Kauf anfordert, sich als berechtigt zur Nutzung des Zahlungsabwicklers validiert.

Erfahren Sie, wie der [Händler-validierungsprozess](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

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
  - : Ein String, der eine eindeutige Zahlungsabwicklungsmethode für den Zahlungsabwickler bereitstellt, der eine Validierung erfordert. Dies kann entweder einer der standardmäßigen Zahlungsabwicklungs-Identifikationsstrings sein oder eine URL, die sowohl den Zahlungsabwickler identifiziert als auch Anfragen für den Zahlungsabwickler behandelt, wie `https://apple.com/apple-pay`.
- [`MerchantValidationEvent.validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL)
  - : Ein String, der eine URL angibt, von der die Seite oder App zahlungsspezifische Validierungsinformationen abrufen kann. Sobald diese Daten abgerufen wurden, sollten die Daten (oder ein Promise, das sich zu den Validierungsdaten auflöst) an [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden, um zu bestätigen, dass die Zahlungsanforderung von einem autorisierten Händler stammt.

## Beispiele

In diesem Beispiel wird ein Ereignis-Handler für das `merchantvalidation`-Ereignis eingerichtet. Er verwendet die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode, um eine Anfrage an den eigenen Server mit einem Argument der Validierungs-URL der Zahlungsmethode zu senden, das aus der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL)-Eigenschaft des Ereignisses erhalten wird. Der Händler-Server sollte die Validierungs-URL gemäß der Dokumentation der Zahlungsmethode aufrufen. Normalerweise sollte ein Client die Validierungs-URL nicht aufrufen.

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

Wie der Händler-Server die Validierung behandelt, hängt von der Serverimplementierung und der Dokumentation der Zahlungsmethode ab. Der Inhalt, der vom Validierungsserver geliefert wird, wird zum Händler-Server weitergeleitet und dann vom Fulfillment-Handler des `fetch()`-Aufrufs an die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode im Ereignis zurückgegeben. Diese Antwort zeigt dem Zahlungsabwickler an, ob der Händler validiert ist.

Sie können auch die `onmerchantvalidation`-Ereignis-Handler-Eigenschaft verwenden, um den Handler für dieses Ereignis einzurichten:

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
- `onmerchantvalidation`-Ereignis-Handler-Eigenschaft
- [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation)
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)-Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)-Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)-Ereignis
