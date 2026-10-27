---
title: "PaymentRequest: shippingoptionchange-Ereignis"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Bei Zahlungsanforderungen, die Versandinformationen anfordern und Versandoptionen anbieten, wird das **`shippingoptionchange`**-Ereignis an [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gesendet, wenn der Benutzer eine Versandoption aus der Liste der verfügbaren Optionen auswählt.

Die Zeichenfolge, die die aktuell ausgewählte Versandoption identifiziert, steht in der [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption)-Eigenschaft.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("shippingoptionchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onshippingoptionchange = (event) => { }
```

## Ereignistyp

Ein [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Beispiele

Dieser Codeausschnitt richtet einen Handler für das `shippingoptionchange`-Ereignis ein. Der Code berechnet den Gesamtbetrag der Zahlung anhand der ausgewählten Versandoption neu. Wenn es beispielsweise drei Optionen gibt („Kostenloser Standardversand“, „Luftversand innerhalb von zwei Tagen“ und „Lieferung am nächsten Tag“), wird dieser Event-Handler jedes Mal aufgerufen, wenn der Benutzer eine dieser Optionen auswählt, um den Gesamtbetrag entsprechend der geänderten Versandoption neu zu berechnen.

```js
paymentRequest.addEventListener("shippingoptionchange", (event) => {
  const value = calculateNewTotal(paymentRequest.shippingOption);
  const total = {
    label: "Total due",
    amount: { currency: "EUR", value },
  };
  event.updateWith({ total });
});
```

Anschließend wird eine benutzerdefinierte Funktion, `calculateNewTotal()`, aufgerufen, um den aktualisierten Gesamtbetrag anhand der neu ausgewählten Versandoption zu berechnen, die durch [`shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) angegeben wird. Der neue Gesamtbetrag wird an die Zahlungsanforderung übergeben, indem die Methode [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith) des Ereignisses aufgerufen wird.

Sie können einen Event-Handler für `shippingoptionchange` auch über die zugehörige Event-Handler-Eigenschaft `onshippingoptionchange` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onshippingoptionchange` hinzugefügte Event-Listener ersetzt werden:

```js
paymentRequest.onshippingoptionchange = (event) => {
  const value = calculateNewTotal(paymentRequest.shippingOption);
  const total = {
    label: "Total due",
    amount: { currency: "EUR", value },
  };
  event.updateWith({ total });
};
```

## Browser-Kompatibilität

{{Compat}}
