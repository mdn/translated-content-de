---
title: "PaymentRequest: shippingoptionchange Ereignis"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Für Zahlungsanforderungen, die Versandinformationen anfordern und für die Versandoptionen angeboten werden, wird das **`shippingoptionchange`** Ereignis an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gesendet, wenn der Benutzer eine Versandoption aus der Liste der verfügbaren Optionen wählt.

Der String, der die aktuell ausgewählte Versandoption identifiziert, kann in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) Eigenschaft gefunden werden.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("shippingoptionchange", (event) => {});

onshippingoptionchange = (event) => {};
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die von [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften._

## Beispiele

Dieses Codebeispiel richtet einen Handler für das `shippingoptionchange` Ereignis ein. Der Code berechnet die Gesamtkosten für die Zahlung basierend auf der ausgewählten Versandoption neu. Beispielsweise, wenn es drei Optionen gibt (wie "Kostenloser Bodentransport", "2-Tages-Lufttransport" und "Nächster Tag"), wird jedes Mal, wenn der Benutzer eine dieser Optionen auswählt, dieser Ereignishandler aufgerufen, um den Gesamtbetrag basierend auf der geänderten Versandoption neu zu berechnen.

```js
paymentRequest.addEventListener(
  "shippingoptionchange",
  (event) => {
    const value = calculateNewTotal(paymentRequest.shippingOption);
    const total = {
      currency: "EUR",
      label: "Total due",
      value,
    };
    event.updateWith({ total });
  },
  false,
);
```

Nach dem Aufruf einer benutzerdefinierten Funktion, `calculateNewTotal()`, um den aktualisierten Gesamtbetrag basierend auf der neu ausgewählten Versandoption zu berechnen, wie in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) angegeben. Der überarbeitete Gesamtbetrag wird durch Aufrufen der Methode [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) des Ereignisses zurück zur Zahlungsanforderung übermittelt.

Sie können auch einen Ereignishandler für `shippingoptionchange` erstellen, indem Sie die entsprechende Ereignishandler-Eigenschaft `onshippingoptionchange` verwenden:

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
