---
title: "PaymentRequest: merchantvalidation Ereignis"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}

**`merchantvalidation`** Ereignisse werden von der [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein {{domxref("PaymentRequest")}} Objekt geliefert, wenn ein Zahlungshandler verlangt, dass der Händler, der den Kauf anfragt, sich als berechtigt validieren muss, den Zahlungshandler zu verwenden.

Erfahren Sie, wie der [Händlervalidierungsprozess](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) funktioniert.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling-Effekte aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("merchantvalidation", (event) => {});

onmerchantvalidation = (event) => {};
```

## Ereignistyp

Ein {{domxref("MerchantValidationEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MerchantValidationEvent")}}

## Ereigniseigenschaften

- {{domxref("MerchantValidationEvent.methodName")}}
  - : Ein String, der eine eindeutige Zahlungsmethodenkennung für den Zahlungshandler angibt, der eine Validierung erfordert. Dies kann entweder einer der standardmäßigen Zahlungsmethoden-Identifier-Strings oder eine URL sein, die sowohl identifiziert als auch Anfragen für den Zahlungshandler bearbeitet, wie `https://apple.com/apple-pay`.
- {{domxref("MerchantValidationEvent.validationURL")}}
  - : Ein String, der eine URL angibt, von der die Website oder App zahlungshandler-spezifische Validierungsinformationen abrufen kann. Sobald diese Daten abgerufen sind, sollten die Daten (oder ein Versprechen, das zu den Validierungsdaten aufgelöst wird) in {{domxref("MerchantValidationEvent.complete", "complete()")}} übergeben werden, um zu validieren, dass die Zahlungsanforderung von einem autorisierten Händler kommt.

## Beispiele

In diesem Beispiel wird ein Event-Handler für das `merchantvalidation` Ereignis eingerichtet. Er verwendet {{domxref("Window/fetch", "fetch()")}}, um eine Anfrage an den eigenen Server mit einem Argument der Validierungs-URL der Zahlungsmethode zu senden, die aus der {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} Eigenschaft des Ereignisses abgerufen wird. Der Händler-Server sollte auf die Validierungs-URL gemäß der Dokumentation der Zahlungsmethode zugreifen. Normalerweise sollte ein Client die Validierungs-URL nicht direkt aufrufen.

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

Wie der Händler-Server die Validierung behandelt, hängt von der Server-Implementierung und der Zahlungsmethoden-Dokumentation ab. Der Inhalt, der vom Validierungsserver geliefert wird, wird an den Händler-Server weitergeleitet und dann vom Erfüllungshandler des `fetch()`-Aufrufs an die {{domxref("MerchantValidationEvent.complete", "complete()")}} Methode im Ereignis zurückgegeben. Diese Antwort teilt dem Zahlungshandler mit, ob der Händler validiert ist.

Sie können auch die `onmerchantvalidation` Event-Handler-Eigenschaft verwenden, um den Handler für dieses Ereignis einzurichten:

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

Für weitere Informationen siehe [Händlervalifizierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- `onmerchantvalidation` Event-Handler-Eigenschaft
- [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation)
- {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} Ereignis
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} Ereignis
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} Ereignis
