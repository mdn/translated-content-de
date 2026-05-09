---
title: "MerchantValidationEvent: complete() Methode"
short-title: complete()
slug: Web/API/MerchantValidationEvent/complete
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}{{non-standard_header}}

Die Methode **`complete()`** des [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) verwendet zuvor vom [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) erhaltene händlerspezifische Informationen, um den Händler zu validieren.

Sie müssen nur `complete()` aus Ihrem Handler für das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis aufrufen und die von der `validationURL` abgerufenen Daten übergeben.

## Syntax

```js-nolint
complete(validationData)
complete(merchantSessionPromise)
```

### Parameter

- `validationData` oder `merchantSessionPromise`
  - : Ein Objekt, das die Daten enthält, die benötigt werden, um den Händler-Validierungsprozess abzuschließen, oder ein {{jsxref("Promise")}}, das sich zu den Validierungsdaten auflöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Ausnahme kann dem Ablehnungs-Handler des Versprechens übergeben werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ereignis nicht direkt vom User-Agent stammt, sondern stattdessen von anderem Code ausgelöst wurde. Eine andere Zahlungsanfrage wird derzeit verarbeitet, die aktuelle Zahlungsanfrage wird dem Benutzer nicht angezeigt, oder Zahlungsinformationen werden gerade aktualisiert.

## Beispiele

In diesem Beispiel sehen wir den clientseitigen Code, der benötigt wird, um die Händler-Validierung für eine Zahlungsanfrage namens `payRequest` zu unterstützen:

```js
payRequest.onmerchantvalidation = (event) => {
  const validationDataPromise = getValidationData(event.validationURL);
  event.complete(validationDataPromise);
};

function getValidationData(url) {
  // Retrieve the validation data from the URL
  // …
}
```

Dieser Code richtet einen Handler für das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis ein. Der Ereignis-Handler ruft eine Funktion `getValidationData()` auf, die die Daten von der Validierungs-URL abruft und dann diese Daten (oder ein Versprechen zur Lieferung der Daten) in `complete()` übergibt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
