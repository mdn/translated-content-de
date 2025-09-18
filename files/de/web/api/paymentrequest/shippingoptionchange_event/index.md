---
title: "PaymentRequest: shippingoptionchange Ereignis"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Bei Zahlungsanforderungen, die Versandinformationen anfordern und für die Versandoptionen angeboten werden, wird das **`shippingoptionchange`** Ereignis an das [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gesendet, wenn der Benutzer eine Versandoption aus der Liste der verfügbaren Optionen auswählt.

Der String, der die aktuell ausgewählte Versandoption identifiziert, kann in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) Eigenschaft gefunden werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandlereigenschaft fest.

```js-nolint
addEventListener("shippingoptionchange", (event) => { })

onshippingoptionchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die Eigenschaften, die von [`Event`](/de/docs/Web/API/Event) geerbt werden._

## Beispiele

Dieses Codebeispiel richtet einen Handler für das `shippingoptionchange` Ereignis ein. Der Code berechnet den Gesamtbetrag für die Zahlung basierend auf der ausgewählten Versandoption neu. Wenn es beispielsweise drei Optionen gibt (wie "Kostenloser Ground-Versand", "2-Tage-Lufttransport" und "Nächster Tag"), wird jedes Mal, wenn der Benutzer eine dieser Optionen wählt, dieser Ereignis-Handler aufgerufen, um den Gesamtbetrag basierend auf der geänderten Versandoption neu zu berechnen.

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

Nach dem Aufrufen einer benutzerdefinierten Funktion, `calculateNewTotal()`, um den aktualisierten Gesamtbetrag basierend auf der neu gewählten Versandoption zu berechnen, wie durch die [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) angegeben. Der überarbeitete Gesamtbetrag wird durch Aufrufen der Methode [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) des Ereignisses zurück an die Zahlungsanforderung übermittelt.

Sie können auch einen Ereignis-Handler für `shippingoptionchange` mit der entsprechenden Ereignishandlereigenschaft `onshippingoptionchange` erstellen:

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
