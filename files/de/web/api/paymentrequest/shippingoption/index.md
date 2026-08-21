---
title: "PaymentRequest: shippingOption-Eigenschaft"
short-title: shippingOption
slug: Web/API/PaymentRequest/shippingOption
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Das schreibgeschützte Attribut **`shippingOption`** der [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Schnittstelle gibt entweder die ID einer ausgewählten Versandoption, `null` (wenn keine Versandoption zur Auswahl festgelegt wurde) oder eine vom Benutzer ausgewählte Versandoption zurück. Es ist anfänglich `null`, wenn keine "ausgewählte" Versandoptionen bereitgestellt werden.

Dieses Attribut wird nur befüllt, wenn der Konstruktor mit dem `requestShipping`-Flag auf `true` aufgerufen wird. Wenn `requestShipping` `false` (oder nicht vorhanden) war, gibt `shippingOption` `null` zurück, selbst wenn der Entwickler eine ausgewählte Versandoption bereitstellt.

## Wert

Ein Objekt oder `null`.

## Beispiele

Im folgenden Beispiel werden die Ereignisse [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) und [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) ausgelöst. Bei jedem Ereignis wird `updateWith()` aufgerufen, einmal mit einem Promise und das andere Mal mit einem einfachen JS-Objekt. Dies demonstriert synchrone und asynchrone Aktualisierungen eines Zahlungsvorgangs.

```js
const request = new PaymentRequest(methodData, details, options);
// Async update to details
request.onshippingaddresschange = (ev) => {
  ev.updateWith(checkShipping(request));
};
// Sync update to the total
request.onshippingoptionchange = (ev) => {
  const shippingOption = shippingOptions.find(
    (option) => option.id === request.id,
  );
  const newTotal = {
    currency: "USD",
    label: "Total due",
    value: calculateNewTotal(shippingOption),
  };
  ev.updateWith({ ...details, total: newTotal });
};
async function checkShipping(request) {
  try {
    const json = request.shippingAddress.toJSON();

    await ensureCanShipTo(json);
    const { shippingOptions, total } = await calculateShipping(json);

    return { ...details, shippingOptions, total };
  } catch (err) {
    return { ...details, error: `Sorry! we can't ship to your address.` };
  }
}
```

## Browser-Kompatibilität

{{Compat}}
