---
title: "MerchantValidationEvent: complete() Methode"
short-title: complete()
slug: Web/API/MerchantValidationEvent/complete
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

Die Methode **`complete()`** des {{domxref("MerchantValidationEvent")}} nimmt zuvor von der {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} erhaltene händlerspezifische Informationen und verwendet sie zur Validierung des Händlers.

Alles, was Sie tun müssen, ist, `complete()` aus Ihrem Handler für das {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} Ereignis aufzurufen und die von der `validationURL` abgerufenen Daten zu übergeben.

## Syntax

```js-nolint
complete(validationData)
complete(merchantSessionPromise)
```

### Parameter

- `validationData` oder `merchantSessionPromise`
  - : Ein Objekt, das die Daten enthält, die zur Durchführung des Händler-Validierungsprozesses benötigt werden, oder ein {{jsxref("Promise")}}, der sich mit den Validierungsdaten auflöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Ausnahme kann in den Ablehnungs-Handler des Versprechens übergeben werden:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das Ereignis nicht direkt vom Benutzeragenten kam, sondern von anderem Code ausgelöst wurde. Eine andere Zahlungsanforderung wird derzeit bearbeitet, die aktuelle Zahlungsanforderung wird dem Benutzer derzeit nicht angezeigt oder Zahlungsinformationen werden derzeit aktualisiert.

## Beispiele

In diesem Beispiel sehen wir den clientseitigen Code, der zur Unterstützung der Händler-Validierung für eine Zahlungsanforderung namens `payRequest` erforderlich ist:

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

Dieser Code richtet einen Handler für das {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} Ereignis ein. Der Ereignishandler ruft eine Funktion `getValidationData()` auf, die die Daten von der Validierungs-URL abruft und dann diese Daten (oder ein Versprechen zur Lieferung der Daten) an `complete()` übergibt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Die Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsverarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
