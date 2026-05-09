---
title: "PaymentRequest: merchantvalidation event"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{non-standard_header}}

**`merchantvalidation`**-Ereignisse werden vom [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt übermittelt, wenn ein Zahlungshandler verlangt, dass der Händler, der den Kauf anfordert, sich als berechtigt zur Nutzung des Zahlungshandlers validiert.

Erfahren Sie, wie der [Merchant-Validierungsprozess](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("merchantvalidation", (event) => { })

onmerchantvalidation = (event) => { }
```

## Ereignistyp

Ein [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MerchantValidationEvent")}}

## Ereigniseigenschaften

- [`MerchantValidationEvent.methodName`](/de/docs/Web/API/MerchantValidationEvent/methodName)
  - : Ein String, der eine eindeutige Zahlungsmetoden-Identifier für den Zahlungshandler bereitstellt, der die Validierung erfordert. Dies kann entweder einer der standardmäßigen Zahlungsmetoden-Identifier-Strings sein oder eine URL, die sowohl die Zahlungsanfrage identifiziert als auch bearbeitet, wie z. B. `https://apple.com/apple-pay`.
- [`MerchantValidationEvent.validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL)
  - : Ein String, der eine URL angibt, von der die Website oder App zahlungsspezifische Validierungsinformationen abrufen kann. Sobald diese Daten abgerufen sind, sollten die Daten (oder ein Promise, das die Validierungsdaten auflöst) in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) überführt werden, um zu validieren, dass die Zahlungsanfrage von einem autorisierten Händler stammt.

## Beispiele

In diesem Beispiel wird ein Ereignishandler für das `merchantvalidation`-Ereignis eingerichtet. Der Handler verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an seinen eigenen Server mit dem Argument der Validierungs-URL der Zahlungsmethode zu senden, die aus der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL)-Eigenschaft des Ereignisses bezogen wird. Der Händlerserver sollte die Validierungs-URL gemäß der Zahlungsmetodendokumentation aufrufen. Normalerweise sollte ein Client die Validierungs-URL nicht direkt aufrufen.

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

Wie der Händlerserver die Validierung behandelt, hängt von der Serverimplementierung und der Dokumentation der Zahlungsmethode ab. Der Inhalt, der vom Validierungsserver geliefert wird, wird an den Händlerserver weitergeleitet und dann vom Erfüllungshandler des `fetch()`-Aufrufs an die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode des Ereignisses zurückgegeben. Diese Antwort teilt dem Zahlungshandler mit, ob der Händler validiert wurde.

Sie können auch die Ereignishandler-Eigenschaft `onmerchantvalidation` verwenden, um den Handler für dieses Ereignis einzurichten:

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

Für weitere Informationen siehe [Merchant Validation](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung des Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- `onmerchantvalidation` Ereignishandler-Eigenschaft
- [Merchant Validation](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation)
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event) Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) Ereignis
