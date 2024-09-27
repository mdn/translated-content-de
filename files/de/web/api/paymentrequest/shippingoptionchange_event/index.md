---
title: "PaymentRequest: shippingoptionchange-Ereignis"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Für Zahlungsanforderungen, die Versandinformationen anfordern und für die Versandoptionen angeboten werden, wird das **`shippingoptionchange`**-Ereignis an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gesendet, sobald der Benutzer eine Versandoption aus der Liste der verfügbaren Optionen auswählt.

Die Zeichenkette, die die aktuell ausgewählte Versandoption identifiziert, befindet sich in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption)-Eigenschaft.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisweiterleitung aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

Dieses Codebeispiel richtet einen Handler für das `shippingoptionchange`-Ereignis ein. Der Code berechnet den Gesamtbetrag der Zahlung basierend auf der ausgewählten Versandoption neu. Beispielsweise gibt es, wenn es drei Optionen gibt (wie "Gratis-Versand", "2-Tages-Lieferung" und "Nächstentagsgesamt"), jedes Mal, wenn der Benutzer eine dieser Optionen wählt, wird dieser Ereignishandler aufgerufen, um den Gesamtbetrag auf Basis der geänderten Versandoption neu zu berechnen.

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

Nach dem Aufruf einer benutzerdefinierten Funktion, `calculateNewTotal()`, um den aktualisierten Gesamtbetrag basierend auf der neu ausgewählten Versandoption zu berechnen, wie sie durch [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) angegeben ist. Der überarbeitete Gesamtbetrag wird durch Aufrufen der Methode [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) des Ereignisses zurück an die Zahlungsanforderung übermittelt.

Sie können auch einen Ereignis-Handler für `shippingoptionchange` erstellen, indem Sie die entsprechende Ereignis-Handler-Eigenschaft, `onshippingoptionchange`, verwenden:

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
