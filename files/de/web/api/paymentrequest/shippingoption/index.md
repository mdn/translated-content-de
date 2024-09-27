---
title: "PaymentRequest: shippingOption-Eigenschaft"
short-title: shippingOption
slug: Web/API/PaymentRequest/shippingOption
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das schreibgeschützte Attribut **`shippingOption`** des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Interfaces gibt entweder die ID einer ausgewählten Versandoption, `null` (wenn keine Versandoption als ausgewählt festgelegt wurde) oder eine vom Benutzer ausgewählte Versandoption zurück. Es ist zunächst `null`, wenn keine "ausgewählte" Versandoption bereitgestellt wird.

Dieses Attribut wird nur gefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag auf `true` gesetzt wird. Falls `requestShipping` `false` (oder fehlt), gibt `shippingOption` `null` zurück, selbst wenn der Entwickler eine ausgewählte Versandoption bereitstellt.

## Wert

## Beispiele

Im untenstehenden Beispiel werden die [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)- und die [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)-Ereignisse ausgelöst. Dabei wird in jedem Fall ein Aufruf von `updateDetails()` gemacht, einmal mit einem Promise und einmal mit einem einfachen JS-Objekt. Dies demonstriert synchrone und asynchrone Aktualisierungen eines Zahlungssheets.

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
