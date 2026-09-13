---
title: "MerchantValidationEvent: complete()-Methode"
short-title: complete()
slug: Web/API/MerchantValidationEvent/complete
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{non-standard_header}}

Die [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent)-Methode **`complete()`** verwendet händlerspezifische Informationen, die zuvor von der [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) empfangen wurden, um den Händler zu validieren.

Alles, was Sie tun müssen, ist `complete()` von Ihrem Handler für das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis aufzurufen und dabei die von der `validationURL` abgerufenen Daten zu übergeben.

## Syntax

```js-nolint
complete(validationData)
complete(merchantSessionPromise)
```

### Parameter

- `validationData` oder `merchantSessionPromise`
  - : Ein Objekt, das die zur Vervollständigung des Händler-Validierungsprozesses benötigten Daten enthält, oder ein {{jsxref("Promise")}}, das die Validierungsdaten auflöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Ausnahme kann in den Ablehnungshandler des Promise übergeben werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ereignis nicht direkt vom User Agent stammt, sondern von anderem Code ausgelöst wurde. Eine weitere Zahlungsanforderung wird derzeit verarbeitet, die aktuelle Zahlungsanforderung wird dem Benutzer derzeit nicht angezeigt, oder Zahlungsinformationen werden derzeit aktualisiert.

## Beispiele

Im folgenden Beispiel sehen wir den clientseitigen Code, der zur Unterstützung der Händler-Validierung für eine Zahlungsanforderung namens `payRequest` erforderlich ist:

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

Dieser Code richtet einen Handler für das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis ein. Der Ereignishandler ruft eine Funktion, `getValidationData()`, auf, die die Daten von der Validierungs-URL abruft und diese Daten (oder ein Versprechen, die Daten zu liefern) in `complete()` übergibt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
