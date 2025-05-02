---
title: "PaymentRequest: shippingoptionchange-Event"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Bei Zahlungsanforderungen, die Versandinformationen erfragen und für die Versandoptionen angeboten werden, wird das **`shippingoptionchange`**-Ereignis an den [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gesendet, sobald der Benutzer eine Versandoption aus der Liste der verfügbaren Optionen auswählt.

Der String, der die aktuell ausgewählte Versandoption identifiziert, kann in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption)-Eigenschaft gefunden werden.

Dieses Ereignis ist nicht abbrechbar und hat keine Ereignisweiterleitung.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("shippingoptionchange", (event) => { })

onshippingoptionchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die von [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften._

## Beispiele

Dieser Code-Snippet richtet einen Handler für das `shippingoptionchange`-Ereignis ein. Der Code berechnet den Gesamtkostenbetrag für die Zahlung basierend auf der ausgewählten Versandoption neu. Wenn es beispielsweise drei Optionen gibt (wie "Kostenloser Bodentransport", "2-Tages-Luftpost" und "Nächster Tag"), wird bei jeder Auswahl einer dieser Optionen durch den Benutzer dieser Ereignishandler aufgerufen, um den Gesamtbetrag basierend auf der geänderten Versandoption neu zu berechnen.

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

Nach dem Aufruf einer benutzerdefinierten Funktion, `calculateNewTotal()`, um den aktualisierten Gesamtbetrag basierend auf der neu ausgewählten Versandoption zu berechnen, wie in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) angegeben. Der überarbeitete Gesamtbetrag wird durch Aufruf der Methode [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) des Ereignisses an die Zahlungsanforderung zurückgegeben.

Sie können auch einen Ereignishandler für `shippingoptionchange` erstellen, indem Sie seine entsprechende Ereignishandler-Eigenschaft, `onshippingoptionchange`, verwenden:

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
