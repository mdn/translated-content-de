---
title: "PaymentRequest: shippingoptionchange Ereignis"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Für Zahlungsanforderungen, die Versandinformationen anfordern und für die Versandoptionen angeboten werden, wird das **`shippingoptionchange`** Ereignis an [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gesendet, sobald der Benutzer eine Versandoption aus der Liste der verfügbaren Optionen wählt.

Die Zeichenkette, die die aktuell ausgewählte Versandoption identifiziert, kann in der Eigenschaft [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) gefunden werden.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js-nolint
addEventListener("shippingoptionchange", (event) => { })

onshippingoptionchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Beispiele

Dieser Codeausschnitt richtet einen Handler für das `shippingoptionchange` Ereignis ein. Der Code berechnet die Gesamtkosten für die Zahlung basierend auf der ausgewählten Versandoption neu. Zum Beispiel, wenn es drei Optionen gibt (wie "Kostenloser Versand", "2-Tage Luftfracht" und "Nächster Tag"), wird jedes Mal, wenn der Benutzer eine dieser Optionen auswählt, dieser Ereignishandler aufgerufen, um das Total basierend auf der geänderten Versandoption neu zu berechnen.

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

Nach dem Aufruf einer benutzerdefinierten Funktion, `calculateNewTotal()`, um das aktualisierte Total basierend auf der neu ausgewählten Versandoption zu berechnen, wie in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) spezifiziert. Das überarbeitete Total wird durch Aufrufen der Methode [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) des Ereignisses zurück an die Zahlungsanforderung übermittelt.

Sie können auch einen Ereignis-Handler für `shippingoptionchange` mithilfe der entsprechenden Ereignis-Handler-Eigenschaft `onshippingoptionchange` erstellen:

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
