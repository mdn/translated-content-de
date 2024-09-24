---
title: "PaymentRequest: shippingoptionchange Ereignis"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Für Zahlungsanforderungen, die Versandinformationen anfordern und für die Versandoptionen angeboten werden, wird das **`shippingoptionchange`**-Ereignis an das {{domxref("PaymentRequest")}} gesendet, sobald der Nutzer eine Versandoption aus der Liste der verfügbaren Optionen auswählt.

Die Zeichenfolge, die die aktuell ausgewählte Versandoption identifiziert, kann in der {{domxref("PaymentRequest.shippingOption", "shippingOption")}} Eigenschaft gefunden werden.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("shippingoptionchange", (event) => {});

onshippingoptionchange = (event) => {};
```

## Ereignistyp

Ein {{domxref("PaymentRequestUpdateEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Ereigniseigenschaften

_Bietet nur die geerbten Eigenschaften von {{domxref("Event")}}._

## Beispiele

Dieses Codebeispiel richtet einen Handler für das `shippingoptionchange`-Ereignis ein. Der Code berechnet die Gesamtkosten für die Zahlung basierend auf der ausgewählten Versandoption neu. Wenn z.B. drei Optionen vorhanden sind (wie "Kostenloser Versand", "2-Tage-Flug" und "Nächster Tag"), wird dieser Ereignishandler jedes Mal aufgerufen, wenn der Benutzer eine dieser Optionen wählt, um das Gesamt basierend auf der geänderten Versandoption neu zu berechnen.

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

Nach dem Aufruf einer benutzerdefinierten Funktion, `calculateNewTotal()`, um das aktualisierte Gesamtergebnis auf Basis der neu gewählten Versandoption, die durch die {{domxref("PaymentRequest.shippingOption", "shippingOption")}} angegeben wird, zu berechnen. Das überarbeitete Gesamtergebnis wird zurück an die Zahlungsanforderung gesendet, indem die {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} Methode des Ereignisses aufgerufen wird.

Sie können auch einen Ereignis-Handler für `shippingoptionchange` erstellen, indem Sie seine entsprechende Ereignis-Handler-Eigenschaft, `onshippingoptionchange`, verwenden:

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
