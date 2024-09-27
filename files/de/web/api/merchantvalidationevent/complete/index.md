---
title: "MerchantValidationEvent: complete() Methode"
short-title: complete()
slug: Web/API/MerchantValidationEvent/complete
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

Die [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Methode **`complete()`** nimmt zuvor empfangene händlerspezifische Informationen von der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) und verwendet sie zur Validierung des Händlers.

Alles, was Sie tun müssen, ist `complete()` innerhalb Ihres Handlers für das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis aufzurufen und die von der `validationURL` abgerufenen Daten zu übergeben.

## Syntax

```js-nolint
complete(validationData)
complete(merchantSessionPromise)
```

### Parameter

- `validationData` oder `merchantSessionPromise`
  - : Ein Objekt, das die Daten enthält, die zum Abschluss des Händler-Validierungsprozesses benötigt werden, oder ein {{jsxref("Promise")}}, das die Validierungsdaten liefert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Ausnahme kann in den Ablehnungshandler für das Promise übergeben werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ereignis nicht direkt vom Benutzeragenten stammt, sondern durch andere Codes ausgelöst wurde. Ein anderer Zahlungsauftrag wird derzeit verarbeitet, der aktuelle Zahlungsantrag wird dem Benutzer nicht angezeigt oder Zahlungsinformationen werden derzeit aktualisiert.

## Beispiele

In diesem Beispiel sehen wir den clientseitigen Code, der erforderlich ist, um die Händler-Validierung für einen Zahlungsauftrag namens `payRequest` zu unterstützen:

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
