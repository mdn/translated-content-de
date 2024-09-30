---
title: "MerchantValidationEvent: complete() Methode"
short-title: complete()
slug: Web/API/MerchantValidationEvent/complete
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

Die Methode **`complete()`** von [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) verwendet zuvor von der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) empfangene händlerspezifische Informationen, um den Händler zu validieren.

Alles, was Sie tun müssen, ist `complete()` aus Ihrem Handler für das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis aufzurufen, wobei die von der `validationURL` abgerufenen Daten übergeben werden.

## Syntax

```js-nolint
complete(validationData)
complete(merchantSessionPromise)
```

### Parameter

- `validationData` oder `merchantSessionPromise`
  - : Ein Objekt, das die Daten enthält, die benötigt werden, um den Händler-Validierungsprozess abzuschließen, oder ein {{jsxref("Promise")}}, welches sich auf die Validierungsdaten auflöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Ausnahme kann an den Ablehnungs-Handler für das Promise übergeben werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ereignis nicht direkt vom Benutzeragenten stammt, sondern stattdessen von anderem Code gesendet wurde. Eine andere Zahlungsanforderung wird derzeit verarbeitet, die aktuelle Zahlungsanforderung wird dem Benutzer momentan nicht angezeigt, oder Zahlungsinformationen werden derzeit aktualisiert.

## Beispiele

In diesem Beispiel sehen wir den clientseitigen Code, der benötigt wird, um die Händler-Validierung für eine Zahlungsanforderung namens `payRequest` zu unterstützen:

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

Dieser Code richtet einen Handler für das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis ein. Der Ereignishandler ruft eine Funktion `getValidationData()` auf, die die Daten von der Validierungs-URL abruft und diese Daten (oder ein Versprechen, die Daten zu liefern) an `complete()` übergibt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
