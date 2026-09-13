---
title: "PaymentRequest: shippingoptionchange Event"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Für Zahlungsanforderungen, die Versandinformationen anfordern und für die Versandoptionen angeboten werden, wird das **`shippingoptionchange`**-Ereignis an die [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gesendet, wann immer der Benutzer eine Versandoption aus der Liste der verfügbaren Optionen auswählt.

Der String, der die aktuell ausgewählte Versandoption identifiziert, ist in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) Eigenschaft zu finden.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("shippingoptionchange", (event) => { })

onshippingoptionchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Beispiele

Dieses Codebeispiel richtet einen Handler für das `shippingoptionchange`-Ereignis ein. Der Code berechnet die Gesamtkosten für die Zahlung basierend auf der ausgewählten Versandoption neu. Zum Beispiel, wenn es drei Optionen gibt (wie "Kostenloser Bodentransport", "Luftversand in 2 Tagen" und "Nächster Tag"), wird jedes Mal, wenn der Benutzer eine dieser Optionen auswählt, dieser Ereignishandler aufgerufen, um den Gesamtbetrag basierend auf der geänderten Versandoption neu zu berechnen.

```js
paymentRequest.addEventListener("shippingoptionchange", (event) => {
  const value = calculateNewTotal(paymentRequest.shippingOption);
  const total = {
    currency: "EUR",
    label: "Total due",
    value,
  };
  event.updateWith({ total });
});
```

Nach dem Aufruf einer benutzerdefinierten Funktion, `calculateNewTotal()`, um den aktualisierten Gesamtbetrag basierend auf der neu ausgewählten Versandoption zu berechnen, wie sie durch die [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) angegeben ist. Der überarbeitete Gesamtbetrag wird durch den Aufruf der [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) Methode des Ereignisses zurück an die Zahlungsanforderung übermittelt.

Sie können auch einen Ereignishandler für `shippingoptionchange` erstellen, indem Sie dessen entsprechende Ereignishandlereigenschaft, `onshippingoptionchange`, verwenden:

```js
paymentRequest.onshippingoptionchange = (event) => {
  const value = calculateNewTotal(paymentRequest.shippingOption);
  const total = {
    currency: "EUR",
    label: "Total due",
    value,
  };
  event.updateWith({ total });
};
```

## Browser-Kompatibilität

{{Compat}}
